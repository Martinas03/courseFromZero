
function alertValues(elementParameter) {
    console.log(elementParameter.value);
    console.log(elementParameter.className);
}

var firstNameId = 'first-name';
var firstNameEl = document.getElementById(firstNameId);
// alertFirstNameValues();
alertValues(firstNameEl)

var lastNameId = 'last-name';
var lastNameEl = document.getElementById(lastNameId);
// alertLastNameValues();
alertValues(lastNameEl)

var addressId = 'address';
var addressEl = document.getElementById(addressId);
// alertAddressValues();
alertValues(addressEl)

var citiesId = 'cities';
var citiesEl = document.getElementById(citiesId);
alertValues(citiesEl)

var hobbiesId = 'hobbies';
var hobbiesEl = document.getElementById(hobbiesId);
// alertHobbiesValues();
alertValues(hobbiesEl)

var avatarwrapperId = 'avatar-wrapper';
var avatarwrapperEl = document.getElementById(avatarwrapperId);
var avatarId = 'avatar';
var avatarEl = document.getElementById(avatarId);




debugger




firstNameEl.value = 'Marck';


lastNameEl.className = 'error-input last-name-input default-input';


lastNameEl.title = 'wrong last name';


citiesEl.value = 'Minsk';
