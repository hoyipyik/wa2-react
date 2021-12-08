import React, {useState, useEffect} from 'react'

import wa2snow from "../../img/wa2snow.jpg"

import "./board.css"

const Board = (props) => {

    const table = <div></div>

    return (
        <div className='board'>
            <section class="start-poster">
                <img id="start" src={wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a class='nonhome' href="/">Home</a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse.html">Media House</a>
                    </li>
                    <li>
                        <a  href="./board.html"><b>Board</b></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./donate.html">Donate</a>
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
