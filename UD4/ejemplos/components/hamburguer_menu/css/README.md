Estructura HTML:

La barra de navegación (<nav>) contiene un ícono de hamburguesa (con el caracter &#9776;) y dos menús (.menu y .menu-hamburguesa).
El menú de navegación normal (.menu) está diseñado para pantallas grandes.
El menú hamburguesa (.menu-hamburguesa) se muestra en dispositivos móviles, activado por un checkbox (#menu-toggle).

Estilos CSS:

El menú de navegación normal (.menu) está alineado en el centro usando display: flex.
El menú hamburguesa está oculto en pantallas grandes y se muestra en móviles cuando el checkbox está marcado (#menu-toggle:checked + .menu-hamburguesa).
Usamos media queries (@media (max-width: 768px)) para ocultar el menú normal en pantallas pequeñas y mostrar el menú hamburguesa.

Funcionamiento del Menú Hamburguesa:

El label asociado con el checkbox #menu-toggle muestra el ícono de hamburguesa. Cuando el usuario hace clic en el ícono, el checkbox se activa, mostrando el menú hamburguesa (.menu-hamburguesa).





