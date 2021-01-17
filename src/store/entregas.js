/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';

export default {
  state: {
    entregas: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setEntregas(state, payload) {
      return { ...state, entregas: payload };
    },
  },

  effects: (dispatch) => ({
    async loadEntregas(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.entregas);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          this.setEntregas(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
