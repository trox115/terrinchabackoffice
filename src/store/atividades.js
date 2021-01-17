/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    atividades: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setAtividades(state, payload) {
      return { ...state, atividades: payload };
    },
  },

  effects: (dispatch) => ({
    async loadAtividades(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.atividades);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          console.log(response);
          this.setAtividades(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
