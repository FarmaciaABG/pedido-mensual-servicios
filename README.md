# Pedido mensual de servicios — GitHub Pages

Versión sin Python preparada para publicar en GitHub Pages.

## Qué funciona ahora
- Inicio de sesión DEMO.
- Usuario solicitante asociado a un único servicio.
- Catálogo real de insumos restringido por servicio.
- Stock actual + cantidad solicitada.
- Guardar borrador.
- Siguiente / revisar pedido.
- Envío a Farmacia.
- Vista Farmacia.
- Estado Enviado → En revisión → Cerrado.
- Cantidad autorizada.
- Registro de quién recibe + fecha/hora.
- Guía de entrega.
- Historial.
- Control de consumo preparado.
- Configuración básica de calendario/correos.

## MUY IMPORTANTE
Esta versión usa `localStorage` del navegador. Eso permite probar el flujo completo en un mismo navegador, pero todavía NO comparte información entre computadores o funcionarios.

Para uso real multiusuario hay que conectar esta misma interfaz a Supabase:
- Supabase Auth: usuarios y contraseñas.
- Supabase Database: pedidos, historial y configuración.
- Reglas de seguridad por servicio y rol.
- Envío real de correos mediante función/servicio externo.

No guardar contraseñas reales ni información sensible en GitHub.

## Publicar en GitHub Pages
1. Subir todos los archivos de esta carpeta a la raíz del repositorio.
2. Ir a `Settings` → `Pages`.
3. En `Build and deployment`, elegir `Deploy from a branch`.
4. Branch: `main`.
5. Folder: `/ (root)`.
6. Guardar.
7. GitHub mostrará la URL pública.

## Usuarios demo
Ver `usuarios-demo.txt`.


## Versión simplificada para carga web
Todos los archivos están en la raíz del repositorio. No requiere crear carpetas `css` ni `js`.
Suba estos archivos directamente a la raíz:
- index.html
- pedido.html
- farmacia.html
- app.css
- data.js
- common.js
- usuarios-demo.txt
- README.md
- .nojekyll


## Versión autocontenida
Los archivos `index.html`, `pedido.html` y `farmacia.html` incluyen sus estilos y scripts directamente.
No dependen de `app.css`, `data.js` ni `common.js`.
Esto evita problemas de rutas/caché en GitHub Pages.
