const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Schedule = require('./models/schedule');

const app = express();

const url = "mongodb+srv://ここにurlを貼ってください";
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

app.post('/post', async (req,res) => {

    const data = {
        event_name: req.body.event_name,
        place_name: req.body.place_name,
        time_from: req.body.time_from,
        time_to: req.body.time_to,
        job_tag: req.body.job_tag,
        comment: req.body.comment
    };
    const schedule = new Schedule(data);

 
    try{
        await schedule.save();
        console.log(data);
        res.end();
    } catch (err) {
        console.log(err);
        res.end();
    }
})

app.listen(3000, () => console.log("success!"));