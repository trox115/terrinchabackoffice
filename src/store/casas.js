/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    casas: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setCasas(state, payload) {
      return { ...state, casas: payload };
    },
  },

  effects: (dispatch) => ({
    async loadCasas(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.casas);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          this.setCasas(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
