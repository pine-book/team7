const express = require('express');
const fs = require('fs');
const cors = require('cors');
const mongoose = require('mongoose');
const Schedule = require('./models/schedule');

const app = express();

const url = "mongodb+srv://Team7:Qu0HLbs29Tf5DHri@cluster0.raqbv.mongodb.net/Schedule?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, () => console.log('db connecting!'));

app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req,res) => {
    res.sendFile(__dirname+'/vertida.html')
})

app.post('/:year/:month/:day', async (req,res) => {
    const year = String(req.params["year"]);
    const month = String(req.params["month"]);
    const day = String(req.params["day"]);
    const path = __dirname+"/db/"+year+"/"+month+"/"+day;
    console.log("/"+year+"/"+month+"/"+day);

    const data = {
        event_name: req.body.event_name,
        place_name: req.body.place_name,
        time_from: req.body.time_from,
        time_to: req.body.time_to,
        job_tag: req.body.job_tag,
        comment: req.body.comment
    };
 
    try{
        fs.writeFileSync(`${path}/plan.json`, data); 
        console.log(data);
        res.end();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

app.listen(3000, () => console.log("success!"));