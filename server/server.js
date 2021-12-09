let express = require("express")
let app = express()

var MongoClient = require('mongodb').MongoClient


// app
// app.use(require('body-parser')())
// body-parser
app.set('port', process.env.PORT || 4000)
// port 

app.post("/login.json", (req, res)=>{
    /* mongodb */
    const backmsg = {}
    res.send(backmsg)
})

app.post("/signup.json", (req, res)=>{
    /* mongodb */
    const backmsg = {}
    res.send(backmsg)
})

app.post('/subscribeEmailList.json', (req, res)=>{
    let rawData = req.body
    data = Object.values(rawData) 
    const judge = String(data).search("@")
    console.log(judge)
    let flag = false
    if(parseInt(judge)<0){
        flag = false
    }else{
        flag = true
        /* Add mongodb here */
        MongoClient.connect('mongodb://localhost:27017/wa2', function (err, client) {
        if (err) throw err

        var db = client.db('wa2')
        db.collection('subscribeList').update(rawData)
        // db.collection('subscribeList').find().toArray(function (err, result) {
        //     if (err) throw err
            
        //     console.log(result)
        // })
    })
    }

    const backmsg = {
        'email': String(data),
        'flag': flag,
    }
    res.send(backmsg)
    console.log(backmsg, '/subscribeEmailList.json')
})

app.get("/subscribeEmailList.json", (req, res)=>{
    /* mongo  {} */
    const backmsg = [...data]
    res.send(backmsg)
})

// listen
app.listen(app.get('port'), ()=>{
    console.log("Express started on http://localhost:" +
     app.get("port") +
      ";press Ctrl - C to terminate....")
})
// listen, listen the port 
