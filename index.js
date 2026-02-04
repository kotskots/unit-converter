const convertBtn = document.getElementById("convert-btn");

let length = 0;
let volume = 0;
let mass = 0;

const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertBtn.addEventListener("click", function () {
  const inputValue = Number(document.getElementById("input").value);
  if (isNaN(inputValue)) return;

  const METER_TO_FEET = 3.28084;
  const LITER_TO_GALLON = 0.264;
  const KG_TO_POUND = 2.204;

  const lengthMetric = (inputValue * METER_TO_FEET).toFixed(3);
  const lengthImperial = (inputValue / METER_TO_FEET).toFixed(3);

  const volumeMetric = (inputValue * LITER_TO_GALLON).toFixed(3);
  const volumeImperial = (inputValue / LITER_TO_GALLON).toFixed(3);

  const massMetric = (inputValue * KG_TO_POUND).toFixed(3);
  const massImperial = (inputValue / KG_TO_POUND).toFixed(3);

  lengthEl.textContent = `${inputValue} meters = ${lengthMetric} feet | ${inputValue} feet = ${lengthImperial} meters`;
  volumeEl.textContent = `${inputValue} liters = ${volumeMetric} gallons | ${inputValue} gallons = ${volumeImperial} liters`;
  massEl.textContent = `${inputValue} kilos = ${massMetric} pounds | ${inputValue} pounds = ${massImperial} kilos`;
});
