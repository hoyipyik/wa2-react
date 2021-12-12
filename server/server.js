let express = require("express")
let app = express()
const url = 'mongodb://localhost:27017/'

// app
app.use(express.json())
// body-parser
app.set('port', process.env.PORT || 4000)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// port 

app.post("/login", (req, resm)=>{
    resm.set('Access-Control-Allow-Origin', '*')
    /* mongodb */
    const rawData = req.body
    const {username, email} = rawData
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err,db)=>{
        let dbo = db.db('wa2')
        dbo.collection('account').find().toArray((err, res1)=>{
            if(err) throw err
            let flag = false
            for (let index=0; index<res1.length; index++ ){
                // console.log(i)
                if(res1[index].name === username){
                    if(res1[index].email === email){
                        flag = true
                        break
                    }
                    
                }
            }
            console.log(flag,"flag ")
            resm.send({flag: flag})
            db.close()
        })
    })
})

app.post("/signup", (req, resm)=>{
    resm.set('Access-Control-Allow-Origin', '*')
    /* mongodb */
    const rawData = req.body
    const {username, email} = rawData
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err,db)=>{
        let dbo = db.db('wa2')
        dbo.collection('account').find().toArray((err, res1)=>{
            if(err) throw err
            let flag = true
            if(String(email).search('@')<0)
                flag = false
            for (let index=0; index<res1.length; index++ ){
                // console.log(i)
                if(res1[index].name === username || res1[index].email === email){
                    flag = false
                    break
                }
            }
            // console.log(flag,"flag")
            resm.send({flag: flag})
            // resm.send(['Hiiiiiiiiii'])
            if(flag){
                const insertData = {name: username, email: email, likes: 0}
                dbo.collection('account').insertOne(insertData, (err2, res2)=>{
                    if(err2) throw err2
                    console.log('sign added', res2)
                    db.close()
                })
            }
        })
    })
})


app.post('/subscribeEmailList', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    let rawData = req.body
    let data = rawData.email
    const judge = String(data).search("@")
    console.log(judge)
    let flag
    if(judge<0){
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
    // console.log('subscribe email stored', rawData)
    // res.send("Hi")
})

app.get("/boardList", (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    /* mongo  {} */
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err
        let dbo = db.db('wa2')
        dbo.collection('account').find().sort({'likes': -1}).toArray((err, resd)=>{
            if(err) throw err
            // const data = []
            // console.log(resd)
            let newData = [...resd]
            res.send(newData)
            // res.send("Hi")
            // console.log("boardlist sent", newData)
            db.close()
        })
    })
})

app.post("/addlike", (req, resm)=>{
    resm.set('Access-Control-Allow-Origin', '*')
    const frontData = req.body
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        let name = ''
        let email = frontData.email
        let likes = 0
        if(err) throw err
        let dbo = db.db('wa2')
        dbo.collection('account').find(frontData).toArray((err2, redata)=>{
            // console.log(redata)
            if(err2) throw err2
            name = redata[0].name
            likes = parseInt(redata[0].likes)+1
            console.log(likes, frontData)
            let setData = {$set: {name: name, email: email, likes: likes}}
            // console.log(email)
            dbo.collection('account').updateOne(frontData, setData, (err3)=>{
                if(err3) throw err3
                console.log('like added')
                resm.send(['add'])
                db.close()
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
