const express = require('express');
const app = express()
app.use(express.json());

app.get('/', (req, res) => {
    res.send("buscando feiras")

})

app.post('/', (req, res) => {
    res.send("Inserindo feiras")

})
app.listen(3000, () => {
    console.log("Rodando!")
})

