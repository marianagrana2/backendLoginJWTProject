# Proyecto Backend Avanzado 

## Ecommerce con Manejo de sesión con JWT conectada a una base de datos de MongoDB

Es un proyecto realizado con la finalidad de registrarse como usuario, ya sea del tipo administrador o customer y dependiendo de este son las actividades que puedes realizar dentro del sistema, ya que cuenta con rutas protegidas para cada tipo de usuario. 

El usuario tipo admin puede utilizar el CRUD(Create,Read,Update,Delete) para los productos,pedidos, usuarios y el usuario tipo customer solo puede ver sus pedidos y crear pedidos para si mismo.

Los usuarios tiene su propio JWT Token con el que se valida su acceso y su contraseña está protegida con un hash. 

### Herramientas utilizados
 - JavaScript
 - Express
 - Node 
 - MongoDB

 #### Ruta para probar
 Si deseas probar el proyecto sin registrarte puedes ingresar a [cyclic](https://backendadvecommerceproject.cyclic.app/) y después en la url agregar **/api/v1/products** y te mostrará los productos disponibles en la base de datos. 

