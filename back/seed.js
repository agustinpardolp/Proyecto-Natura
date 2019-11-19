const Consultant = require("../back/db/models").Consultant;
const Product = require("../back//db/models").Product;
const Superviser = require("../back/db/models").Superviser;
const Event = require("../back/db/models").Event;
const Adress = require("../back/db/models").Adress;
// USERS
Consultant.create({
  code: "111",
  sector: "333",
  name: "Mirta",
  identification: "31596585",
  cod_superviser: "002",
  mail: "mirta@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "222",
  sector: "333",
  name: "Ramona",
  identification: "123",
  cod_superviser: "002",
  mail: "ramona@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "333",
  sector: "333",
  name: "Norma",
  identification: "124",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});

Consultant.create({
  code: "444",
  sector: "333",
  name: "Sandra",
  identification: "125",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "555",
  sector: "444",
  name: "Pedro",
  identification: "126",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "666",
  sector: "444",
  name: "Pedro",
  identification: "127",
  cod_superviser: "001",
  mail: "mirta.natura@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "777",
  sector: "444",
  name: "Monica",
  identification: "128",
  cod_superviser: "003",
  mail: "moni@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "888",
  sector: "444",
  name: "Rita",
  identification: "129",
  cod_superviser: "003",
  mail: "rita09@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "999",
  sector: "444",
  name: "Susana",
  identification: "130",
  cod_superviser: "003",
  mail: "susi@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "1000",
  sector: "444",
  name: "Armando",
  identification: "131",
  cod_superviser: "003",
  mail: "arman@gmail.com",
  profit: 1000,
  isSuperviser: false
});
Consultant.create({
  code: "1001",
  sector: "444",
  name: "Miguel",
  identification: "132",
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
Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1897",
  town: "La Plata",
  neighborhood: "Tolosa",
  number: "1200",
  street: "Camino Belgrano",
  reference: "Casa rejas negras",
  consultantId: "1",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1897",
  town: "La Plata",
  neighborhood: "Tolosa",
  number: "1200",
  street: "Centenario entre 526 y 527",
  reference: "Planta alta",
  consultantId: "2",
  SuperviserId: ""
});
Adress.create({
  code: "111",
  type: "laboral",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1889",
  town: "La Plata",
  neighborhood: "Centro",
  number: "1200",
  street: "47 entre 7 y 8",
  reference: "Planta alta",
  consultantId: "2",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1896",
  town: "La Plata",
  neighborhood: "City Bell",
  number: "530",
  street: "497",
  reference: "Casa frente blanco",
  consultantId: "3",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1896",
  town: "La Plata",
  neighborhood: "City Bell",
  number: "530",
  street: "Cantilo y 19",
  reference: "Dpto sobre locales",
  consultantId: "4",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1896",
  town: "La Plata",
  neighborhood: "City Bell",
  number: "5230",
  street: "Plaza San Martin y cantilo",
  reference: "Casa chalet al frente",
  consultantId: "5",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "laboral",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1900",
  town: "La Plata",
  neighborhood: "Los Hornos",
  number: "7830",
  street: "60 y 137",
  reference: "Duplex b3",
  consultantId: "5",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1900",
  town: "La Plata",
  neighborhood: "Los Hornos",
  number: "2302",
  street: "Calle 72 B Aeropuero",
  reference: "Duplex planta alta",
  consultantId: "6",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1900",
  town: "La Plata",
  neighborhood: "Centro",
  number: "402",
  street: "calle 7 y 65",
  reference: "Casa al frente, porton madera",
  consultantId: "7",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1900",
  town: "Quilmes",
  neighborhood: "Centro",
  number: "222",
  street: "Rivadavia y Mosconi",
  reference: "Chalet Frances",
  consultantId: "8",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "laboral",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1900",
  town: "Quilmes",
  neighborhood: "Centro",
  number: "2980",
  street: "Alsina",
  reference: "Local 23",
  consultantId: "8",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1923",
  town: "Berisso",
  neighborhood: "Centro",
  number: "330",
  street: "Mosconi y Leberato",
  reference: "Dpto alto",
  consultantId: "9",
  SuperviserId: ""
});

Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1923",
  town: "Berisso",
  neighborhood: "Centro",
  number: "1544",
  street: "Rio de Janeiro",
  reference: "Casa planta baja, puerta negra",
  consultantId: "10",
  SuperviserId: ""
});


