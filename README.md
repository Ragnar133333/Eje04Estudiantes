# -API-REST-Students

Este proyecto utiliza Node.js y Express para crear un servidor que gestiona información sobre estudiantes, incluyendo sus calificaciones y promedios. A continuación, se detalla la estructura y funcionalidades del proyecto.

## Configuración Inicial

Asegúrate de tener [Node.js](https://nodejs.org/) instalado en tu máquina antes de ejecutar el proyecto.

```bash
npm init -y
npm install express body-parser

# Iniciar el servidor
npm start
```

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### Obtener todos los estudiantes

- **Endpoint:** `/estudiantes`
- **Método:** `GET`
- **Descripción:** Retorna una lista de todos los estudiantes registrados.

### Obtener un estudiante por ID

- **Endpoint:** `/estudiantes/:id`
- **Método:** `GET`
- **Descripción:** Retorna la información de un estudiante específico según su ID.

### Agregar un nuevo estudiante

- **Endpoint:** `/estudiantes`
- **Método:** `POST`
- **Descripción:** Agrega un nuevo estudiante a la base de datos. Se debe proporcionar la información del estudiante en el cuerpo de la solicitud.

### Actualizar un estudiante por ID

- **Endpoint:** `/estudiantes/:id`
- **Método:** `PUT`
- **Descripción:** Actualiza la información de un estudiante específico según su ID. Se deben proporcionar los datos actualizados en el cuerpo de la solicitud.

### Eliminar un estudiante por ID

- **Endpoint:** `/estudiantes/:id`
- **Método:** `DELETE`
- **Descripción:** Elimina un estudiante de la base de datos según su ID.

### Calcular y guardar el promedio de las calificaciones de un estudiante

- **Endpoint:** `/estudiantes/:id/promedio`
- **Método:** `PUT`
- **Descripción:** Calcula el promedio de las calificaciones de un estudiante según su ID y lo almacena en la base de datos.

### Obtener los mejores promedios

- **Endpoint:** `/mejores-promedios`
- **Método:** `GET`
- **Descripción:** Retorna una lista de estudiantes ordenados por sus promedios de mayor a menor.

### Obtener estudiantes reprobados

- **Endpoint:** `/estudiantes-reprobados`
- **Método:** `GET`
- **Descripción:** Retorna una lista de estudiantes cuyo promedio es inferior al límite de aprobación (ajustable, por defecto 60).

### Eliminar toda la base de datos (¡Cuidado con esto en producción!)

- **Endpoint:** `/eliminar-base-de-datos`
- **Método:** `DELETE`
- **Descripción:** Elimina todos los estudiantes de la base de datos. **¡Precaución en producción!**

## Datos de Ejemplo

El proyecto utiliza una base de datos simulada de estudiantes con información de calificaciones y promedios.

---

¡Gracias por revisar el README! Si tienes alguna pregunta o problema, no dudes en abrir un [issue](https://github.com/tu-usuario/tu-repositorio/issues).
