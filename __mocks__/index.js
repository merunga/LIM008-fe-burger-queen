import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
  __collection__: {
    Menú: {
      __doc__: {
        abc1d: {
          cantidad: 0,
          categoría: 'Desayuno',
          id: 'P1',
          nombre: 'Café americano',
          precio: 5,
          producto: 'Breakfast',
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
