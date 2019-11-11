const Consultant = require("../back/db/models").Consultant;
const Product = require ("../back//db/models").Product;
const Superviser = require ("../back/db/models").Superviser;
// USERS
Consultant.create({
  
  code: "111",
  sector: "admin",
  name: "Mirta",
  identification: "31596585",
  location: "San Martin 7100",
  cod_superviser: "002",
  mail: "mirta@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "222",
  sector: "admin",
  name: "Ramona",
  identification: "123",
  location: "Herrera 2310",
  cod_superviser: "002",
  mail: "ramona@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "333",
  sector: "admin",
  name: "Norma",
  identification: "124",
  location: "Alem 1100",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "444",
  sector: "admin",
  name: "Sandra",
  identification: "125",
  location: "Ortigoza 500",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Pedro",
  identification: "126",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "666",
  sector: "admin",
  name: "Pedro",
  identification: "127",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "777",
  sector: "admin",
  name: "Monica",
  identification: "128",
  location: "calle 472 n 333",
  cod_superviser: "003",
  mail: "moni@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "888",
  sector: "admin",
  name: "Rita",
  identification: "129",
  location: "calle 56 327 PB",
  cod_superviser: "003",
  mail: "rita09@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "999",
  sector: "admin",
  name: "Susana",
  identification: "130",
  location: " Alcorta 3900 PB",
  cod_superviser: "003",
  mail: "susi@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "1000",
  sector: "admin",
  name: "Armando",
  identification: "131",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "003",
  mail: "arman@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "1001",
  sector: "admin",
  name: "Miguel",
  identification: "132",
  location: "Roma PB 2",
  cod_superviser: "003",
  mail: "miguel@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Superviser.create({
  code: "001",
  name: "Yenifer",
  mail: "yenifer@natura.com",
  isSuperviser: true
});
Superviser.create({
  code: "002",
  name: "Raul Juan",
  mail: "juan@g.com",
  isSuperviser: true
});
Superviser.create({
  code: "003",
  name: "Yenifer",
  mail: "@003",
  isSuperviser: true
});


// PRODUCTS
Product.create({
  code: "Cod: 89243ar",
  name: "Crema de Manos",
  description: "Crema de Manos de Cacao 75gr Ekos Natura",
  price: 640,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"MADRE",
  image: "cremaManos.jpg",
  userQuantity:0
});
Product.create({
  code: "Cod: 90558ar",
  name:"Perfume Femenino",
  description: "Perfume Femenino Likes de Humor EDT 75ml Natura",
  price: 903.00,
  points: 30,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:300,
  event_code:"MADRE",
  image: "perfume.jpg",
  userQuantity:0
});
Product.create({
  code: "Cod: 892322ar",
  name:"Regalo Ekos Jabones",
  description: "Regalo Ekos Jabones x6 Natura",
  price: 308.00,
  points: 26,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"PADRE",
  image: "jabones.jpeg",
  userQuantity:0
});
Product.create({
  code: "Cod: 33343ar",
  name:"Cápsulas Capilares",
  description: "Cápsulas Capilares Fortificantes Plant - 30un",
  price: 352.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"PADRE",
  image: "capsulas.jpg",
  userQuantity:0
});

Product.create({
  code: "Cod: 78909ar",
  name:"Balm Post Barba Homem",
  description: "Balm Post Barba Homem - 75ml",
  price: 315.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"MADRE",
  image: "balsamo.jpeg",
  userQuantity:0
});
Product.create({
  code: "87264ar",
  name:"ÓLEO HIDRATANTE DE BARBA",
  description: "Óleo Hidratante de Barba 30ml Homem Natura",
  price: 685.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"PADRE",
  image: "oleo.jpg",
  userQuantity:0
}),

Product.create({
  code: "Cod: 89243ar",
  name: "Crema de Manos",
  description: "Crema de Manos de Cacao 75gr Ekos Natura",
  price: 640,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"MADRE",
  image: "cremaManos.jpg",
  userQuantity:0
});
Product.create({
  code: "Cod: 90558ar",
  name:"Perfume Femenino",
  description: "Perfume Femenino Likes de Humor EDT 75ml Natura",
  price: 903.00,
  points: 30,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:300,
  event_code:"MADRE",
  image: "perfume.jpg",
  userQuantity:0
});
Product.create({
  code: "Cod: 892322ar",
  name:"TOALLITAS HÚMEDAS DE LIMPIEZA",
  description: "Toallitas Mama y Bebé para Recién Nacidos 50u Natura",
  price: 203.00,
  points: 26,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"PADRE",
  image: "toallitas.jp",
  userQuantity:0
});
Product.create({
  code: "Cod: 33343ar",
  name:"Cápsulas Capilares",
  description: "Cápsulas Capilares Fortificantes Plant - 30un",
  price: 352.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"PADRE",
  image: "capsulas.jpg",
  userQuantity:0
});

Product.create({
  code: "78291ar",
  name:"KIT HIDRATACIÓN CIRUELA",
  description: "Kit Hidratación Ciruela y Flor de Cerezo Tododía",
  price: 470.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"MADRE",
  image: "ciruela.jpg",
  userQuantity:0
});
Product.create({
  code: "Cod: 25971ar",
  name:"FRESCOR CUMARU!",
  description: "Frescor Eau de Toilette Cumaru Ekos - 150 ml",
  price:  590.00,
  points: 20,
  list_order: 0,
  add_points:1,
  add_cases:1,
  add_dif_cases:1,
  profit:200,
  event_code:"MADRE",
  image: "frescor.jpg",
  userQuantity:0
});