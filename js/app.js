/* Update Total */

const quantityField = document.getElementById('quantity');
const currentPrice = document.getElementById('currentPrice').textContent;
const total = document.getElementById('total');

function updateTotal() {
  const quantity = quantityField.value;
  const updatedTotal = quantity * currentPrice;

  total.textContent = updatedTotal;
}


quantityField.addEventListener('change', updateTotal);


/* Hidden Navigation */

const supportItem = document.getElementById('supportItem');
const supportMenu = document.getElementById('supportMenu');

function toggleAriaHidden() {
  let ariaHidden = supportMenu.getAttribute("aria-hidden");
  if (ariaHidden == "true") {
    ariaHidden = "false"
  } else {
    ariaHidden = "true"
  }
}


supportItem.addEventListener('focus', toggleAriaHidden);
supportItem.addEventListener('hover', toggleAriaHidden);