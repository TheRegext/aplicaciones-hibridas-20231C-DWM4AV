import { MongoClient } from "mongodb"

const client = new MongoClient("mongodb://127.0.0.1:27017/")

client.connect()
    .then(function (conection) {

        const db = conection.db("DB_AHM") // use DB_AHM
        db.collection("Coleccion").insertOne({ name: "Esto es desde Node!" })

        console.log("Me contecte correctamente!")


    })