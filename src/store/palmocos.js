/* eslint-disable import/no-anonymous-default-export */
import { get } from '../Api/api';
import { apiUrls } from '../Api/apiUrls';
import _ from 'lodash';

export default {
  state: {
    palmocos: [],
  },

  reducers: {
    loaded: (state, payload) => payload,
    setPalmocos(state, payload) {
      return { ...state, palmocos: payload };
    },
  },

  effects: (dispatch) => ({
    async loadPalmocos(payload, state) {
      try {
        //this.setLoading(true);
        const response = await get(apiUrls.palmocos);
        if (response && response.status === 200) {
          //          await this.setClientes(response)
          this.setPalmocos(response.data);
          //          this.setLoading(false);
        }
      } catch (error) {
        //TODO: HANDLE ERROR
      }
    },
  }),
};
