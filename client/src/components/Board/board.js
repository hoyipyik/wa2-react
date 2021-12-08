import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import wa2snow from "../../img/wa2snow.jpg"
import axios from '../../axios'
import "./board.css"

const Board = (props) => {
    const [list, setList] = useState([])

    useEffect(()=>{
        axios.get("/boardList.json")
            .then(res=>{
                let data = []
                // data = [...res.data]
                setList(data)
                console.log(data)
            })
    }, [])

    const table = list.map((item, index)=>{
        const {name, email, likes} = item
        const number = index
        const row = <tr>
            <td>{number}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{likes}</td>
        </tr>

        if(email === props.loggedEmail)
            return <b>{row}</b>
        else
            return {row}
    })

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
                        <a class='nonhome' href="./playhouse.html"><Link to='/playhouse.html'>Media House</Link></a>
                    </li>
                    <li>
                        <a  href="./board.html"><Link to='/board.html'><b>Board</b></Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./donate.html"><Link to='/donate.html'>Donate</Link></a>
                    </li>
                </ul>
            </nav>

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
