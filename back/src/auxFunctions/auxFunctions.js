module.exports = {
    
  DataStorage() {
    let userDataStore = {
      code: "111",
      dni: "111"
    };
    return {
      setUserData(user) {
        if (user.code) {
          (userDataStore.code = user.code), (userDataStore.dni = user.dni);
          console.log(userDataStore, "userdatastore");
        } else userDataStore = user;
        console.log("logout", userDataStore);
      },
      getUserData() {
        console.log("entre a pedir", userDataStore);
        return userDataStore;
      }
    };
  },
  productRespose: function(){
    return new Promise (resolve =>{
      
      var productlist =  [
        { id:1, name: "Ekos Copaib", price: 1180, code: "(72572)", points: 20, profit: 354, stock:100, userQuantity:0, image: "capsulas.jpg" },
        { id:2, name: "Essencial Exclusivo", price: 1990, code: "(72572)", points:33, profit: 597, stock:100, userQuantity:0, image: "cremaManos.jpg" },
        { id:3, name: "Kaiak Urbe", price: 1393, code: "(72572)", points: 20, profit: 450, stock:100, userQuantity:0, image: "perfume.jpg" },
        { id:4, name: "Eau de Toilette Meu Primeiro", price: 1430, code: "(64746)", points: 20, profit: 354, stock:100, userQuantity:0, image: "eudetoilete.jpg" },
        { id:5, name: "Hidratante Corporal Frambuesa", price: 270, code: "(54900ar)", points: 10, profit: 168, stock:100, userQuantity:0, image: "cremaFrambuesa.jpg" },
        { id:6, name: "Crema Dúo para Peinar Curvas Envolventes", price: 465, code: "(50277)", points:33, profit: 597, stock:100, userQuantity:0, image: "cremaPeinar.jpg" },
        { id:7, name: "Desodorante antitranspirante Homem", price: 230, code: "(61381)", points: 20, profit: 450, stock:100, userQuantity:0, image: "desodorante.jpg" },
        { id:8, name: "Shampoo Murumurú Ekos", price: 288, code: "(62899)", points:33, profit: 597, stock:100, userQuantity:0, image: "shampoo.jpg" },
        { id:9, name: "Homem Verum", price: 560, code: "(72572)", points: 10, profit: 168, stock:100, userQuantity:0, image: "balsamo.jpeg" },
        { id:10, name: "Agua de Colonia Sin Alcohol ", price: 605, code: "(6417)", points: 20, profit: 450, stock:100, userQuantity:0, image: "coloniaNiño.jpg" }
        ]
        resolve (productlist)
  
        })     
    },
    
    
    
    user: {
      id: 1,
      code: "111",
      sector: "admin",
      name: "Mirta",
      identification: "31596585",
      location: "San Martin 7100",
      cod_superviser: "002",
      mail: "mirta@gmail.com",
      profit: 1000,
      isSuperviser: false
    }
    
};
