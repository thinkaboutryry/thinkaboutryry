No está corregido. La sombra sigue visible en las 3 mockups, tanto en modo claro como en modo oscuro.

Te indico una corrección más precisa: el problema no solo está en box-shadow. También hay una sombra renderizada o una capa de oscurecimiento debajo de cada mockup. Debes eliminar cualquier sombra visual real, venga de donde venga.

Haz esto exactamente:

1. Revisa el componente completo de cada mockup y elimina TODA fuente de sombra, incluyendo:
- box-shadow
- drop-shadow
- filter
- blur
- backdrop-filter
- overlays
- pseudo-elementos ::before y ::after
- gradientes oscuros
- fondos radiales
- capas absolutas debajo de la revista
- cualquier div decorativo usado para simular profundidad
- cualquier sombra incrustada en la imagen renderizada

2. Fuerza estas reglas en el contenedor, wrappers, imagen y capas internas:
box-shadow: none !important;
filter: none !important;
backdrop-filter: none !important;
text-shadow: none !important;
background-image: none !important;
opacity: 1 !important;
mix-blend-mode: normal !important;

3. Elimina cualquier clase como:
shadow-*
drop-shadow-*
blur-*
backdrop-blur*
backdrop-brightness*
bg-black/*
bg-white/*
from-black/*
via-black/*
to-black/*
overlay
shading
glass

4. Busca específicamente elementos absolute debajo del mockup que estén creando una “mancha” o “halo” oscuro en el fondo y elimínalos por completo.

5. Si la sombra ya viene integrada en la imagen exportada del mockup, entonces no uses esa imagen. Reemplázala por una versión del mockup sin sombra incrustada.

Resultado obligatorio:
- las 3 mockups deben quedar completamente planas
- sin sombra debajo
- sin halo oscuro
- sin mancha difusa
- sin profundidad simulada
- sin ningún oscurecimiento extra en light ni en dark mode

No quiero una explicación general. Quiero corrección real. Al final indícame exactamente:
- qué clases eliminaste
- qué elementos absolute eliminaste
- qué pseudo-elementos eliminaste
- y si la sombra venía incrustada en la imagen original