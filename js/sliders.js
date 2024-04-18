const sliderAmmount = document.getElementById("RangeAmmount");
const ammountOutput = document.getElementById("investAmmount");

const sliderProportion = document.getElementById("RangeProportion");
const goldProportion = document.getElementById("investProportionGold");

const silverProportion = document.getElementById("investProportionSilver");

ammountOutput.innerHTML = sliderAmmount.value;
goldProportion.innerHTML = sliderProportion.value;

sliderAmmount.oninput = function () {
  ammountOutput.innerHTML = this.value;
};

sliderProportion.oninput = function () {
  goldProportion.innerHTML = this.value;
  silverProportion.innerHTML = 100 - this.value;
};
