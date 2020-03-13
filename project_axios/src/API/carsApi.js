import axios from "axios";
import { addCarRows } from "../uiHelpers";

const defaultPort = 3050;
const baseUrl = `http://localhost:${defaultPort}/api`;

const handleError = err => console.log(err);

export const getAllCars = () => {
  return axios
    .get(`${baseUrl}/cars`)
    .then(response => {
      if (response.ok) {
        return response.json();
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
      if (response.ok) {
        return response.json();
      } else {
        throw response.statusText;
      }
    })
    .catch(handleError);
};

export const addCar = car => {
  return axios
    .post(`${baseUrl}/cars`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw response.statusText;
      }
    })
    .catch(handleError);
};
