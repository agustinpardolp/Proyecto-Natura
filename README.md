Ejecutar instalacion de paquetes de Node
Ejecutar el comando npm install tanto en el directorio del back, (/back), como del Front (/front)

Crear Base de Datos
Ejecutar desde la terminal el comando createdb naturaDb (previa instalacion de Postgress SQL DB)

npm start
Ejecutar el comando npm start en el directorio del back, (/back) para levantar el servidor. El mismo estara disponible en el puerto 8000 (http://localhost:8000)

IMP: Modificar el estado de la db en el archivo server (/back/server.js), a true, para levantar la estructura de las tablas. Luego setearlo a false, para evitar el reinicio constante de la base. db.sync({ force: false }). Esto debera hacerse ante cada modificacion que suceda en el modelo de dicha base.

npm run build
Ejecutar el comando npm run build en el directorio del front, (/front) para correr webpack.

Seedeo de la DB
Ejecutar el comando node seed.js en el directorio del back, (/back) para realizar un carga automatica de datos de usuarios y beneficios en la base. 
IMP: Pueden encontrarse comentadas algunas rutas, entre ellas las de autenticacion para el login,
en ese caso se ingresara con cualquier user y
el pass 111. ESTO SE DEJO ASI SOLO A MODO DE PRUEBA.
