let isAnySeatSelected = false;
function selectSeat(event) {
  // Accessing the id of the button that triggered the event
  const stringNumber = document.getElementById("seat-booked").innerText;
  let intNumber = parseInt(stringNumber);
  const button = event.target;
  // console.log(button);
  const buttonId = button.id;
  // phone number input field empty or not
  const phoneNumberLength =
    document.getElementById("phone-number").value.length;
  if (intNumber < 4) {
    if (button.classList.contains("bg-color-primary")) {
      if (intNumber == 1) {
        isAnySeatSelected = false;
        disableButton("btn-next");
      }
      removeGreen(buttonId);
      decSeat("seat-booked");
      incSeatLeft("seat-left");
      removeBookedSeatList("bill-table-body", buttonId);
      totalPrice();
    } else {
      if (intNumber == 3) enableButton("btn-apply");
      makeGreen(buttonId);
      incSeat("seat-booked");
      decSeatLeft("seat-left");
      addBookedSeatList("bill-table-body", buttonId);
      totalPrice();
      // enableButton("btn-next");
      if (phoneNumberLength > 0) {
        enableButton("btn-next");
      }
      isAnySeatSelected = true;

      if (intNumber == 3) enableButton("btn-apply");
    }
  } else if (intNumber == 4) {
    if (button.classList.contains("bg-color-primary")) {
      removeGreen(buttonId);
      decSeat("seat-booked");
      incSeatLeft("seat-left");
      removeBookedSeatList("bill-table-body", buttonId);
      totalPrice();
      disableButton("btn-apply");
    }
  }
}

// function for show the seat successfully popup menu
function showPopup() {
  document.getElementById("pop").classList.remove("hidden");
}

// function for hide the seat successfully popup menu
function hidePopup() {
  document.getElementById("pop").classList.add("hidden");
  location.reload();
}

// set total & grand price of booked seat
function totalPrice() {
  const seatBooked = document.getElementById("seat-booked").innerText;
  const bookedSeat = parseInt(seatBooked);
  const totalPrice = bookedSeat * 550;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("grand-total").innerText = totalPrice;
}

// add details of a seat to the booked seat list when a seat select
function addBookedSeatList(tableId, seatId) {
  const htmlString = `
            <td>${seatId}</td>
            <td>Economy</td>
            <td>550</td>`;
  const tbRow = document.createElement("tr");
  tbRow.innerHTML = htmlString;
  const newRow = document.getElementById(tableId);
  newRow.appendChild(tbRow);
  // console.log(newRow);
}

// remove details of a seat from seat-booked list when a seat unselect
function removeBookedSeatList(tableId, seatId) {
  // Find the tbody element of seat-booked list
  const tbody = document.getElementById(tableId);
  // Find all tr elements within the tbody
  let trElements = tbody.getElementsByTagName("tr");
  // Loop through each tr element
  for (let i = 0; i < trElements.length; i++) {
    let tdElement = trElements[i].getElementsByTagName("td")[0]; // the first td contains seatId
    // Check if the content of the td element match
    if (tdElement.textContent == seatId) {
      // Remove the current tr element if it contains "a2" as table data
      tbody.removeChild(trElements[i]);
    }
  }
}

// add bg green to a seat whet a new seat select
function makeGreen(fieldId) {
  document
    .getElementById(fieldId)
    .classList.add("bg-color-primary", "text-white");
}

// remove bg green from a seat whet a seat unselect
function removeGreen(fieldId) {
  document
    .getElementById(fieldId)
    .classList.remove("bg-color-primary", "text-white");
}

// increment seat-booked list when a new seat select
function incSeat(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber++;
  document.getElementById(fieldId).innerText = intNumber;
}

// decrement seat-booked list when a seat unselect
function decSeat(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber--;
  document.getElementById(fieldId).innerText = intNumber;
}

// increment seatleft when a new seat unselect
function incSeatLeft(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber++;
  document.getElementById(fieldId).innerText = intNumber;
}

// decrement seatleft when a new seat select
function decSeatLeft(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber--;
  document.getElementById(fieldId).innerText = intNumber;
}

// cupon code functionality
function cuponValid() {
  const cuponCode = document
    .getElementById("cupon")
    .value.split(" ")
    .join("")
    .toUpperCase();
  if (cuponCode === "NEW15") {
    // discount 15%
    const dis = discount(15);
    document.getElementById("discount").innerText = dis;
    unhideElementById("discount-area");
    hideElementById("cupon-area");
  } else if (cuponCode === "COUPLE20") {
    // discount 20%
    const dis = discount(20);
    document.getElementById("discount").innerText = dis;
    unhideElementById("discount-area");
    hideElementById("cupon-area");
  } else {
    alert("inavlid cupon code");
  }
  // console.log(cuponCode);
}

// disabled a button using its id
function disableButton(buttonId) {
  document.getElementById(buttonId).classList.add("btn-disabled");
}

// enabled a button using its id
function enableButton(buttonId) {
  document.getElementById(buttonId).classList.remove("btn-disabled");
}

// check if the phone number entered
function checkInputPhone() {
  const phoneNumber = document.getElementById("phone-number").value;
  if (phoneNumber.length > 0 && isAnySeatSelected) {
    enableButton("btn-next");
  } else {
    disableButton("btn-next");
  }
}

// discount function
function discount(parcent) {
  const total = document.getElementById("total-price").innerText;
  const totalPrice = parseInt(total);
  const discount = (totalPrice * parcent) / 100;
  const discountPrice = totalPrice - discount;
  // set the value of grand total
  document.getElementById("grand-total").innerText = discountPrice;
  return discount;
}

// hide element by id
function hideElementById(fieldId) {
  document.getElementById(fieldId).classList.add("hidden");
}

// unhide element by id
function unhideElementById(fieldId) {
  document.getElementById(fieldId).classList.remove("hidden");
}
