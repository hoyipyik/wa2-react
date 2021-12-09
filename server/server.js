let express = require("express")
let app = express()

// app
app.use(require('body-parser')())
// body-parser
app.set('port', process.env.PORT || 4000)
// port 

// app.post("/login.json", (req, res)=>{
//     /* mongodb */
//     const backmsg = {}
//     res.send(backmsg)
// })

// app.post("/signup.json", (req, res)=>{
//     /* mongodb */
//     const backmsg = {}
//     res.send(backmsg)
// })

app.post('/subscribeEmailList.json', (req, res)=>{
    let rawData = req.body
    data = rawData.email
    const judge = String(data).search("@")
    console.log(judge)
    let flag = false
    if(parseInt(judge)<0){
        flag = false
    }else{
        flag = true
        /* Add mongodb here */
        const MongoClient = require('mongodb').MongoClient
        MongoClient.connect('mongodb://localhost:27017/', (err, db) =>{

        const dbo = db.db('wa2')

        dbo.collection('subscribeList').insertOne(rawData, (err, res)=>{
            if(err) throw err
            console.log(res)
            db.close()
        })
        })
    }

    const backmsg = {
        'email': String(data),
        'flag': flag,
    }
    res.send(backmsg)
    console.log(rawData, '/subscribeEmailList.json')
})

// app.get("boardList.json", (req, res)=>{
//     /* mongo  {} */
//     const backmsg = [...data]
//     res.send(backmsg)
// })

// listen
app.listen(app.get('port'), ()=>{
    console.log("Express started on http://localhost:" +
     app.get("port") +
      ";press Ctrl - C to terminate....")
})
// listen, listen the port 
