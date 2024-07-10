# Development
Pasos para levantar la app en desarrollo

1. levantar la base de datos
```
docker compose up -d
```
2. Reenombrar el .env.template a .env y reemplazar las variables de entorno

4. Ejecutar el seed para crear la base de datos

# Prisma commands

npx prisma init
npx prisma migrate dev
npx prisma generate