const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


dotenv.config()
const app = express()
app.use(express.json())
const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))





const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb+srv://admin:admin@cluster0.0qmm7xx.mongodb.net/iot_db";


mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('MongoDB Atlas');
  // Puedes realizar operaciones en la base de datos aquí
});


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}




app.get('/api',(req, res) => {
  res.send('hola REST API')
})

app.use(require('./routes/components/appControllers'));
process.on('uncaughtException', function(err){
  console.log("Ocurrio un error: ", err);
  console.log(err.stack);
})

//app.use(errorHadler);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))    
app.use(require('./routes/components/appControllers'))


run().catch(console.dir);
