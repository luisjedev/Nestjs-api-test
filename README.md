<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

### Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar ```npm install``` para instalar las dependencias
3. Tener Nest CLI instalado
   ```
   npm i -g @nestjs/cli
   ```
4. Levantar la base de datos
   ```
   docker-compose up -d
   ```

5. Clonar el archivo ```.env.template``` y renombrarlo a ```.env```, luego configurar las variables de entorno correspondientes
   

6. Ejecutar ```npm run start:dev``` para iniciar el servidor en modo desarrollo
   
7. Ejecutar el seed para poblar la base de datos
   ```
   http://localhost:3000/api/v2/seed
   ```
### Stack usado

MongoDB
NestJS
Docker
TypeScript
