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
        abc2d: {
          cantidad: 0,
          categoría: 'Resto del día',
          id: 'P2',
          nombre: 'Hamburguesa simple de pollo',
          precio: 10,
          producto: 'Hamburguesas',
        },
      },
    },
  },
};
export default new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });
