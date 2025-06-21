# Examen - Servicio REST de Casas - Marcelo Torres L

**Asignatura:** Aplicaciones Web  
**Fecha:** 22 de Junio de 2025

Este es el proyecto desarrollado para el examen de la asignatura Aplicaciones Web. Se trata de un servicio REST API realizado en TypeScript, utilizando Express.js y Node.js, que permite obtener información sobre casas, ya sea completa o filtrada por ID. Incluye una interfaz gráfica básica en `public/index.html` para consumir el servicio DESDE EL ANVEGADOR.

## Tecnologías Utilizadas
- **Lenguaje:** TypeScript
- **Framework Backend:** Express.js
- **Servidor HTTP:** Node.js
- **Gestor de Paquetes:** npm
- **Soporte de Tipos:** @types/express, @types/morgan, @types/cors
- **Herramientas de Desarrollo:** ts-node, nodemon, dotenv
- **Módulos Usados:** ES Modules (import/export)

## Estructura del Proyecto
```
Carpeta raíz/
  .env
  tsconfig.json
  package.json
  README.md
  src/
    app.ts           # Configuración principal de Express
    server.ts        # Inicialización del servidor
    routes/
      casa.routes.ts # Rutas de la API
    controllers/
      casa.controller.ts # Lógica del endpoint
    models/
      Casa.ts        # Datos estáticos de las casas
  public/
    index.html       # Interfaz gráfica para consumir el servicio REST
```

## Cómo Ejecutar el Proyecto
1. Asegúrate de tener instalado Node.js y npm
2. Clona este repositorio o crea tu proyecto siguiendo las instrucciones
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
5. El servicio estará disponible en: [http://localhost:3000/casa](http://localhost:3000/casa)
6. La interfaz gráfica estará disponible en: [http://localhost:3000/](http://localhost:3000/)

## Interfaz Gráfica (index.html)
- Permite consultar todas las casas o buscar por ID usando botones y un campo de entrada.
- Muestra los resultados en formato JSON o mensaje de error.
- Utiliza Fetch API para comunicarse con el backend.
- No requiere frameworks, solo HTML, CSS y JS puro.

## Endpoints Disponibles
### Obtener todas las casas
- **Método:** GET
- **URL:** `/casa`
- **Código Respuesta:** 200
- **Ejemplo de respuesta:**
  ```json
  [
    { "id": 1, "nombre": "Casa 1" },
    { "id": 2, "nombre": "Casa 2" }
  ]
  ```

### Obtener una casa por ID
- **Método:** GET
- **URL:** `/casa?idCasa=1`
- **Código Respuesta:** 200
- **Ejemplo de respuesta:**
  ```json
  [
    { "id": 1, "nombre": "Casa 1" }
  ]
  ```

### Buscar una casa inexistente
- **Método:** GET
- **URL:** `/casa?idCasa=3`
- **Código Respuesta:** 404
- **Respuesta:**
  ```
  No se encuentra
  ```

## Resultados de Pruebas
- `/casa` → Devuelve ambas casas
- `/casa?idCasa=1` → Devuelve solo Casa 1
- `/casa?idCasa=2` → Devuelve solo Casa 2
- `/casa?idCasa=3` → "No se encuentra"

✔️ Todos los casos de prueba pasan correctamente.
