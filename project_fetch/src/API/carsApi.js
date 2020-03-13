const defaultPort = 3050;
const baseUrl = `http://localhost:${defaultPort}/api`;

export async function getAllCars() {
  const url = `${baseUrl}/cars`;
  const response = await fetch(url);
  const cars = await response.json();

  if(!response.ok) {
    const error = await response.json();
    console.warn(error);
    throw Error(response.statusText);
  }

  return cars;
}

export async function getCarById(id) {
  const url = `${baseUrl}/cars/${id}`;
  const response = await fetch(url);
  const car = await response.json();

  if(!response.ok) {
    const error = await response.json();
    console.warn(error);
    throw Error(response.statusText);
  }

  return car;
}

export async function addCar(car) {
  const url = `${baseUrl}/cars`;
  const car_json = {
    card_id: car.car_id,
    name: car.name,
    brand: car.brand,
    year_release: car.year_release
  };

  const response = await fetch(url, {
    method: 'POST',
    headers : new Headers(),
    body: car_json
  });
  const cars = await response.json();

  if(!response.ok) {
    const error = await response.json();
    console.warn(error);
    throw Error(response.statusText);
  }

  return cars;
};