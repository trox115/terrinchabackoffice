import { init } from '@rematch/core';
import users from './users';
import casas from './casas'

const models = {
  users,
  casas
}

const store = init( { 
  models,
})

export default store;
