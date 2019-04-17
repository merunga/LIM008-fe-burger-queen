// import React from 'react';
// import {
//   cleanup, render, fireEvent, waitForElement,
// } from 'react-testing-library';
// import MockFirebase from 'mock-cloud-firestore';
// import OrderBuilder from '../index';

// beforeEach(cleanup);


// const fixtureData = {
//   __collection__: {
//     orders: {
//       __doc__: {
//         Le456: {
//           clientName: 'Maria',
//           date: '12 de febrero de 2019, 09:56:40 UTC-5',
//           products: [
//             {
//               cant: 1,
//               id: 1,
//               label: 'Agua 500ml',
//               price: 7,
//             },
//           ],
//         },
//       },
//     },
//   },
// };

// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


// describe('sendToKitchen', () => {
//   it('Debería enviar una orden a firestore', async (done) => {
//     const getCollection = (callback) => {
//       const db = firebase.firestore();
//       db.collection('orders').onSnapshot((querySnapshot) => {
//         const orderData = [];
//         querySnapshot.forEach((doc) => {
//           orderData.push({
//             id: doc.id,
//             ...doc.data(),
//           });
//         });
//         callback(orderData);
//       });
//     };
//     const { getByTestId } = render(<OrderBuilder />);
//     const addOrderBtn = await waitForElement(() => getByTestId('1-add-button'));
//     fireEvent.click(addOrderBtn);
//     const btnSendToKitchen = await waitForElement(() => getByTestId('send-to-kitchen'));
//     fireEvent.click(btnSendToKitchen);
//     const getOrders = (data) => {
//       expect(data).toHaveLength(1);
//       done();
//     };
//     getCollection(getOrders);
//   });
// });
