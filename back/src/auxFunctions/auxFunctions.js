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

  
};
