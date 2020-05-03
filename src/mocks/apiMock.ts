

import axios from 'axios';
jest.mock('axios');


export const getBreeds = async () => {
    try {
      return await axios.get('http://localhost:3000/api/street')
    } catch (error) {
      console.error(error)
    }
  }
  
//   export const countBreeds = async () => {
//     const breeds = await getBreeds()
  
//     if (breeds.data.message) {
//       console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
//     }
//   }