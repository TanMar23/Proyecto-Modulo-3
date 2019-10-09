import axios from 'axios';

const baseURL = 'https://young-beyond-07801.herokuapp.com/api'

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
