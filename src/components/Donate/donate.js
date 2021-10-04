import React from 'react'

import "./donate.css"

import payment from "../../img/payment.png"
import wa2snow from "../../img/wa2snow.jpg"

function donate() {
    return (
        <div>
            <header>
                <h3><a href="./index.html">White Album 2</a></h3>
            </header>

            <section class="start-poster">
                <img id="start" src={wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a class='nonhome' href="./index.html">Home</a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse.html">Media House</a>
                    </li>
                    <li>
                        <a class='nonhome' href="./member.html">Member</a>
                    </li>
                    <li>
                        <a  href="./donate.html"><b>Donate</b></a>
                    </li>
                </ul>
            </nav>

            <section>
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
