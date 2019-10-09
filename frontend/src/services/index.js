import axios from 'axios';

// para crear las peticiones de axios

// process.env.NODE_ENV === 'production'
  // ? (const baseURL = 'here should be your production endpoint')
  // : ();
const baseURL = 'https://young-beyond-07801.herokuapp.com/api'

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
