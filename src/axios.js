import axios from 'axios'

const instance = axios.create({
  // The API (cloud function) URL
  baseURL: 'https://us-central1-clone-5c0fb.cloudfunctions.net/api'
  
  //'http://localhost:5001/clone-5c0fb/us-central1/api' 

  
})

export default instance