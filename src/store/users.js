/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    users: [],
  },

  reducers: {
    loaded: ( state, payload) => payload,
    setUsers(state, payload) {
      return { ...state, users: payload };
    },
  },

  effects: (dispatch) => ({

    async loadClientes(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.clientes);
        if (response && response.status === 200) {
//          await this.setClientes(response)
console.log(response)
            this.setUsers(response.data);
//          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  })
};
