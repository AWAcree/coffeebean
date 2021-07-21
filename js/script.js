let map;

function initMap(){
    // Map options
    var options = {
      zoom:8,
      center:{lat:38.240850, lng:-85.720530}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

  var marker = new google.maps.Marker({
      position:{lat:38.240850, lng:-85.720530},
      map:map
  });
    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>The Coffee Bean</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
 }




const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const form = document.querySelector("form");
const thankYou = document.querySelector(".thank-you");
const nameInput = document.querySelector('input[name="firstname"]');
const lastnameInput = document.querySelector('input[name="lastname"]');
const emailInput = document.querySelector('input[name="email"]');

const inputs = [
    nameInput,
    lastnameInput,
    emailInput
]
let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
   elm.nameInput.classList.remove('invalid');
   elm.nameInput.nextElementSibling.classList("hidden");
};

const invalidateElm = (elm) => {
    elm.classList.add("invalid");
    elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;
    resetElm(nameInput);
    resetElm(lastnameInput);
    resetElm(emailInput);

    if (!nameInput.value) {
         isFormValid = false;
        invalidateElm(nameInput);
    }
    if (!lastnameInput.value) {
        isFormValid = false;
       invalidateElm(nameInput);
   }
   if (!isValidLastname(lastnameInput.value)) {
    isFormValid = false;
   invalidateElm(lastNameInput);
}
    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
       invalidateElm(emailInput);
   }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thankYou.classList.remove("hidden");
    }
});

inputs.forEach((input) => 
    input.addEventListener("input",
        validateInputs));
    

