# Examen Aplicaciones Web - Servicio REST con NestJS

Este es el proyecto migrado a NestJS como parte de una actualización académica.

Cumple con los mismos requisitos:
- Endpoint GET /casa
- Soporte de parámetro idCasa
- Respuesta 404 si no existe
- Interfaz simple (opcional)

## Cómo ejecutar

1. Accede a la carpeta NEST
2. Ejecuta:
   npm install
   npm run start

3. El servicio estará disponible en:
   http://localhost:3000/casa

## Endpoints disponibles

GET /casa → Devuelve todas las casas
Ejemplo de respuesta:
[
  { "id": 1, "nombre": "Casa 1" },
  { "id": 2, "nombre": "Casa 2" }
]

GET /casa?idCasa=1 → Devuelve solo esa casa
Ejemplo de respuesta:
[
  { "id": 1, "nombre": "Casa 1" }
]

GET /casa?idCasa=3 → Casa inexistente
Respuesta:
{ "message": "No se encuentra" }

## Evidencias

En la carpeta 'evidencias/' encontrarás capturas realizadas con Thunder Client o Postman que demuestran el funcionamiento del servicio.

Archivos incluidos:
- prueba-todas-las-casas.png
- prueba-id-1.png
- prueba-id-invalido.png

## Tecnologías usadas

- Framework: NestJS
- Lenguaje: TypeScript
- Servidor: Node.js
- Módulos: ES Modules
- Herramientas: npm, Thunder Client, VSCode
