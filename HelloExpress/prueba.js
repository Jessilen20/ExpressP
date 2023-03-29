// podemos preestablecer algunos usuarios
// más adelante almacenaremos los usuarios en una base de datos

const express = require("express");
const app = express();

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//METODO GET direccion para poner en el navegador
/* app.get("/api/users", (req, res) => {
    res.json(users);
}); 
*/


//METODO POST

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.post("/api/users", (req, res) => {
    // req.body contendrá los datos del formulario desde Postman o desde React
    console.log(req.body);
    // podemos hacer push en el array de usuarios por ahora...
    // más tarde esto se insertará en una base de datos
    users.push(req.body);
    // siempre tendremos que responder con algo
    res.json( { status: "ok" } );
});

const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
); 