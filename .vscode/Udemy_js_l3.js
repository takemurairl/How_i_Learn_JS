const name = 'RedStorm'
const postQty = 26

// const userProfile = {
//     name: name,
//     postQty: postQty,
//     hasSignedAgreement: false

// }

const userProfile = {
    name,
    postQty,
    hasSignedAgreement: false
}

console.log(userProfile);
delete userProfile.hasSignedAgreement;
console.log(userProfile);
console.log(userProfile.name);