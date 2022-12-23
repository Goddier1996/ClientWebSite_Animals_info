import {Config} from './config';


export const API = {
  NODE: {
    GET: `${Config.API.BASE}/api/animal`,
    ADD: `${Config.API.BASE}/api/animal/add`,
    DELETE: `${Config.API.BASE}/api/animal/delete`,
    UPDATED: `${Config.API.BASE}/api/animal/updated`,
  },

  USER: {
    GET: `${Config.API.BASE}/api/admin`,
  },
};
