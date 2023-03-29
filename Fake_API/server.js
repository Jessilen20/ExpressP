const { faker } = require('@faker-js/faker/locale/es_MX');
const express = require("express"); //trae todos los metodos de express
const app = express(); //inicializa todos los metodos de express

app.use(express.json()); //express usara json durante todo su desarrollo

//clase usuario
class Usuario{
    constructor(){
        //this._id = faker.datatype.uuid();
        this.firstname = faker.name.firstName();
        this.lastname =faker.name.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

//clase empresa
class Empresa {
    constructor(){
        this._id =faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            calle: faker.address.street(),
            ciudad: faker.address.city() ,
            estado: faker.address.state(),
            codigo_postal: faker.address.zipCode(),
            pais: faker.address.country()
        }
    }
}

var user1 = new Usuario();
var empresa1 = new Empresa();

//creamos las rutas
//nuevo usuario
app.get("/api/users/new", (request, response) => {
    console.log("nuevo user");
    response.json(user1); 
})

app.get("/api/companies/new", (request, response) => {
    console.log("nueva compañia");
    response.json(empresa1); 
})

app.get("/api/user/company", (request, response) => {
    console.log("nuevos user y compañia");
    response.json({user1 , empresa1}); 
})

const server = app.listen(8080, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

