module.exports = {

        DataStorage(){
            let userDataStore = {
                code: "",
                dni: ""
            }
             return {
                setUserData(user){
                    if(user.code){
                        this.code = user.code,
                        this.dni = user.dni

                    } else userDataStore = user
                },
                getUserData(){
                    return userDataStore
                }
            }
    }
}