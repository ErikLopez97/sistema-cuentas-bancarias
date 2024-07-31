# Sistema de Cuentas Bancarias

## Descripción

Aplicación para gestionar cuentas bancarias con autenticación JWT, construida con Node.js, Express, y MongoDB.

## Configuración

### Requisitos

- Node.js
- Docker
- Docker Compose

### Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/ErikLopez97/sistema-cuentas-bancarias.git
    cd sistema-cuentas-bancarias
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

### Uso

#### Localmente

1. Levanta la aplicación:
    ```bash
    npm start
    ```

2. Accede a la aplicación en `http://localhost:5001`.

#### Con Docker

1. Construye y levanta los servicios:
    ```bash
    docker-compose up --build
    ```

2. Accede a la aplicación en `http://localhost:5002`.

### API

#### Endpoints

- `POST /api/login` - Obtener token JWT
- `POST /api/accounts` - Crear una cuenta (requiere autenticación)
- `GET /api/accounts/:id` - Obtener una cuenta por ID (requiere autenticación)
- `PUT /api/accounts/:id` - Actualizar una cuenta por ID (requiere autenticación)
- `DELETE /api/accounts/:id` - Eliminar una cuenta por ID (requiere autenticación)

### Autores

- Erik Alain

