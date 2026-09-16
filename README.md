# Pedido mensual de servicios — GitHub Pages + Supabase

Esta versión ya usa Supabase como base central compartida.

- Solicitante: sin usuario/contraseña.
- Control Farmacia: login con Supabase Auth.
- Un pedido por servicio y mes se controla en la base de datos.
- Los pedidos enviados desde un computador aparecen en Control Farmacia desde otro.

Archivos a subir/reemplazar en GitHub:
- index.html
- solicitar.html
- pedido.html
- farmacia-login.html
- farmacia.html
- README.md
- .nojekyll

IMPORTANTE: la clave incluida en el frontend es la Publishable Key de Supabase, diseñada para navegador. No incluye service_role ni claves secretas.
