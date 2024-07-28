import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sistema de Cuentas Bancarias API',
            version: '1.0.0',
            description: 'API para gestionar cuentas bancarias',
        },
    },
    apis: ['./src/routes/*.mjs'], // Asegúrate de que las rutas de los archivos están correctas
};

const specs = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;