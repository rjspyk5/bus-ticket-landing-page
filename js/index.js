// all needed variables
let bookedSeat = [];
const seatParent = document.getElementById("seat-parent");
const totalPriceContainer = document.getElementById("totalPrice");
const ticketTable = document.getElementById("ticketTable");
const copunField = document.getElementById("copun");
const copunContainer = document.getElementById("copun-container");
const copunApplyBtn = document.getElementById("copun-apply-btn");
const bookedSeatCount = document.getElementById("bookedSeatCount");
const discountAmountField = document.getElementById("discountAmount");
const grandTotalField = document.getElementById("grandTotal");
const nextBtn = document.getElementById("nextBtn");
const number = document.getElementById("number");

// process to append tr and related functionality
const appendSeat = (id) => {
  if (!bookedSeat.includes(id) && bookedSeat.length < 4) {
    bookedSeat.push(id);
    document.getElementById(id).style.backgroundColor = "#1DD100";
    document.getElementById(id).style.color = "white";
    const tr = document.createElement("tr");
    tr.classList.add("text-secondary");
    tr.classList.add("flex");
    tr.classList.add("justify-between");
   
    tr.innerHTML = `
        <td>${id}</td>
        <td>Economy</td>
        <td>550</td>
        `;
    ticketTable.appendChild(tr);
  }
};
// setTotal price on totalPriceContainer
const setTotalPrice = (price) => {
  totalPriceContainer.innerText = price;
};
// total price calculation
const totalPrice = () => {
  return bookedSeat.length * 550;
};
// update Available seat
function UpdateAvailableSeat() {
  let available = 40 - bookedSeat.length;
  document.getElementById("available-seat").innerText = available;
}

// updateBookedSeatCount
function updateBookedSeatCount() {
  bookedSeatCount.innerText = bookedSeat.length;
}
// What happen if click next button
function handleNextBtn(e) {
  e.preventDefault();
  document
    .getElementById("whole-booking-section-container")
    .classList.add("hidden");
  document.getElementById("modal").classList.remove("hidden");
}
// What happend when mobile number section have some value
function handleNumberType(e) {
  if (bookedSeat.length > 0 && e.target.value.length > 0) {
    nextBtn.removeAttribute("disabled");
  }
  if (bookedSeat.length < 0 || e.target.value.length === 0) {
    nextBtn.setAttribute("disabled", true);
  }
}
// What happened when someone clicked on apply copun
const handleCopunCode = () => {
  if (
    (bookedSeat.length == 4 && copunField.value === "NEW15") ||
    (bookedSeat.length == 4 && copunField.value === "Couple 20")
  ) {
    copunContainer.classList.add("hidden");
    const percentage = parseInt(copunField.value.slice(-2));
    const discountAmount = totalPrice() * (percentage / 100);
    grandTotalField.innerText = totalPrice() - discountAmount;
    discountAmountField.innerHTML = `<p>Discounted amount</p> <p>BDT ${discountAmount} </p>`;
  } else {
    alert("invalid copun code");
  }
};
// What happened when someone booked a seat
const bookSeat = (e) => {
  if (e.target.className.includes("seat")) {
    appendSeat(e.target.id);
    UpdateAvailableSeat();
    updateBookedSeatCount();
    setTotalPrice(totalPrice(e.target.id));
    // copun code functionality
    if (bookedSeat.length === 4) {
      copunApplyBtn.removeAttribute("disabled");
    }
    if (bookedSeat.length > 0 && number.value.length > 0) {
      nextBtn.removeAttribute("disabled");
    }
    if (bookedSeat.length < 0 || number.value.length === 0) {
      nextBtn.setAttribute("disabled", true);
    }
    grandTotalField.innerText = totalPrice();
  }
};

//all Event listners
copunApplyBtn.addEventListener("click", handleCopunCode);
seatParent.addEventListener("click", bookSeat);
nextBtn.addEventListener("click", handleNextBtn);
number.addEventListener("keyup", handleNumberType);
