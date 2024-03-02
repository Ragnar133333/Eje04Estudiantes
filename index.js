const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let estudiantes = [
    { 
        id: 1,
        nombre: 'Estudiante1',
        calificaciones: {
          calificacion1: 80,
          calificacion2: 72,
        },
        promedio: null
    },{ 
        id: 2,
        nombre: 'Estudiante2',
        calificaciones: {
          calificacion1: 70,
          calificacion2: 76,
        },
        promedio: null
    },{ 
      id: 3,
      nombre: 'Estudiante3',
      calificaciones: {
        calificacion1: 60,
        calificacion2: 69,
      },
      promedio: null
  }
];

function calcularPromedio(calificaciones) {
  let suma = 0;
  let totalCalificaciones = 0;

  for (let calificacion in calificaciones) {
    let valor = calificaciones[calificacion];
    if (valor < 0 || valor > 100) {
      throw new Error('La calificación debe estar entre 0 y 100');
    }
    suma += valor;
    totalCalificaciones++;
  }

  return suma / totalCalificaciones;
}

app.get('/estudiantes', (req, res) => {
  res.json(estudiantes);
});

app.get('/estudiantes/reprobados', (req, res) => {
  const reprobados = estudiantes.filter(e => e.promedio < 70 && e.promedio > 0);
  res.json(reprobados);
});

app.get('/estudiantes/:id', (req, res) => {
  const estudiante = estudiantes.find(e => e.id === parseInt(req.params.id));
  if (estudiante) {
    res.json(estudiante);
  } else {
    res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }
});

app.post('/estudiantes', (req, res) => {
  const nuevoEstudiante = req.body;
  
  // Validar las calificaciones del nuevo estudiante
  for (let calificacion in nuevoEstudiante.calificaciones) {
    let valor = nuevoEstudiante.calificaciones[calificacion];
    if (valor < 0 || valor > 100) {
      return res.status(400).json({ mensaje: 'Las calificaciones deben estar entre 0 y 100' });
    }
  }

  estudiantes.push(nuevoEstudiante);
  res.status(201).json(nuevoEstudiante);
});

app.put('/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const estudianteIndex = estudiantes.findIndex(e => e.id === id);
  if (estudianteIndex !== -1) {
    estudiantes[estudianteIndex] = { ...estudiantes[estudianteIndex], ...req.body };
    res.json(estudiantes[estudianteIndex]);
  } else {
    res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }
});

app.delete('/estudiantes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  estudiantes = estudiantes.filter(e => e.id !== id);
  res.json({ mensaje: 'Estudiante eliminado correctamente' });
});

app.put('/estudiantes/:id/promedio', (req, res) => {
  const id = parseInt(req.params.id);
  const estudianteIndex = estudiantes.findIndex(e => e.id === id);
  if (estudianteIndex !== -1) {
    const promedio = calcularPromedio(estudiantes[estudianteIndex].calificaciones);
    estudiantes[estudianteIndex].promedio = promedio;
    res.json(estudiantes[estudianteIndex]);
  } else {
    res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }
});

app.get('/estudiantes/:id/promedio', (req, res) => {
  const id = parseInt(req.params.id);
  const estudiante = estudiantes.find(e => e.id === id);
  if (estudiante) {
    res.json({ id: estudiante.id, promedio: estudiante.promedio });
  } else {
    res.status(404).json({ mensaje: 'Estudiante no encontrado' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
