import {openDb} from './configBD.js';
import express from 'express';

const app = express()
app.use(express.json());

openDb();

const apt = "helloooo" 

app.get('/', (req, res) => {
    res.send("buscando feiras")

})

app.post('/', (req, res) => {
    res.json({
        "palavraCampos": apt
    })

})






app.listen(3000, () => {
    console.log("Rodando!")
})

