import { init } from '@rematch/core';
import users from './users';
import casas from './casas';
import produtos from './produtos'

const models = {
  users,
  casas,
  produtos
}

const store = init( { 
  models,
})

export default store;
