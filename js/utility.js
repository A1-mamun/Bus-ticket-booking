function selectSeat(event) {
  // Accessing the id of the button that triggered the event
  const stringNumber = document.getElementById("seat-booked").innerText;
  let intNumber = parseInt(stringNumber);
  const button = event.target;
  // console.log(button);
  const buttonId = button.id;
  if (intNumber < 4) {
    if (button.classList.contains("bg-color-primary")) {
      removeGreen(buttonId);
      decSeat("seat-booked");
      incSeatLeft("seat-left");
      removeBookedSeatList("bill-table-body", buttonId);
      totalPrice();
    } else {
      makeGreen(buttonId);
      incSeat("seat-booked");
      decSeatLeft("seat-left");
      addBookedSeatList("bill-table-body", buttonId);
      totalPrice();
    }
  }
  if (intNumber == 4) {
    if (button.classList.contains("bg-color-primary")) {
      removeGreen(buttonId);
      decSeat("seat-booked");
      incSeatLeft("seat-left");
      removeBookedSeatList("bill-table-body", buttonId);
      totalPrice();
    }
  }
}
function showPopup() {
  document.getElementById("pop").classList.remove("hidden");
}

function hidePopup() {
  document.getElementById("pop").classList.add("hidden");
  // location.reload();
}

function totalPrice() {
  const seatBooked = document.getElementById("seat-booked").innerText;
  const bookedSeat = parseInt(seatBooked);
  const totalPrice = bookedSeat * 550;
  document.getElementById("total-price").innerText = totalPrice;
  document.getElementById("grand-total").innerText = totalPrice;
}

function addBookedSeatList(tableId, seatId) {
  const htmlString = `
            <td>${seatId}</td>
            <td>Economy</td>
            <td>550</td>`;
  const tbRow = document.createElement("tr");
  tbRow.innerHTML = htmlString;
  const newRow = document.getElementById(tableId);
  newRow.appendChild(tbRow);
  console.log(newRow);
}

function removeBookedSeatList(tableId, seatId) {
  // Find the tbody element
  const tbody = document.getElementById(tableId);

  // Find all tr elements within the tbody
  var trElements = tbody.getElementsByTagName("tr");

  // Loop through each tr element
  for (var i = 0; i < trElements.length; i++) {
    // Find the td element within the current tr element
    var tdElement = trElements[i].getElementsByTagName("td")[0]; // Assuming the first td contains "a2"

    // Check if the content of the td element matches "a2"
    if (tdElement.textContent == seatId) {
      // Remove the current tr element if it contains "a2" as table data
      tbody.removeChild(trElements[i]);
    }
  }
}

function makeGreen(fieldId) {
  document
    .getElementById(fieldId)
    .classList.add("bg-color-primary", "text-white");
}

function removeGreen(fieldId) {
  document
    .getElementById(fieldId)
    .classList.remove("bg-color-primary", "text-white");
}

function incSeat(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber++;
  document.getElementById(fieldId).innerText = intNumber;
  // console.log(intNumber);
  // console.log(typeof intNumber);
}

function decSeat(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber--;
  document.getElementById(fieldId).innerText = intNumber;
  // console.log(intNumber);
  // console.log(typeof intNumber);
}
function incSeatLeft(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber++;
  document.getElementById(fieldId).innerText = intNumber;
  // console.log(intNumber);
  // console.log(typeof intNumber);
}
function decSeatLeft(fieldId) {
  const stringNumber = document.getElementById(fieldId).innerText;
  let intNumber = parseInt(stringNumber);
  intNumber--;
  document.getElementById(fieldId).innerText = intNumber;
  // console.log(intNumber);
  // console.log(typeof intNumber);
}
