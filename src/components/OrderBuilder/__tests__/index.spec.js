import React from 'react';
import { act } from 'react-dom/test-utils'
import {
  cleanup, render, fireEvent, waitForElement,
} from 'react-testing-library';
import MockFirebase from 'mock-cloud-firestore';
import OrderBuilder from '../index';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const fixtureData = {
  __collection__: {
    orders: {
      __doc__: {
        Le456: {
          clientName: 'Maria',
          date: '12 de febrero de 2019, 09:56:40 UTC-5',
          products: [
            {
              cant: 1,
              id: 'Ag500GgsQIXAqPnr9KE',
              label: 'Agua 500ml',
              price: 7,
            },
          ],
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('sendToKitchen', () => {
  it('Debería enviar una orden a firestore', (done) => {
    const getCollection = (callback) => {
      const db = firebase.firestore();
      db.collection('orders').onSnapshot((querySnapshot) => {
        const orderData = [];
        querySnapshot.forEach((doc) => {
          orderData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(orderData);
      });
    };
    const { getByTestId } = render(<OrderBuilder />);
    const addOrder = waitForElement(() => getByTestId('Ag500GgsQIXAqPnr9KE-add-button'));
    act(() => { //respecto a lo que me explico Cinthya... 
        fireEvent.click(addOrder);
        done();
    });
    
    const btnSendToKitchen = waitForElement(() => getByTestId('send-to-kitchen'));
    act(() => {
        fireEvent.click(btnSendToKitchen);
        done();
    });

    const getOrders = (data) => {
      expect(data).toHaveLength(1);
    };
    getCollection(getOrders);
  });
});