import { init } from '@rematch/core';
import users from './users';

const models = {
  users,
}

const store = init( { 
  models,
})

export default store;
