const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use('/style', express.static('style'));
app.use('/src', express.static('src'));



app.get('/', (req,res) => {
    res.sendFile(__dirname+'/vertida.html')
})

app.post('/:date', (req,res) => {
    const dateBefore = req.params.date.split('-');
    const dateAfter = req.body.time_to.split('-');

  
    const yearBefore = Number(dateBefore[0]);
    const monthBefore = Number(dateBefore[1]);
    const dayBefore = Number(dateBefore[2]);
    const yearAfter = Number(dateAfter[0]);
    const monthAfter = Number(dateAfter[1]);
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

    const content = JSON.stringify(data);

    
    for(let k=dayBefore; i<=dayAfter ;k++){
     let path = "db/"+i+"/"+j+"/"+k;
     if(!fs.existsSync(path)){
       fs.mkdirSync(path, { recursive: true });
       fs.writeFileSync(path+"/test.json", content);
     }else{
       fs.appendFileSync(path+"/test.json", "\n"+content);
     }

     if(k === dayAfter) break;
    }


    console.log(data);
    res.redirect('/');
})

app.listen(3000, () => console.log("success!"));