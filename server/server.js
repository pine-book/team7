const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(cors());



app.get('/', (req,res) => {
    res.sendFile(__dirname+'/vertida.html')
})

app.post('/:year/:month/:day', (req,res) => {
    const year = String(req.params["year"]);
    const month = String(req.params["month"]);
    const day = String(req.params["day"]);
    const path = "db/"+year+"/"+month+"/"+day;
    console.log("/"+year+"/"+month+"/"+day);

    const data = [{
        event_name: req.body.event_name,
        place_name: req.body.place_name,
        time_from: req.body.time_from,
        time_to: req.body.time_to,
        job_tag: req.body.job_tag,
        comment: req.body.comment
    }];

    const content = JSON.stringify(data);
    
    if(!fs.existsSync(path)){
      fs.mkdirSync(path, { recursive: true });
      fs.writeFileSync(path+"/test.json", content);
    }else{
      fs.appendFileSync(path+"/test.json", "\n"+content);
    }

    console.log(data);
    res.end();
})

app.listen(3000, () => console.log("success!"));