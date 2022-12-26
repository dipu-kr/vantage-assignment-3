// //////////question-1///////////

let cities = [
  { name: "Los Angeles", population: 3794621 },
  { name: "New York", population: 8172133 },
  { name: "Chicago", population: 2695798 },
  { name: "Houston", population: 2099351 },
  { name: "Philadelphia", population: 1528006 },
];

// ----------------1st method--------
for (var i = 0; i < cities.length; i++) {
  if (cities[i].population >= 3000000) {
    console.log(cities[i].name);
  }
}

// ------output------
// Los Angeles
// New York

// ------------2nd method-----------

for (var city of cities) {
  if (city.population >= 3000000) {
    console.log(city.name);
  }
}

// ------output------
// Los Angeles
// New York

// //////////////////question-2//////////////

var users = [
  { name: "Alex", lname: "Alter", address: "Alaska" },
  { name: "Peter", lname: "Whiteman", address: "Texas" },
  { name: "Steven", lname: "Hopkins", address: "Texas" },
  { name: "John", lname: "Clover", address: "California" },
];

users.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(users);

// -----------Output----------
// [
//     { name: 'Alex', lname: 'Alter', address: 'Alaska' },
//     { name: 'John', lname: 'Clover', address: 'California' },
//     { name: 'Peter', lname: 'Whiteman', address: 'Texas' },
//     { name: 'Steven', lname: 'Hopkins', address: 'Texas' }
//   ]
