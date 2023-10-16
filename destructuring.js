const hero = {
    name: undefined,
    realName: 'Bruce Wayne',
    address: {
        city: 'Gotham', 
        country: {
            number: 12,
            name: 'Ar'
        }
      }
  };

  // you can change the order and set default value
  const {realName, name= 'default value'} = hero;
  console.log(realName)
  console.log(name)

// alias
  const {name: newName} = hero;
  console.log(newName)

// Object destructuring:
const { address: { city }, address: {country} } = hero;
console.log(city); 
console.log(country); 

const { name: otherName, ...rest } = hero;
console.log(rest);