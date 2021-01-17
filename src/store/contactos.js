/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';

export default {
  state: {
    contactos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setContactos(state, payload) {
      return { ...state, contactos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadContactos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.contactos);
        console.log(response)
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          console.log(response);
          this.setContactos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
