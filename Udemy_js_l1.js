const firstObject = {
  name: "Bohdan",
  age: 26,
  expirience: "10 year as project manager",
};

//add properties 'learn' 
firstObject.learn = "JS";
console.log(firstObject);
console.log(firstObject.learn);

//delete properties 'learn'
delete firstObject.learn;
//should be undefined
console.log(firstObject.learn);
//add properties 'Technologies' using []
firstObject['Technologies'] = 'node.js'

console.log(firstObject);


const companyPropertyName = 'company'
firstObject[companyPropertyName] = 'telesens'

console.log(firstObject);