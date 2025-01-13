
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const delayInput = event.target.elements.delay;
  const stateInput = event.target.elements.state;

  const delay = Number(delayInput.value);
  const state = stateInput.value;

 
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `Rejected promise in ${delay}ms`,
      });
    });
});
