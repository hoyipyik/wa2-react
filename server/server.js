let express = require("express")
let app = express()
// app
// app.use(require('body-parser')())
// body-parser
app.set('port', process.env.PORT || 6000)
// port 

app.post("/login.json", (req, res)=>{
    /* mongodb */
    const backmsg
    res.send(backmsg)
})

app.post("/signup.json", (req, res)=>{
    /* mongodb */
    const backmsg
    res.send(backmsg)
})

app.post('/subscribeEmailList.json', (req, res)=>{
    let data = req.body
    data = Object.values(data) 
    const judge = String(data).search("@")
    console.log(judge)
    let flag = false
    if(parseInt(judge)<0){
        flag = false
    }else{
        flag = true
        /* Add mongodb here */
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
