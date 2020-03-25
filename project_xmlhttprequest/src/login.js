import { login } from "./API/login.service";
import { httpClientService } from "./API/http-client.service";

const readCredentials = () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  return {
    username,
    password
  };
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("login").addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const credentials = readCredentials();
    login(credentials)
      .then(data => {
        const { access_token } = data;
        const headers = {
          Authorization: `Bearer ${access_token}`
        };
        httpClientService.setHeaders(headers);

        if(access_token){
          // window.location.replace("http://localhost:1234/cars.html");
          window.location.href = 'http://localhost:1234/cars.html';
        }
      })
      .catch(err => console.log(err));
  });
});
