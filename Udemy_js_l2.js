const myCity = {
  city: "New York",
  info: {
    isPopular: true,
    country: "USA",
  },
};

console.log(myCity.info.isPopular);
delete myCity.info["isPopular"];
console.log(myCity);
myCity.info.people = { american: true, asian: true, indian: true };
console.log(myCity);
console.log(myCity.info.people.american)
