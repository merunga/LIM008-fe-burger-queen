// import React from 'react';
// import { render, fireEvent, cleanup } from 'react-testing-library';
// import MockFirebase from 'mock-cloud-firestore';
// import ProductsArea from '../index';

// beforeEach(cleanup);

// const fixtureData = {
//   __collection__: {
//     dining: {
//       __doc__: {
//         Ag500mlSCH: {
//           label: 'Agua 500ml',
//           price: 7,
//           type: 'd',
//         },
//       },
//     },
//   },
// };

// global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

// describe('<ProductsArea />', () => {
//   it('Debería agregar el id correspondiente a la data proporcionada', (done) => {
//     const getDining = (callback) => {
//       const db = firebase.firestore();
//       db.collection('dining').onSnapshot((querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//           data.push({
//             id: doc.id,
//             ...doc.data(),
//           });
//         });
//         callback(data);
//       });
//     };

//     const getData = (data) => {
//       const result = data.find(din => din.id === 'Ag500mlSCH');
//       expect(label).toBe(result.label);
//       done();
//     };

//     const add = () => getDining(getData);

//     const { getByTestId } = render(<ProductsArea addedProduct={add} />);
//     const button = getByTestId('Ag500mlSCH-add-button');
//     fireEvent.click(button);
//   });
// });
