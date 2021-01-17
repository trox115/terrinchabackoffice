/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    encomendas: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setEncomendas(state, payload) {
      return { ...state, encomendas: payload };
    },
  },

  effects: (dispatch) => ({
    async loadEncomendas(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.encomendas);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          this.setEncomendas(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
