const form = document.querySelector("form");
// this use case will give you empty...
form.addEventListener("submit", function (e) {
  e.preventDefault(); // do not send the data on server.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `pleae give a valid Weight`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}</span>`;
  }
});
