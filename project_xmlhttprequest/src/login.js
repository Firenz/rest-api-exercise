import { login } from "./API/login.service";
import * as carsApi from "./API/carsApi";
// import { httpClientService } from "./API/http-client.service";

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
        
        if (access_token) {
          console.log('login succesfull!!');

          const headers = {
            Authorization: `Bearer ${access_token}`
          };
          // httpClientService.setHeaders(headers);
          carsApi.setHeaders(headers);
          document.getElementById("login-form").style.display = "none";
          document.getElementById("cars").style.display = "block";
          document.getElementById("cars").focus();
        }
      })
      .catch(err => console.log(err));
  });
});
