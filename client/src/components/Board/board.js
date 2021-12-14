import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import wa2snow from "../../img/wa2snow.jpg"
import axios from '../../axios'
import "./board.css"

const Board = (props) => {
    // list存放参数
    const [list, setList] = useState([])

    // http get排位内容
    // 此处的出发的条件是, 如果登录的账户有变动(登入登出变化)
    useEffect(()=>{
        axios.get("/boardList")
            .then(res=>{
                let data = []
                console.log(res.data)
                data = [...res.data]
                setList(data)
            })
            .catch(err=>console.log(err))
    }, [props.loggedEmail])

    // 第一次页面加载的时候会触发http请求
    useEffect(()=>{
        axios.get("/boardList")
            .then(res=>{
                let data = []
                console.log(res.data)
                data = [...res.data]
                // 将内容存放到state中
                setList(data)
            })
            .catch(err=>console.log(err))
            // 离开本页面, unmount掉这个component
        return ()=>console.log('unmount')
    }, [])

    // 加载的列表
    /**
     * 使用了js的array对象内置的map函数, 进行遍历
     * 返回的内容是row组成数组.
     * 
     * 同时当前登入的用户的字体是加粗的
     */
    const table = list.map((item, index)=>{
        const {name, email, likes} = item
        const row = <tr key={index}>
            <td>{index+1}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{likes}</td>
        </tr>

        // 对当前登入用户的判定
        if(email === props.loggedEmail)
            return <tr key={index}>
                <td><b>{index+1}</b></td>
                <td><b>{name}</b></td>
                <td><b>{email}</b></td>
                <td><b>{likes}</b></td>
            </tr>
        else
            return row
    })

    // jsx
    return (
        <div className='board'>
            <section class="start-poster">
                <img id="start" src={wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a class='nonhome' href="/"><Link to='/'>Home</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse"><Link to='/playhouse'>Media House</Link></a>
                    </li>
                    <li>
                        <a  href="./board"><Link to='/board'><b>Board</b></Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./donate"><Link to='/donate'>Donate</Link></a>
                    </li>
                </ul>
            </nav>

            {/* 表格部分 */}
            <section className='ranking-table'>
                <h4>Ranking of likes clicked</h4>
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope="col">Name</th>
                            <th scope='col'>Email</th>
                            <th scope="col">Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </section>

            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}

export default Board
