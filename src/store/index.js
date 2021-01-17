import { init } from '@rematch/core';
import users from './users';
import casas from './casas';
import produtos from './produtos';
import encomendas from './encomendas';

const models = {
  users,
  casas,
  produtos,
  encomendas
}

const store = init( { 
  models,
})

export default store;
