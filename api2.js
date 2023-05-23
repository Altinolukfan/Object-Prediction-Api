const axios = require("axios");
var express = require("express");
var app = express();

app.get('/',(req,res)=>{
    res.send("saaaa");
   });


app.get('/posts/adr',(req,res)=>{
    let adr=req.query.link;
axios({
    method: "POST",
    url: "https://detect.roboflow.com/face-and-object-detection/1",
    params: {
        api_key: "KjBkuLDgo3lwwoqTBsYj",
        image: adr
    
    }
})
.then(function(response) {
    res.send(response.data);
    //res.end();
})
.catch(function(error) {
    //console.log(error.message);
    res.send("error");
});


    
   });
  

   app.listen(3000);