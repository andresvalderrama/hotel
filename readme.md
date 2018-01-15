# the grant hotel

## Estructura del proyecto

```
|- assets/ <!-- codigo fuente del front -->
|- bin/ <!-- script para arrancar el servidor -->
|- database / <!-- script para arrancar el servidor -->
|- public/ <!-- codigo compilado por webpack para el cliente -->
|- routes/ <!-- routas del servidor -->
|- views/ <!-- vista renderizadas por el servidor -->
|- .babelrc <!-- configuracion para transpilar codigo ES2016 -->
|- .editorconfig <!-- configuracion para tener consistencia en el codigo -->
|- .gitignore <!-- ingorar modulos instalados por npm -->
|- app.js              <!-- servidor -->
|- package.json       <!-- archivo para modulos requeridos del programa -->
|- postcss.config.js  <!-- configuracion de postcss/nextcss -->
|- webpack.config.js  <!-- configuracion para compilar postcss/nextcss y JS2016  -->
```

## Requerimientos

#### software
+ nodejs - `v8.9.1`
+ npm - `v5.5.1`
+ mysql - `v5.7`
+ chrome - `v56`

## Instalación
1. npm install
1. crear archivo `.env` apartir del archivi `.env.example` y cambiar los valores de las variables
1. migrar la base de datos con el comando `npm run migrate:latest`
1. seed base de datos con el comando `npmr run seed:run`
1. npm start

el servidor correra en el puerto 3000


## Librerias utilizadas

+ Reactjs
+ postcss/nextcss - estilos
+ webpack - bundler like gulp or grunt
+ express - framework para node
+ knex - orm para base de datos
+ dotenv - loads environment variables from a .env
