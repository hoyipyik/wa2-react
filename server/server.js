// 引入express库
let express = require("express")
let app = express()
// 定义mongodb的url
const url = 'mongodb://localhost:27017/'

// 解析json
app.use(express.json())
// 端口设定
app.set('port', process.env.PORT || 4000)

// CORS设定
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// 登录api 
/**
 * 返回参数是flag 
 * 
 * 思路是, 将用户输入的用户和邮件名称和数据库中的对应数据对比
 * 如果出现不一致就令 flag = false
 */
app.post("/login", (req, resm)=>{
    resm.set('Access-Control-Allow-Origin', '*')
    /* mongodb */
    // 获取数据
    const rawData = req.body
    /**
     * {name} = data
     * 等价于
     * name = data.name
     * 这是Javascript ES6的语法
     */
    const {username, email} = rawData
    // 声明数据库对象
    const MongoClient = require('mongodb').MongoClient
    // 连接数据库
    MongoClient.connect(url, (err,db)=>{
        // 使用wa2
        let dbo = db.db('wa2')
        // 寻找account collection
        dbo.collection('account').find().toArray((err, res1)=>{
            if(err) throw err
            let flag = false
            for (let index=0; index<res1.length; index++ ){
                //在循环中判断username和email
                if(res1[index].name === username){
                    if(res1[index].email === email){
                        // 正确之后, 返回表示flag
                        flag = true
                        break
                    }
                    
                }
            }
            console.log(flag,"flag ")
            // 将flag变量打包发送到前端
            resm.send({flag: flag})
            // 关闭数据库
            db.close()
        })
    })
})

//signup api
/**
 * 返回的参数也是 flag
 * 
 * 思路是, 首先得到前端的username和email,
 * 对email进行判定, 如果email不是邮件格式, 直接
 * 
 * 在数据库的account中进行遍历对比
 * 如果有用户名或者邮箱使用过的, 直接否决
 * 
 * 如果数据没有问题, 将新的资讯写入数据库的account collection中
 * 
 */
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
            // 判断标示
            let flag = true
            // email格式检查
            if(String(email).search('@')<0)
                flag = false
            for (let index=0; index<res1.length; index++ ){
                // 循环检测 用户名和邮件是否已经被占用
                if(res1[index].name === username || res1[index].email === email){
                    flag = false
                    break
                }
            }
            resm.send({flag: flag})
            // 没有问题 进行写入
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

//订阅邮件添加api
/**
 * 判断传输过来的内容是否是邮件的格式
 * 如果不是 flag = false
 * 如果是 flag = true 并且写入数据库
 */
app.post('/subscribeEmailList', (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    let rawData = req.body
    let data = rawData.email
    // mail格式检查
    const judge = String(data).search("@")
    console.log(judge)
    let flag
    if(judge<0){
        flag = false
    }else{
        flag = true
        // 插入数据到邮件列表
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
    // 返回json
    const backmsg = {
        'email': String(data),
        'flag': flag,
    }
    res.send(backmsg)
})

//点赞排行api
/**
 * 为board提供数据
 * 从account中取得列表 
 * 在查询的时候就直接进行排序
 */
app.get("/boardList", (req, res)=>{
    res.set('Access-Control-Allow-Origin', '*')
    const MongoClient = require('mongodb').MongoClient
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err
        let dbo = db.db('wa2')
        // 连接数据库
        // 按照likes的降序对数据进行排序查询
        dbo.collection('account').find().sort({'likes': -1}).toArray((err, resd)=>{
            if(err) throw err
            // 解构res数组, 赋值给newData
            // 这个写法也是JS ES6的语法
            let newData = [...resd]
            res.send(newData)
            db.close()
        })
    })
})

//点赞api
/**
 * 首先从前端得到已经登录用户的邮件
 * 对该用户对应的likes的数值 进行+1操作
 */
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
        // 数据库连接 查询
        dbo.collection('account').find(frontData).toArray((err2, redata)=>{
            if(err2) throw err2
            name = redata[0].name
            likes = parseInt(redata[0].likes)+1
            console.log(likes, frontData)
            let setData = {$set: {name: name, email: email, likes: likes}}
            // 更新对应的信息
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

