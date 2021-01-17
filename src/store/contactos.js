/* eslint-disable import/no-anonymous-default-export */
import { get, post, patch, remove } from '../Api/api';
import { apiUrls, replaceUrls } from '../Api/apiUrls';

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
        const response = await post(apiUrls.novocontacto,payload);
        if (response && response.status === 200) {
          console.log('done')
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async editarContacto(payload, state) {
      try {
        //this.setLoading(true);
        const { id, nome, telefone } = payload;
        const response = await patch(replaceUrls(apiUrls.editarcontacto, {id}),{nome, telefone});
        if (response && response.status === 200) {
          console.log('done')
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
    async apagarContacto(payload, state) {
      try {
        //this.setLoading(true);
        const { id} = payload;
        const response = await remove(replaceUrls(apiUrls.apagarContacto, {id}));
        if (response && response.status === 200) {
          console.log('done')
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
