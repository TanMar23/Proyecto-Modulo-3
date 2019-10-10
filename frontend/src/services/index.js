import axios from 'axios';

// para crear las peticiones de axios

const isProduction = process.env.NODE_ENV === 'production'

const baseURL = isProduction ? 'https://young-beyond-07801.herokuapp.com' : 'http://localhost:3000/api'

const service = axios.create({ withCredentials: true, baseURL });

const MY_SERVICE = {
  test: async () => {
    return await service.get('/');
  },
  signup: async (user) => {
    return await service.post('/signup', user);
  },
  login: async (user) => {
    return await service.post('/login', user);
  },
  logOut: async () => {
    return await service.get('/logout');
  },
  levelUp: async () => {
    return await service.get('/levelup/:id')
  }

};

export default MY_SERVICE;
