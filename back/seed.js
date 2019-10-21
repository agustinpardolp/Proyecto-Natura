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
  identification: "111",
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
  identification: "111",
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
  identification: "111",
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
  identification: "111",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Pedro",
  identification: "111",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Monica",
  identification: "111",
  location: "calle 472 n 333",
  cod_superviser: "003",
  mail: "moni@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Rita",
  identification: "111",
  location: "calle 56 327 PB",
  cod_superviser: "003",
  mail: "rita09@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Susana",
  identification: "111",
  location: " Alcorta 3900 PB",
  cod_superviser: "003",
  mail: "susi@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Armando",
  identification: "111",
  location: "Braña y Andujar 327 PB",
  cod_superviser: "003",
  mail: "arman@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "admin",
  name: "Miguel",
  identification: "111",
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
    event_code:"aaa",
    image: "cremaManos.jpg"
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
    event_code:"aaa",
    image: "perfume.jpg"
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
    event_code:"aaa",
    image: "jabones.jpeg"
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
    event_code:"aaa",
    image: "capsulas.jpg"
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
    event_code:"aaa",
    image: "balsamo.jpeg"
  });
  Product.create({
    code: "Cod: 25971ar",
    name:"Colonia UHU!",
    description: "Colonia UHU! Muchachitos Naturé - 100ml",
    price: 555.00,
    points: 20,
    list_order: 0,
    add_points:1,
    add_cases:1,
    add_dif_cases:1,
    profit:200,
    event_code:"aaa",
    image: "colonia.jpeg"
  });