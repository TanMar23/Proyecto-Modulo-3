import axios from 'axios';
const isProduction = process.env.NODE_ENV === 'production'

const baseURL = isProduction ? 'https://young-beyond-07801.herokuapp.com/api' : 'http://localhost:3000/api'

const service = axios.create({ baseURL });

const CENTER_SERVICE = {

    addCenter: async (center) => {
        console.log(center)
        return await service.post('/create-new', center)
      },

      addContribution: async(contribution) => {
        console.log(contribution)
        return await service.post('/add-contribution', contribution)
      }
}

 

export default CENTER_SERVICE;
