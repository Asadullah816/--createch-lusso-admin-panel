// ==================================== MODAL ========================
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// Function to perform action upon confirmation
function confirmDelete() {
  //   alert("Confirmed! Proceeding...");
  modal.style.display = "none";
  //   closeModal();
}
// ==================================== END MODAL ========================
let at = document.getElementsByClassName("save-alert")[0];
function showAlert() {
  at.style.display = "block";
}
// ===================================== badge inputs ==========================
// document
//   .getElementById("badge-input")
//   .addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//       createBadge(this.value);
//       this.value = "";
//     }
//   });

// function createBadge(text) {
//   var badgeContainer = document.createElement("div");
//   badgeContainer.classList.add("badge");
//   badgeContainer.textContent = text;

//   var closeButton = document.createElement("span");
//   closeButton.classList.add("badge-close");
//   closeButton.textContent = "x";
//   closeButton.addEventListener("click", function () {
//     badgeContainer.remove();
//   });

//   badgeContainer.appendChild(closeButton);
//   var container = document.querySelector(".badge-container");
//   container.appendChild(badgeContainer);
// }

// Add event listener to the badge input field
// Add event listener to the badge input field
document.getElementById("badge-input").addEventListener("keypress", function (e) {
  if (e.key === " ") {
    const inputValue = this.value.trim();
    if (inputValue !== "") {
      createBadge(inputValue);
      this.value = "";
    }
  }
});

// Function to create a badge
function createBadge(text) {
  if (!text) return;

  var badgeContainer = document.createElement("span");
  badgeContainer.classList.add("badge");

  var badgeText = document.createElement("input");
  badgeText.setAttribute("type", "text");
  badgeText.setAttribute("value", text);
  badgeText.setAttribute("readonly", "readonly");
  badgeContainer.appendChild(badgeText);

  var closeButton = document.createElement("span");
  closeButton.classList.add("badge-close");
  closeButton.textContent = "✖";
  closeButton.addEventListener("click", function () {
    // Remove the badge container when the close button is clicked
    badgeContainer.remove();
  });

  badgeContainer.appendChild(closeButton);

  var container = document.querySelector(".badge-input-container");
  container.insertBefore(
    badgeContainer,
    document.getElementById("badge-input")
  );
}


// ================================================================
// ================================================================
// ================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   var addButton = document.querySelector(".add-another-space");

//   addButton.addEventListener("click", function () {
//     var contentToAppend = document
//       .querySelector(".apf-clone .apf-bed-sec")
//       .cloneNode(true);

//     document.querySelector(".apf-clone").appendChild(contentToAppend);
//   });
// });

//======================================================================
//======================================================================
function toggleSideNav() {
  var sideNav = document.getElementById("sidebar");
  let toggle = document.getElementsByClassName("toggle-btn")[0];
  let cross = document.getElementsByClassName("cross-btn")[0];
  sideNav.style.marginLeft =
    sideNav.style.marginLeft === "-300px" ? "0px" : "-300px";
  toggle.style.display = toggle.style.display === "block" ? "none" : "block";
  cross.style.display = cross.style.display === "none" ? "block" : "none";
}
//======================================================================
function crossBtn() {
  var sideNav = document.getElementById("sidebar");
  let toggle = document.getElementsByClassName("toggle-btn")[0];
  let cross = document.getElementsByClassName("cross-btn")[0];
  sideNav.style.marginLeft =
    sideNav.style.marginLeft === "-300px" ? "0px" : "-300px";
  toggle.style.display = toggle.style.display === "block" ? "none" : "block";
  cross.style.display = cross.style.display === "none" ? "block" : "none";
}

function closeSideNav() {
  var sideNav = document.getElementById("sidebar");
  let crossBar = document.querySelector(".cross-btn");
  sideNav.style.marginLeft = "-300";
  crossBar.style.display = "none";
}



