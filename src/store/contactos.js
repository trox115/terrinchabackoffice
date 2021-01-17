/* eslint-disable import/no-anonymous-default-export */
import { get, post } from '../Api/api';
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
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          this.setContactos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },

    async novoContacto(payload, state) {
      try {
        //this.setLoading(true);
        console.log(payload)
        const response = await post(apiUrls.novocontacto,payload);
        if (response && response.status === 200) {
          console.log('done')
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
