const slider = document.getElementById("myRange");
const output = document.getElementById("investAmmount");

const sliderProportion = document.getElementById("myRangeProportion");
const output2 = document.getElementById("investProportion");

const output3 = document.getElementById("investProportionSilver");

output.innerHTML = slider.value;
output2.innerHTML = sliderProportion.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

sliderProportion.oninput = function () {
  output2.innerHTML = this.value;
  output3.innerHTML = 100 - this.value;
};
