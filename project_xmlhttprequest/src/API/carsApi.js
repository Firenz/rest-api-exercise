const defaultPort = 3050;
const baseUrl = `http://localhost:${defaultPort}/api`;

export const getAllCars = () => {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/cars`;
    const client = new XMLHttpRequest();
    client.responseType = "text";

    client.onload = event => resolve(JSON.parse(event.target.responseText));
    client.onerror = event =>
      reject(`${event.target.status}:${event.target.statusText}`);
    client.open("get", url);
    client.send();
  });
};

export const getCarById = id => {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/cars/${id}`;
    const client = new XMLHttpRequest();
    client.responseType = "text";

    client.onload = event => resolve(JSON.parse(event.target.responseText));
    client.onerror = event =>
      reject(`${event.target.status}:${event.target.statusText}`);
    client.open("get", url);
    client.send();
  });
};

export const addCar = car => {
  return new Promise((resolve, reject) => {
    const url = `${baseUrl}/cars`;
    const car_json = {
      card_id: car.car_id,
      name: car.name,
      brand: car.brand,
      year_release: car.year_release
    };

    const client = new XMLHttpRequest();
    client.responseType = "text";
    client.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    client.onload = event => resolve(JSON.parse(event.target.responseText));
    client.onerror = event =>
      reject(`${event.target.status}:${event.target.statusText}`);

    client.open("post", url);
    client.send(car_json);
  });
};