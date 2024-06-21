let cars = [];
cars.push({
    make: "Toyota",
    model: "Camry",
    year: 2018
});
// console.log(cars);
delete cars[0];
// console.log(cars);
cars.push({
    make: "Honda",
   model: "Civic",
   year: 2020
});
// console.log(cars);
cars[1].model = "Accord";
console.log(cars[1]);