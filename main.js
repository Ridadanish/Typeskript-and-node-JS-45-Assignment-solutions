"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestArray1 = void 0;
//task 02, Personal Name:
let personName = "ERIC";
console.log(`hellow ${personName}, would you like to learn some python today?`);
//task 03, Name Cases:
// lower case
let personName3 = "rida Danish";
console.log(personName3.toLowerCase());
// upper case
console.log(personName3.toLocaleUpperCase());
// Title case
console.log(personName3.replace(/\b\w/g, (char) => char.toUpperCase()));
//task 04, Famous Quote:
let quote = "A person who never made a mistake never tried anything new";
let author = "Albert Einstein";
console.log(`${author}once said, "${quote}"`);
//task 05, Famous Quote 2:
let famousPerson = "Albert Einstein";
let message = "once said, A person who never made a mistake never tried anything else";
console.log(famousPerson, message);
//task 06, Stripping Name:
let personName4 = "\t\n rida danish \t\n";
console.log("original:", personName4);
console.log("stripped:", personName4.trim());
//task 07, 08, Number Eight:
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//task 09, Favorite Number:
let favoriteNumber1 = 5;
console.log('My favorite number is');
console.log(favoriteNumber1);
//task 10, Adding Comments:
//author: Rida Danish
//dated:11.03.2024
let favoriteNumber2 = 5;
//revealing my fav.number in a message format
console.log('My favorite number is');
console.log(favoriteNumber2);
//task 11, Names:
let familyNames1 = ["Rida", "Danish", "Hareem", "Hadi"];
console.log(familyNames1[0]);
console.log(familyNames1[1]);
console.log(familyNames1[2]);
console.log(familyNames1[3]);
//task 12, Greetings:
let familyNames2 = ["rida", "Danish", "Hareem", "Hadi"];
let message2 = "Do you like to have some dinner together?";
console.log(familyNames2[0] + " " + message2);
console.log(familyNames2[1] + " " + message2);
console.log(familyNames2[2] + " " + message2);
console.log(familyNames2[3] + " " + message2);
//task 13, Own Array:
let transpotation = ["Honda Motorcycle", "MGHS", "Honda Civic"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));
//task 14, Guest list:
let guestArray1 = ["rida", "Hareem", "Hadi"];
exports.guestArray1 = guestArray1;
guestArray1.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)));
//task 15, Changing Guest list:
let guestArray2 = ["rida", "Danish", "Hareem", "Hadi"];
let canNotAttend2 = "Danish";
console.log(canNotAttend2 + " " + "can not attend the dinner.");
let newGuest2 = "Sana";
guestArray2[guestArray2.indexOf(canNotAttend2)] = newGuest2;
console.log(guestArray2);
guestArray2.map((items) => console.log(`Dear ${items}, you are invited to the dinner.`));
//task 16, More Guests:
let guestArray3 = ["Rida", "Sana", "Hareem", "Hadi"];
let canNotAttend3 = "Sana";
let newGuest3 = "Hur";
guestArray3[guestArray3.indexOf(canNotAttend3)] = newGuest3;
console.log(guestArray3);
guestArray3.map((items) => console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`));
//part 2 
let guestst = "John";
guestArray3.unshift(guestst);
console.log(guestArray3);
//part 3
let middleGuest = "Fatima";
let middleIndex = guestArray3.length / 3;
guestArray3.splice(middleIndex, 0, middleGuest);
console.log(guestArray3);
//part 4
guestArray3.push("Honey");
console.log(guestArray3);
//part 5
guestArray3.map((items) => console.log(`Dear ${items}, you are inviyed to the more people list on dinner.`));
//task 17, Shrinking Guest list:
//initial list of guests
let guests = ['John', 'Rida', 'Hur', 'Hareem', 'Hadi'];
console.log("Due to limited space only two people can be invited for dinner.");
//Removing guest until only two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop();
    console.log(`sorry, ${removedGuest}, you are no longer invited to dinner.`);
}
//printing invitations to the remaining two guests
guests.forEach((guest) => {
    console.log(`Dear ${guest}, you are still invited to dinner.`);
});
//removing last two names from the list
guests.pop();
guests.pop();
console.log("final guest list:", guests);
//task 18, Seeing the World:
let placesToVisit = ["Tokyo", "Pakistan", "America", "China", "Japan"];
//Array in its original order
console.log("Original order:", placesToVisit);
//Array in alphabetical order
console.log("Alphabetical order:", [...placesToVisit].sort());
//showing Array is still in its original order
console.log("original order after sorting:", placesToVisit);
//Array in reverse Alphabetical order
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
//original order
console.log("Original order after reverse sorting:", placesToVisit);
//Reverse the order of the list
console.log("Reversed order:", placesToVisit);
//Reverse the order to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
//sort the Array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
//sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabetical order:", placesToVisit);
//task 19, Guest list:
const main_1 = require("../Q14 Guest list/main");
console.log(`n\ PRINTING NUMBER OF GUEST INVITED`);
console.log(`we had finally invited ${main_1.guestArray.length} from exercise 14`);
//task 20, Make a list:
let languages = ["English", "Urdu", "Persian", "Arabic", "Italian"];
console.log("List of languages:");
console.log(languages);
//task 21, Creates Objects
let person = { name: "Rida", fname: "female", age: 27 };
console.log(person);
//task 22, International Error:
const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(days{7});
console.log(days[6]);
//task 23, Conditional Tests:
let car = "subaru";
console.log("is car == 'sabaru'? predict true");
console.log(car == 'subaru');
console.log("is car != 'honda civic'? predict true");
console.log(car != 'honda civic');
console.log("is car.length = 6? predict true");
console.log(car.length == 6);
console.log("is car.length != 10? predict true");
console.log(car.length != 10);
console.log("is 13 < 31 ? predict true");
console.log(13 < 31);
console.log("is 15 > 50 ? predict false");
console.log(15 > 50);
console.log("is 4 <= 1 ? predict false");
console.log(4 <= 1);
console.log("is 13 > 31 ? predict false");
console.log(13 > 31);
console.log("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
//task 24, More Conditional Tasks
let name_1 = "rida";
let name_2 = "rida danish";
let name_3 = "miss rida danish";
//equality and non equality:
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
//lower case function:
if (name_1 != name_3) {
    console.log("names are equal");
}
//numeric and greater or non equal etc:
let age_1 = 17;
let age_2 = 24;
if (age_1 == 17) {
    console.log("not eligible for CNIC");
}
if (age_1 != 24) {
    console.log("eligible for CNIC");
}
if (age_1 <= age_2) {
    console.log("younger brother");
}
if (age_2 >= age_1) {
    console.log("older brother");
}
//end, or operators:
if (age_1 == 17 && age_2 == 24) {
    console.log("brother is eligible for CNIC");
}
if (age_1 == 17 || age_2 != 24) {
    console.log("brother is not eligible for CNIC");
}
//Array:
let vagetables = ["potato", "tomato", "onion", "chilli"];
if (vagetables.includes("potato")) {
    console.log("potato is in vagetables list");
}
if (!vagetables.includes("ginger")) {
    console.log("ginger is not include in an array");
}
//task 25,Alien Colors-1
let alien_color_g_1 = "green";
if (alien_color_g_1 == "green")
    console.log("you earn 5 points");
let alien_color_r = "red";
if (alien_color_r == "green")
    console.log("no output");
//task 26, Alien Color-2
let alien_color_g_2 = "green";
if (alien_color_g_2 == "green") {
    console.log("player just earned 5 points for shooting the elien");
}
else {
    console.log("player just earned 10 points");
}
let alien_color_r_2 = "red";
if (alien_color_r_2 == "green") {
    console.log("player just earned 5 points for shooting the elien");
}
else {
    console.log("player just earned 10 points");
}
//task 27, Alien Colors-3
let alien_color_g_3 = "green";
if (alien_color_g_3 == "green") {
    console.log("player just earned 5 points");
}
let alien_color_y_3 = "yellow";
if (alien_color_y_3 == "yellow") {
    console.log("player just earned 10 points");
}
let alien_color_r_3 = "red";
if (alien_color_r_3 == "red") {
    console.log("player just earned 15 points");
}
//task 28, Stages of life:
let age = 18; // let age = 2,4,13,20,65,older
if (age < 2) {
    console.log("you are a baby");
}
else if (age < 4) {
    console.log("you are a toddler");
}
else if (age < 13) {
    console.log("you are a kid");
}
else if (age < 20) {
    console.log("you are a teenager");
}
else if (age < 65) {
    console.log("you are a adult");
}
else {
    console.log("you are older");
}
//task 29, Favorite Fruits:
let favorite_fruits = ["orange", "melon", "blueberry"];
if (favorite_fruits.includes("orange")) {
    console.log("i really like orange");
}
if (favorite_fruits.includes("melon")) {
    console.log("i really like melon");
}
if (favorite_fruits.includes("blueberry")) {
    console.log("i really like blueberry");
}
if (favorite_fruits.includes("apple")) {
    console.log("i really like apple");
}
if (favorite_fruits.includes("banana")) {
    console.log("i really like banana");
}
//task 30, Hello admin:
let users_1 = ["admin", "rida", "danish", "hareem", "hadi"];
for (let user of users_1) {
    if (user === "admin") {
        console.log("Hellow admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thankyou for logging in again`);
    }
}
//task 31, No Users:
let users_2 = ["admin", "rida", "danish", "hareem", "hadi"];
if (users_2.length === 0) {
    console.log("we need to find some users!");
}
else {
    for (let user of users_2) {
        if (user === "admin") {
            console.log("Hellow admin, would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user}, thankyou for logging in again`);
        }
    }
}
users_2 = [];
if (users_2.length === 0) {
    console.log("we need to find some users!");
}
//task 32, Checkin Usernames:
let current_users_1 = ["admin", "rida", "danish", "hareem", "hadi"];
let new_users = ["admin", "rida", "sana", "hur", "john"];
let current_users_lower = current_users_1.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`yes ${new_user}, is still in available list`);
    }
}
//task 33, Ordinal Numbers;
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//task 34, Pizzas
let fav_pizza = ["fajita", "chees", "alpino"];
for (let pizza of fav_pizza) {
}
console.log(`\n`);
for (let pizza of fav_pizza) {
    console.log(` I really like ${pizza} pizza!`);
}
console.log("\nI really love pizza");
//task 35, Animals:
let animals = ["deer", "bear", "lion"];
for (let animal of animals) {
    console.log(animal);
}
console.log("\n");
for (let animal of animals) {
    console.log(`A ${animal} has a tail`);
}
console.log("\n I like all of these animals but i love lion");
//task 36, T.Shirt:
function makeShirt_1(size, text) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt_1(`large`, `"Ilove Typeskript"`);
makeShirt_1(`medium`, `"I love mom"`);
//task 37, Large Shirt
function makeShirt_2(size = `large`, text = `I love typeskript`) {
    console.log(`\n you order a ${size} shirt that says ${text}`);
}
makeShirt_2();
makeShirt_2(`medium`);
//diff. massege
makeShirt_2(`small`, `I need a big shirt to wear`);
//task 38, Cities:
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city(`karachi`);
describe_city(`paris`, `france`);
describe_city(`multan`, `punjab`);
//task 39, City Names:
function city_country(city, country) {
    return `${city}, ${country}`;
}
let c1 = city_country(`lahore`, `pakistan`);
let c2 = city_country(`washington DC`, `US`);
let c3 = city_country(`france`, `europe`);
console.log(c1);
console.log(c2);
console.log(c3);
//task 40, Albums:
function make_Album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = make_Album("rida", "light");
console.log(album);
album = make_Album("hadi", "red wave");
console.log(album);
album = make_Album("hareem", "seenbreez");
console.log(album);
//task 41, Magicians:
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ["rida", "hadi", "hareem"];
show_magicians(magician);
//task 42, Great Magicians:
function make_great_1(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ` the great`;
    }
}
const magicians2 = ["rida", "hareem", "hadi"];
make_great_1(magicians2);
show_magicians(magicians2);
//task 43, Unchanged Magicians:
function make_great_2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ` the Great`);
    }
    return greatMagicians;
}
const magicians3 = ["rida", "hareem", "hadi"];
const greatMagicians_2 = make_great_2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians_2);
//task 44, Sandwiches:
function sandwich(...items) {
    console.log("sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("enjoy your sandwich rida danish");
sandwich('alpino', 'sossages', 'beef');
sandwich('mayo', 'tomato');
sandwich('mutton', 'cheese');
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const mycar = createCar("honda", "corolla", { color: "ash grey", year: 2024 });
console.log(mycar);
