const Person = {
    name: 'Ramzan',
    age: 28,
    birth: 1995,
};

function getStrObgect(str, obj) {
  if (obj.hasOwnProperty(str)) {
        return true;
    } else {
        return false;
    }
} 

console.log(getStrObgect('age', Person))
