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

document
  .getElementById("badge-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      createBadge(this.value);
      this.value = "";
    }
  });

function createBadge(text) {
  if (!text) return;

  var badgeContainer = document.createElement("span");
  badgeContainer.classList.add("badge");

  var badgeText = document.createElement("span");
  badgeText.textContent = text;
  badgeContainer.appendChild(badgeText);

  var closeButton = document.createElement("span");
  closeButton.classList.add("badge-close");
  closeButton.textContent = "";
  closeButton.addEventListener("click", function () {
    badgeContainer.remove();
  });

  badgeContainer.appendChild(closeButton);

  var container = document.querySelector(".badge-input-container");
  container.insertBefore(
    badgeContainer,
    document.getElementById("badge-input")
  );
}
