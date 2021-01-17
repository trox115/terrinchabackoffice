import { init } from '@rematch/core';
import users from './users';
import casas from './casas';
import produtos from './produtos';
import encomendas from './encomendas';
import atividades from './atividades';
import palmocos from './palmocos';
import menus from './menus';

const models = {
  users,
  casas,
  produtos,
  encomendas,
  atividades,
  palmocos,
  menus
}

const store = init( { 
  models,
})

export default store;
