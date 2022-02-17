var firstNameId = 'first-name'
var firstNameEl = document.getElementById(firstNameId)
var lastNameId = 'last-name'
var lastNameEl = document.getElementById(lastNameId)
var addressId = 'address'
var addressEl = document.getElementById(addressId)
var citiesId = 'cities'
var citiesEl = document.getElementById(citiesId)
var hobbiesId = 'hobbies'
var hobbiesEl = document.getElementById(hobbiesId)
var avatarwrapperId = 'avatar-wrapper'
var avatarwrapperEl = document.getElementById(avatarwrapperId)
var avatarId = 'avatar'
var avatarEl = document.getElementById(avatarId)


debugger
function alertValue() {
    console.log(firstNameEl.value);
    console.log(lastNameEl.value);
    console.log(addressEl.value);
    console.log(citiesEl.value);
}



firstNameEl.value = 'Marck'

alertValue();



lastNameEl.className = 'error-input last-name-input default-input';

alertValue();

lastNameEl.title = 'wrong last name';

alertValue();

citiesEl.value = 'Minsk'

alertValue();