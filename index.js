// Code your solution here
const driverss = ['cody', 'brad', 'john']

function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    return matchingDrivers
}

console.log(findMatching(driverss, 'cODy'))











// const thoseDrivers = ['jessica', 'timothy', 'abigail']

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().indexOf(letters.toLowerCase()) === 0
    )
}
// console.log(fuzzyMatch(thoseDrivers, 'jessica'))














const theseDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(drivers, name) {
    const isFrom = drivers.filter(driver => driver.name === name)
    return isFrom
}

console.log(matchName(theseDrivers, "Bobby"))
console.log(matchName(theseDrivers, "Sammy"))