import React from 'react'

import wa2snow  from "../../img/wa2snow.jpg"
import setsuna from "../../img/setsuna.png"
import ending from "../../img/ending.png"
import thearter from  "../../img/thearter.png"
import haruki from  "../../img/haruki.jpeg"
import setsuna2 from "../../img/setsuna.jpeg"
import kazusa from "../../img/kazusa.jpeg"

import "./index.css";

const index = (props) => {
    return (
        <div>

            <header>
                <h3><a href="/">White Album 2</a></h3>
            </header>

            <section class="start-poster">
                <img id="start" src={wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a href="/"><b>Home</b></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse.html">Media House</a>
                    </li>
                    <li>
                        <a class='nonhome' href="./member.html">Member</a>
                    </li>
                    <li>
                        <a class='nonhome'  href="./donate.html">Donate</a>
                    </li>
                </ul>
            </nav>

            <main>
                <article>
                    <section class="intro-paragraph">
                        <h4>Introduction</h4>
                        <p>
                            White Album 2 (ホワイトアルバム2, Howaito Arubamu 2) 
                            is a trilogy of Japanese visual novels developed by 
                            the visual novel company Leaf for the Microsoft Windows PC, 
                            and is the sequel to Leaf's earlier visual novel, White Album.
                            The first part of the series, 
                            named White Album 2: Introductory Chapter, 
                            was released on March 26, 2010. 

                            The second part in the series is named 
                            White Album 2: Closing Chapter and was 
                            released on December 22, 2011.
                            An all-ages PlayStation 3 version combining 
                            both chapters published by Aquaplus was released in 2012 
                            and ported for PlayStation Vita in 2013.
                    
                            A White Album 2 - Mini-After Story epilogue 
                            was released for Windows in 2014. White Album 2: 
                            Extended Edition, combining both chapters and the 
                            epilogue was released in 2018, also for Windows. 
                            The gameplay of White Album 2 follows a linear plot 
                            line which offers pre-determined scenarios with courses of 
                            interaction. An anime television 
                            series adaptation aired in Japan between October and December 2013.
                        </p>

                    </section> 
                </article>

                <section class="cg">
                    <div class="cg-list">
                        <figure>
                            <img src={setsuna} alt="ic-cg" width="100%"/>
                        </figure>
                        <figure>
                            <img src={ending} alt="coda-cg" width="100%"/>
                        </figure>
                        <figure>
                            <img src={thearter} alt="waki-cg" width="100%"/>
                        </figure>
                    </div>
                

                </section>

            
                <section class="characters">
                    <h4>Characters Setting</h4>
                    <figure>
                        <img src={haruki} alt="Haruki Kitahara"  height="30%"/>
                        <p><b>Haruki Kitahara</b></p>
                        <p>
                            The protagonist of White Album 2. 
                            He is a third year student at Hōjō High School 
                            and a member of the light music club and has excellent grades. 
                            He dates and loves Setsuna, but eventually Kazusa Touma shows her 
                            true feelings for him, and Haruki reveals that he loves her too.
                            Haruki plays second guitar. A student with excellent 
                            grades, who's meddlesome and preachy. Lately he's been 
                            concentrating on practicing the guitar for 
                            the school festival, but he's not talented enough to go on stage.
                        </p>
                    </figure>
                    <figure>
                        <img src={setsuna2} alt="Setsuna Ogiso" height="30%"/>
                        <p><b>Setsuna Ogiso</b></p>
                        <p>
                            Setsuna Ogiso is the first main heroine. 
                            She is the triggering of the plot and the only 
                            character with an important role in all the routes, 
                            even more than Haruki himself. Setsuna is a third year 
                            student at Hōjō High School and has been Miss Hōjō two 
                            years in a row and enjoys singing karaoke. She is beautiful 
                            and friendly when approached, yet places a wall between herself 
                            and others so she has no close friends. She refrains from making friends 
                            due to her troubled past during her years in middle school. However, 
                            she is this way precisely because she was consecutively voted as the 
                            prettiest girl in the school, 
                            and her classmates all expect her to be a fashionable, wealthy young lady.
                        </p>
                    </figure>
                    <figure>
                        <img src={kazusa} alt="Kazusa Touma" height="30%"/>
                        <p><b>Kazusa Touma</b></p>
                        <p>
                            Kazusa Touma is the second main heroine. 
                            She is a third year student at Hōjō and is in the 
                            same class as Haruki. She often dozes off in, is late for, 
                            and skips class. She is a very talented pianist, and comes 
                            from a wealthy family. Kazusa is the daughter of a famous 
                            pianist, and a musical genius who dropped out of Hōjō's music 
                            division. She is particularly annoyed with Haruki, who has 
                            been persistently pestering her for the past half year. 
                            However, once Haruki befriends her, she is a valuable ally 
                            for the cultural festival. When it comes to music, her 
                            passion and confidence is unrivaled.
                        </p>
                    </figure>
                </section>

                

                {/* <!-- <section class="goal">
                    <h4>Goals</h4>
                    <p>We gather here to show our love for White Album 2</p>
                    <p>
                        You can watch the video and listen to the music in our playhouse.
                        <br/>
                        Also you can choose to donate or become a member to support us, which 
                        will keep the website working.
                    </p>
                </section>  */}

                <section class="slogan">
                    <h2>
                        "再びホワイトアルバムの季節です
                    </h2>
                </section>
                

                <section class="mail-subscribe">
                    <h4>Subscribe</h4>
                    <form>
                        <input placeholder="Input your email and hit Enter" type="email"/>
                    </form>
                </section>

            
            </main>
            
            <section class="goto-top">
               
                <a href="# ">
                    <img alt="goto-top" src="https://img.icons8.com/ios/50/000000/up-squared.png"/>
                </a>
            </section>
            
            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}

export default index
