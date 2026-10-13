# Ariel Eduardo Borbon Izaguirre 252116

¿por qué el Layout no necesita saber que es una tienda?
porque el layout es solamente un componente, se usa para acomodar las cosas en las pantallas, como el encabezado o el pie o el contenido con children, este no ocupa nada de validaciones de negocio, ni que datos ocupa, basicamente sirve para reutilizarse en cualquier pagina


¿qué pasa si escribes onClick={onAgregar(producto)} sin la flecha?
la funcion se va a ejecutar cada que el componente se renderice en lugar de cuando se haga click, por lo que esto podria ocasionar que se añadan cosas al carrito infinitamente, ya cuando se coloca el => react sabe solo se ejecute la funcion con el click


¿por qué con carrito.push(...) el contador no se mueve y no sale ningún error?
con el carrito.push(...) se cambia el arreglo en la memoria JS, pero no se cambia la referencia del arreglo, cuando se llama a setCarrito(carrito) revisa la referencia vieja con la nueva y ve que son la misma direccion en memoria y piensa que nada cambio, asi que no renderiza de nuevo el componente, como no se pinta de nuevo el contador de la interfaz nunca se actualiza