Adress.create({
  code: "111",
  type: "",
  code_management: "000",
  name_management: "Juan",
  province: "Buenos Aires",
  county: "Buenos Aires",
  zip_code: "1928",
  town: "Chascomus",
  neighborhood: "Constanera Sur",
  number: "944",
  street: "San Martin",
  reference: "Dpto",
  consultantId: "11",
  SuperviserId: ""
});


// PRODUCTS
Product.create({
  code: "Cod: 89243ar",
  name: "Crema de Manos",
  description: "Crema de Manos de Cacao 75gr Ekos Natura",
  price: 640,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "cremaManos.jpg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 90558ar",
  name: "Perfume Femenino",
  description: "Perfume Femenino Likes de Humor EDT 75ml Natura",
  price: 903.0,
  points: 30,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 300,
  image: "perfume.jpg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 892322ar",
  name: "Regalo Ekos Jabones",
  description: "Regalo Ekos Jabones x6 Natura",
  price: 308.0,
  points: 26,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "jabones.jpeg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 33343ar",
  name: "Cápsulas Capilares",
  description: "Cápsulas Capilares Fortificantes Plant - 30un",
  price: 352.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "capsulas.jpg",
  userQuantity: 0
});

Product.create({
  code: "Cod: 78909ar",
  name: "Balm Post Barba Homem",
  description: "Balm Post Barba Homem - 75ml",
  price: 315.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "balsamo.jpeg",
  userQuantity: 0
});
Product.create({
  code: "87264ar",
  name: "ÓLEO HIDRATANTE DE BARBA",
  description: "Óleo Hidratante de Barba 30ml Homem Natura",
  price: 685.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "oleo.jpg",
  userQuantity: 0
}),
  Product.create({
    code: "Cod: 89243ar",
    name: "Crema de Manos",
    description: "Crema de Manos de Cacao 75gr Ekos Natura",
    price: 640,
    points: 20,
    list_order: 0,
    add_points: 1,
    add_cases: 1,
    add_dif_cases: 1,
    profit: 200,
    image: "cremaManos.jpg",
    userQuantity: 0
  });
Product.create({
  code: "Cod: 90558ar",
  name: "Perfume Femenino",
  description: "Perfume Femenino Likes de Humor EDT 75ml Natura",
  price: 903.0,
  points: 30,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 300,
  image: "perfume.jpg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 892322ar",
  name: "TOALLITAS HÚMEDAS DE LIMPIEZA",
  description: "Toallitas Mama y Bebé para Recién Nacidos 50u Natura",
  price: 203.0,
  points: 26,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "toallitas.jpg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 33343ar",
  name: "Cápsulas Capilares",
  description: "Cápsulas Capilares Fortificantes Plant - 30un",
  price: 352.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "capsulas.jpg",
  userQuantity: 0
});

Product.create({
  code: "78291ar",
  name: "KIT HIDRATACIÓN CIRUELA",
  description: "Kit Hidratación Ciruela y Flor de Cerezo Tododía",
  price: 470.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "ciruela.jpg",
  userQuantity: 0
});
Product.create({
  code: "Cod: 25971ar",
  name: "FRESCOR CUMARU!",
  description: "Frescor Eau de Toilette Cumaru Ekos - 150 ml",
  price: 590.0,
  points: 20,
  list_order: 0,
  add_points: 1,
  add_cases: 1,
  add_dif_cases: 1,
  profit: 200,
  image: "frescor.jpg",
  userQuantity: 0
});

Event.create({
  sector: 000,
  event_code: "SR-MADRE",
  load_from: "9/4/2018",
  load_to: "9/5/2018"
});

Event.create({
  sector: 000,
  event_code: "SR-PADRE",
  load_from: "6/4/2018",
  load_to: "7/5/2018"
});

Event.create({
  sector: 000,
  event_code: "SR-NAVIDAD",
  load_from: "11/4/2018",
  load_to: "12/20/2018"
});

Event.create({
  sector: 000,
  event_code: "SR-NIÑO",
  load_from: "8/4/2018",
  load_to: "9/5/2018"
});
