const person = {
    name: 'Boson',
    age: 20,
    address: {
      city: 'Chongqing',
      area: 'Nanan'
    }
  }
  const {name, age, address: {city, area}} = person
