import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "../../axios"
import Snackbar from '@material-ui/core/Snackbar'
import wa2snow  from "../../img/wa2snow.jpg"
import wa2sun from '../../img/wa2sun.png'
import setsuna from "../../img/setsuna.png"
import ending from "../../img/ending.png"
import thearter from  "../../img/thearter.png"
import haruki from  "../../img/haruki.jpeg"
import setsuna2 from "../../img/setsuna.jpeg"
import kazusa from "../../img/kazusa.jpeg"

import "./index.css"
import "./index2.css"

const Index = (props) => {
    const [email, setEmail] = useState("")
    const [focusFlag, setFocusFlag] = useState(false)
    const [subNavFlag, setSubNavFlag] = useState("More")
    const [sentFlag, setSentFlag] = useState(false)
    const [snackmsg, setSnackmsg] = useState("")

    useEffect(()=>{
        if(sentFlag){
            setTimeout(() => {
                setSentFlag(false)
            }, 3000);
        }
    }, [sentFlag])

    useEffect(() => {
        const listener = (event)=>{
            const targetElement = document.getElementById("email")
            if(document.activeElement === targetElement){
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                    console.log(event.code, "event code")
                    console.log("Enter key was pressed. Run your function.");
                    // console.log(email)
                    // setTimeout(()=>{}, 1000)
                    // window.alert()
                    if(email!==""&&focusFlag)
                    axios.post("/subscribeEmailList.json", {email})
                        .then(res=>{
                            console.log(res.data, "Subscribe email send")
                            setSentFlag(true)
                            if(res.data.flag){
                                setEmail("")
                                setSnackmsg("Send Success")
                                // setTimeout(() => {
                                //     setFocusFlag(false)
                                // }, 1000)
                                setFocusFlag(false)
                            }else{
                                // setEmail("")1
                                setSnackmsg("Invaliade email")
                            }
                            
                        })
                        .catch(err=>console.log(err))
                    event.preventDefault()
                    
                }
            }
            
        }
        // console.log("key")
        document.addEventListener("keydown", listener)
        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, )

    const inputHandler = (event) =>{
        const {value} = event.target
        setEmail(value)
        setFocusFlag(true)
    }
    

    const subNav = 
        <ul id="sub-nav-ul">
            <li>
                <a class="nonhome" target="_blank" href="https://en.wikipedia.org/wiki/White_Album_2">Wikipedia</a>
            </li>
            <li>
                <a class="nonhome" target="_blank" href="https://www.imdb.com/title/tt2942224/">IMDb</a>
            </li>
            <li>
                <Link to='/donate.html'><a class="nonhome" href="./donate.html">Donate</a></Link>
            </li>
        </ul>
    

    const subNavHandler = ()=>{
        if(subNavFlag === "More")
            setSubNavFlag("Hide")
        else
            setSubNavFlag("More")
    }

    return (
        <div className={props.cssFlag?"index2":"index"}>

            {/* <header>
                <h3><a href="/" >White Album 2</a></h3>
            </header> */}

            <section class="start-poster">
                <img id="start" src={props.cssFlag?wa2sun:wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav className='main-nav'>
                <ul>
                    <li>
                        <a href="/"><Link to='/'><b>Home</b></Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse.html"><Link to='/playhouse.html'>Media House</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./board.html"><Link to='/board.html'>Board</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' id='more' onClick={subNavHandler}>{subNavFlag}</a>
                    </li>
                </ul>
                {subNavFlag !=="More"? <nav id="sub-nav">{subNav}</nav>:null}
            </nav>
            
            {subNavFlag !=="More"? <div><br/><br/></div>:null}
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
                        <img id='middle' className='thin' src={setsuna2} alt="Setsuna Ogiso" height="30%"/>
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
                        <img className='thin' src={kazusa} alt="Kazusa Touma" height="30%"/>
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

                <section class="slogan">
                    <h2>
                        "再びホワイトアルバムの季節です
                    </h2>
                </section>
                

                <section class="mail-subscribe">
                    <h4>Subscribe</h4>
                    <form>
                        <input placeholder="Input your email and hit Enter" type="email" value={email} id='email'  name="email" onChange={inputHandler}/>
                    </form>
                </section>

            
            </main>
            
            <section class="goto-top">
               
                <a href="# ">
                    <img alt="goto-top" src="https://img.icons8.com/ios/50/000000/up-squared.png"/>
                </a>
            </section>
            {sentFlag?
            <section className='snackBar'>
                <Snackbar open={true} message={snackmsg}/>
            </section>
            :null}
            
            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}

export default Index
