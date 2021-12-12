import React from 'react'
import {Link} from 'react-router-dom'
import "./donate.css"

import payment from "../../img/payment.png"
import wa2snow from "../../img/wa2snow.jpg"

function donate() {
    return (
        <div className="donate">
            {/* <header>
                <h3><a href="/">White Album 2</a></h3>
            </header> */}

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
                        <a class='nonhome' href="./board"><Link to='/board'>Board</Link></a>
                    </li>
                    <li>
                        <a  href="./donate"><Link to='/donate'><b>Donate</b></Link></a>
                    </li>
                </ul>
            </nav>

            <section id="pay">
                <figure>
                    <figcaption>Alipay</figcaption>
                    <img alt="alipay" src={payment}/> 
                </figure>
            </section>

            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}

export default donate
