# Aprendiendo a trabajar con el stado en React

Se usarón varias estrategias para compartir el estado de una aplicación,
tanto para compartir datos entre componentes, como entre componentes de
una misma vista y tambien si se trata del estado global de la aplicación.

Se usarón las siguientes librerias:

1. RxJS:
   Es una libreria para programación reactiva usando Observables, para hacer
   mas sencillo el codigo asincrono o basado en callbacks.

2. Context:
   Context está diseñado para compartir datos que pueden considerarse “globales” para un árbol de componentes en React, como el usuario autenticado actual, el tema o el idioma preferido.
   
3. Redux:
   A medida que tus aplicaciones de React crecen, la comunicación entre componentes se vuelve cada ves más compleja. Redux es una librería que nos permite definir un estado compartido para todos los componentes de la aplicación.