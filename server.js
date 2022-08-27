//Route
const express = require('express');
const swagger = require('swagger-node-express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const dotenv = require('dotenv');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api/swagger.json');
// const YAML = require('yamljs')
const http = require('http');
const server = http.createServer(app);
// const swaggerDocument = YAML.load('api/swagger.yaml')
dotenv.config({path:'config.env'})

const PORT = process.env.PORT || 8888

const connectionDB = require('./utils/db/connection');
// const swaggerJSDoc = require('swagger-jsdoc');
connectionDB();
// console.log(PORT)
// console.log(process.env.MONGO_URI)

// const makeApp = async () =>{
//     const parser = new swaggerParser()
//     const apiDescription = await parser.validate('api/swagger.yaml')
//     const connect = swaggerRoutes(products, apiDescription)

//     connect(app)
//     return app
// }
app.use(cors({
    origin: '*',
    methods: ['GET', "POST", "PUT", "DELETE"],
}))

//log request
app.use(morgan('tiny'))

//accept json format
app.use(express.json());

//get data from body (urlencode)
app.use(bodyParser.urlencoded());

//load all routes
require('./routes/products.routes')(app)
require('./routes/user.routes')(app)

swagger.setAppHandler(app);

app.get('/', (req, res)=> res.send("WELCOME TO API"))
// app.get('/product/:id/name/:name', (req, res)=>{
//     const id = req.params.id;
//     const name = req.params.name;
//     console.log(id)
//     res.status(200).send({message: `get id => ${id}, name: ${name}`})
// })


app.use('/openapi', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
server.listen(PORT,() => {
    console.log(`Server is starting http://localhost:${PORT}`)
})
