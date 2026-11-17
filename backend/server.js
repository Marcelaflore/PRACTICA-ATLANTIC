require('dotenv').config({ path: __dirname + '/.env' });

const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

/*
====================================
RUTA PRINCIPAL
====================================
*/

app.get('/', (req, res) => {
    res.send('Servidor funcionando');
});

/*
====================================
OBTENER TODOS LOS COMENTARIOS
====================================
*/

app.get('/comentarios', (req, res) => {

    db.query(
        'SELECT * FROM comentarios',
        (error, resultados) => {

            if (error) {
                return res.status(500).json(error);
            }

            res.json(resultados);
        }
    );

});

/*
====================================
LOGIN
====================================
*/

app.post('/login', (req, res) => {

    const { usuario, password } = req.body;

    db.query(
        `
        SELECT *
        FROM usuarios
        WHERE usuario = ?
        AND password = ?
        `,
        [usuario, password],

        (error, resultados) => {

            if (error) {
                return res.status(500).json({
                    success: false,
                    mensaje: 'Error en el servidor'
                });
            }

            if (resultados.length > 0) {

                return res.json({
                    success: true,
                    mensaje: 'Inicio de sesión correcto'
                });

            }

            res.json({
                success: false,
                mensaje: 'Usuario o contraseña incorrectos'
            });

        }
    );

});

/*
====================================
ESTADÍSTICAS DASHBOARD
====================================
*/

app.get('/estadisticas', (req, res) => {

    const sql = `
        SELECT
            categoria,
            COUNT(*) AS total
        FROM comentarios
        GROUP BY categoria
    `;

    db.query(sql, (error, resultados) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(resultados);
    });

});

/*
====================================
SERVIDOR
====================================
*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(
        `🚀 Servidor ejecutándose en puerto ${PORT}`
    );

});