const express = require('express')
const cors = require('cors')
const plan = []

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/vertida.html')
})

app.post('/post', (req,res) => {
    console.log(req.body)
    plan.push(req.body)
    res.send(plan)
})

app.listen(3000, () => console.log("success!"))