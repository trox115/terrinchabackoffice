/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    produtos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setProdutos(state, payload) {
      return { ...state, produtos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadProdutos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.produtos);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          console.log(response);
          this.setProdutos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
