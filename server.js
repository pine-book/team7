const express = require('express');
const fs = require('fs');
const cors = require('cors');
const { json } = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/style', express.static('style'));
app.use('/src', express.static('src'));
app.use('/db', express.static('db'));



app.get('/', (req,res) => {
    res.sendFile(__dirname+'/vertida.html')
})

app.post('/:date', (req,res) => {
    const dateBefore = req.params.date.split('-');
    const dateAfter = req.body.time_to.split('-');

  
    const yearBefore = Number(dateBefore[0]);
    const monthBefore = Number(dateBefore[1]);
    const dayBefore = Number(dateBefore[2]);
    const dayAfter = Number(dateAfter[2]);
    
    console.log("/"+yearBefore+"/"+monthBefore+"/"+dayBefore);
    
    const data = {
        event_name: req.body.event_name,
        place_name: req.body.place_name,
        time_from: req.body.time_from,
        time_to: req.body.time_to,
        job_tag: req.body.job_tag,
        comment: req.body.comment
    };

    
    for(let i=dayBefore; i<=dayAfter ;i++){
     let path = "db/"+yearBefore+"/"+monthBefore+"/"+i;
     if(!fs.existsSync(path)){
       const content = [];
       content.push(data);
       fs.mkdirSync(path, { recursive: true });
       fs.writeFileSync(path+"/data.json", JSON.stringify(content));
     }else{
       const content = JSON.parse(fs.readFileSync(path+'/data.json'));
       content.push(data);
       fs.writeFileSync(path+"/data.json", JSON.stringify(content));
     }

    }


    console.log(data);
    res.redirect('/');
})

app.listen(3000, () => console.log("success!"));
