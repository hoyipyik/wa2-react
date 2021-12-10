const express = require("express")
const app = express()
const url = 'mongodb://localhost:27017/'

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
        MongoClient.connect(url, (err, db) =>{
        if(err) throw err
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
    console.log('subscribe email stored', rawData)
})

app.get("/boardList.json", (req, res)=>{
    /* mongo  {} */
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err
        dbo = db.db('wa2')
        dbo.collection('account').find().sort({'likes': -1}).toArray((err, resd)=>{
            if(err) throw err
            // const data = []
            // console.log(resd)
            newData = [...resd]
            res.send(newData)
            console.log("boardlist sent", newData)
            db.close()
        })
    })
})

app.post("/addlike.json", (req, res)=>{
    const frontData = req.body
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        let name = 'aa'
        let email = frontData.email
        let likes = 0
        if(err) throw err
        dbo = db.db('wa2')
        dbo.collection('account').find(frontData).toArray((err2, redata)=>{
            // console.log(redata)
            if(err2) throw err2
            name = redata[0].name
            likes = parseInt(redata[0].likes)+1
            setData = {$set: {name: name, email: email, likes: likes}}
            // console.log(email)
            dbo.collection('account').updateOne(frontData, setData, (err3, rep)=>{
                if(err3) throw err3
                console.log('like added', name, email, likes)
            })
        })
    
    })
})

// listen
app.listen(app.get('port'), ()=>{
    console.log("Express started on http://localhost:" +
     app.get("port") +
      "; \npress Ctrl - C to terminate....")
})
// listen, listen the port 
