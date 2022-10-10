
let name = 'Ezgi'
let name2 = name
name2 = 'Sinem'
console.log(name)
console.log(name2)

/*-----------------------*/
const user = {
    name: 'Ezgi',
    isActive: true
}
const user2 = user

user2.name = 'Sinem'

console.log(user)
console.log(user2)

//output: { name: 'Sinem', isActive: true }
//       { name: 'Sinem', isActive: true }
//user2 is a reference to user, so when we change user2, user is also changed
//referanslar bellekteki adresleri gösterir, bu yüzden user2'yi değiştirdiğimizde user da değişir
/*-----------------------*/

/*--------Solution 1 --------*/
const user = {
    name: 'Ezgi',
    isActive: true
}
const user2 = {...user}
user2.name = 'Sinem'
console.log(user)
console.log(user2)

//output: { name: 'Ezgi', isActive: true }
//        { name: 'Sinem', isActive: true }
/*--------Solution 1 --------*/

/*--------Solution 2 --------*/
const user = {
    name: 'Ezgi',
    isActive: true
}
const user2 = Object.assign({}, user)
user2.name = 'Sinem'
console.log(user)
console.log(user2)
//output: { name: 'Ezgi', isActive: true }
//        { name: 'Sinem', isActive: true }
/*--------Solution 2 --------*/

/*----------Array-----------*/
const numbers = [1,2,3,4,5]
const numbers2 = numbers

numbers2.push(6)
console.log(numbers)
console.log(numbers2)

//output: [ 1, 2, 3, 4, 5, 6 ]
//        [ 1, 2, 3, 4, 5, 6 ]
//numbers2 is a reference to numbers, so when we change numbers2, numbers is also changed
/*-------Solution------- */
const numbers = [1,2,3,4,5]
const numbers2 = [...numbers]

numbers2.push(6)
console.log(numbers)
console.log(numbers2)
//output: [ 1, 2, 3, 4, 5]
//        [ 1, 2, 3, 4, 5, 6 ]
/*-------Solution------- */
/*----------Array-----------*/