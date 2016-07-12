import axios from 'axios';

const BASE_URI = 'http://localhost:3000'

function getData(type, tag){
  return axios.get(`${BASE_URI}/${type}/${tag}`)
    .then((response) => ({ values: response.data.values }))
    .catch((error) => ({ values: [] }));
}

function updateData(type, id, values){
  return axios.post(`${BASE_URI}/${type}`, { id, values })
    .then((response) => ({ values: response.data.values }))
    .catch((error) => ({ values: [] }));
}

const fauxBase = {
  get: getData,
  update: updateData
}

export default fauxBase;
