import axios from "axios";

const defaultPort = 3050;
const baseUrl = `http://localhost:${defaultPort}/api`;

const handleError = err => console.log(err);

export const getAllCars = () => {
  return axios
    .get(`${baseUrl}/cars`)
    .then(response => {
      console.log(response.data);
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw response.statusText;
      }
    })
    .catch(handleError);
};

export const getCarById = id => {
  return axios
    .get(`${baseUrl}/cars/${id}`)
    .then(response => {
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw response.statusText;
      }
    })
    .catch(handleError);
};

export const addCar = car => {
  return axios
    .post(`${baseUrl}/cars`, car)
    .then(response => {
      if (response.statusText === 'OK') {
        return response.data;
      } else {
        throw response.statusText;
      }
    })
    .catch(handleError);
};
