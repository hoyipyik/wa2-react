import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import axios from "../../axios"
import Snackbar from '@material-ui/core/Snackbar'
import wa2snow  from "../../img/wa2snow.jpg"
import wa2sun from '../../img/wa2sun.png'
import setsuna from "../../img/setsuna.png"
import ending from "../../img/ending.png"
import theatre from  "../../img/thearter.png"
import haruki from  "../../img/haruki.jpeg"
import setsuna2 from "../../img/setsuna.jpeg"
import kazusa from "../../img/kazusa.jpeg"

import "./index.css"
import "./index2.css"


const Index = (props) => {
    // react hooks 
    // 订阅email的变量
    const [email, setEmail] = useState("")
    // 是否选中input框的判断
    const [focusFlag, setFocusFlag] = useState(false)
    // 二级菜单变量
    const [subNavFlag, setSubNavFlag] = useState("More")
    // 输入内容发送标示
    const [sentFlag, setSentFlag] = useState(false)
    // 反馈悬浮snack
    const [snackmsg, setSnackmsg] = useState("")

    // 设定悬浮snack显示时间是3s
    useEffect(()=>{
        if(sentFlag){
            setTimeout(() => {
                setSentFlag(false)
            }, 3000);
        }
    }, [sentFlag])

    // 按键监听  如果focus在input, 而且有输入内容, 点击entre就可以发送
    useEffect(() => {
        const listener = (event)=>{
            const targetElement = document.getElementById("email")
            if(document.activeElement === targetElement){
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                    console.log("Enter key was pressed. Run your function.");
                    if(email!==""&&focusFlag)
                    /**
                     * axios是ajax的封装
                     */
                    // http post 发送给后端
                    axios.post("/subscribeEmailList", {email})
                        .then(res=>{
                            console.log(res.data, "Subscribe email send")
                            setSentFlag(true)
                            if(res.data.flag){
                                setEmail("")
                                setSnackmsg("Send Success")
                                setFocusFlag(false)
                            }else{
                                setSnackmsg("Invaliade email")
                            }
                            
                        })
                        .catch(err=>console.log(err))
                    event.preventDefault()
                    
                }
            }
            
        }

        document.addEventListener("keydown", listener)
        // unmount component之后, 结束事件监听
        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, )

    // 输入函数
    const inputHandler = (event) =>{
        const {value} = event.target
        setEmail(value)
        setFocusFlag(true)
    }
    
    // 二级菜单的jsx
    const subNav = 
        <ul id="sub-nav-ul">
            <li>
                <a class="nonhome" target="_blank" href="https://en.wikipedia.org/wiki/White_Album_2">Wikipedia</a>
            </li>
            <li>
                <a class="nonhome" target="_blank" href="https://www.imdb.com/title/tt2942224/">IMDb</a>
            </li>
            <li>
                <Link to='/donate'><a class="nonhome" href="./donate">Donate</a></Link>
            </li>
        </ul>
    

    // 二级菜单的处理函数
    const subNavHandler = ()=>{
        if(subNavFlag === "More")
            setSubNavFlag("Hide")
        else
            setSubNavFlag("More")
    }

    //  渲染的jsx
    return (
        <div className={props.cssFlag?"index2":"index"}>

            {/* 标题区域已经在App.js中集中展示 */}

            {/* poster logo */}
            <section class="start-poster">
                <img id="start" src={props.cssFlag?wa2sun:wa2snow} alt="home-poster" width="100%"/>
            </section>

            {/* 导航 */}
            <nav className='main-nav'>
                <ul>
                    <li>
                        <a href="/"><Link to='/'><b>Home</b></Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./playhouse"><Link to='/playhouse'>Media House</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./board"><Link to='/board'>Board</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' id='more' onClick={subNavHandler}>{subNavFlag}</a>
                    </li>
                </ul>
                {/* 二级菜单触发 */}
                {subNavFlag !=="More"? <nav id="sub-nav">{subNav}</nav>:null}
            </nav>
            
            {subNavFlag !=="More"? <div><br/><br/></div>:null}

            {/* 主体内容 */}
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
                            <img src={theatre} alt="waki-cg" width="100%"/>
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
                
                {/* 邮件订阅 */}
                <section class="mail-subscribe">
                    <h4>Subscribe</h4>
                    <form>
                        <input placeholder="Input your email and hit Enter" type="email" value={email} id='email'  name="email" onChange={inputHandler}/>
                    </form>
                </section>

            
            </main>
            
            {/* 返回顶部 */}
            <section class="goto-top">
               
                <a href="# ">
                    <img alt="goto-top" src="https://img.icons8.com/ios/50/000000/up-squared.png"/>
                </a>
            </section>

            {/* snackbar 显示 */}
            {sentFlag?
            <section className='snackBar'>
                <Snackbar open={true} message={snackmsg}/>
            </section>
            :null}
            
            {/* 底部版权footer */}
            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}

export default Index
