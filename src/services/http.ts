import axios from 'axios'

export const get = (url = '', params = {}) => axios({ baseURL: 'https://api.artic.edu/api/v1', url, params });
