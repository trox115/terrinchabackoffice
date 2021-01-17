/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    menus: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setMenus(state, payload) {
      return { ...state, menus: payload };
    },
  },

  effects: (dispatch) => ({
    async loadMenus(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.menus);
        console.log(response)
        console.log(response)
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          console.log(response);
          this.setMenus(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
