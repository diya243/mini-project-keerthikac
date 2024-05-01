const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}

let i = 1; 
while (i <= 5) {
    console.log(i); 
    i++; 
}

for (let j = 1; j <= 5; j++) {
  console.log(j); // Print the current value of j
}


document.addEventListener('DOMContentLoaded', function() {
  const preferencesForm = document.getElementById('preferences-form');
  preferencesForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Preferences saved!');
  });
});