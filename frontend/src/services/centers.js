import axios from 'axios';

const baseURL = 'http://localhost:3000/api'

const service = axios.create({ baseURL });

const CENTER_SERVICE = {

    addCenter: async (center) => {
        console.log(center)
        return await service.post('/create-new', center)
      }
}

export default CENTER_SERVICE;
