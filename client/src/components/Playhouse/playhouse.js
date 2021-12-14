import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

import wa2sun from "../../img/wa2sun.png"
import wa2snow  from "../../img/wa2snow.jpg"
import mv from "../../img/video-icon.png"
import musicicon from "../../img/music-icon.png"
import FavoriteIcon from '@mui/icons-material/Favorite'

import 届かない恋 from "../../music/届かない恋.flac"
import closing from "../../music/closing.flac"
import 優しい嘘 from "../../music/優しい嘘.flac"
import 心はいつもあなたのそばに from "../../music/心はいつもあなたのそばに.flac"
import 愛する心 from "../../music/愛する心.flac"
import 言葉にできない想い1 from "../../music/言葉にできない想い (Cello solo ver.).mp3"
import cloture from "../../music/cloture.flac"
import 言葉にできない想い from "../../music/言葉にできない想い.flac"
import AfterAll from "../../music/After All～綴る想い～.flac"
import op from "../../videos/CC Op.mp4"

import "./playhouse.css";
import './playhouse2.css'
import axios  from '../../axios'

export default function Playhouse(props) {

    // 点赞函数
    /**
     * 点击一次, 会向后端发送post请求
     * 对应的帐号下的likes会+1
     */
    const addLike = () =>{
        const msg = {email: props.loggedEmail}
        console.log('click')
        axios.post("/addlike", msg)
            .then(res=>{
                console.log(res)
            })
            .catch(err=>console.log(err))
    }

    /**
     * 注: 
     * 相同的部分在home/index.js已经写过
     */
    // 渲染jsx
    return (
        <div className={props.cssFlag?'playhouse2':"playhouse"}>
            {/* 标题部分已经剥离 */}
            {/* <header>
                <h3><a href="/">White Album 2</a></h3>
            </header> */}

            <section class="start-poster">
                <img id="start" src={props.cssFlag?wa2snow:wa2sun} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a class='nonhome' href="/"><Link to='/'>Home</Link></a>
                    </li>
                    <li>
                        <a  href="./playhouse"><Link to='/playhouse'><b>Media House</b></Link></a>
                    </li>
                    <li>
                        <a  class='nonhome' href="./board"><Link to='/board'>Board</Link></a>
                    </li>
                    <li>
                        <a class='nonhome' href="./donate"><Link to='/donate'>Donate</Link></a>
                    </li>
                </ul>
            </nav>

            <section class="contents">
                <a href="#music">
                    <div>
                        <img  alt="music" src={musicicon}/>
                        <p id="music">Music</p>
                    </div>
                </a>
                <a href="#mv">
                    <div>
                        <img alt="mv" src={mv}/>
                        <p>Video</p>
                    </div>
                </a>
                
            </section>

            
            <main >
                
                <section  class="music">
                    <h4 >Music</h4>
                    <div class="row">
                        <figure>
                            <figcaption>
                                届かない恋
                            </figcaption>
                            <audio controls src={届かない恋}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                Closing
                            </figcaption>
                            <audio controls src={closing}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                優しい嘘
                            </figcaption>
                            <audio controls src={優しい嘘}>Error</audio>
                        </figure>
                    </div>
                    
                    <div class="row">
                        <figure>
                            <figcaption>
                                心はいつもあなたのそばに
                            </figcaption>
                            <audio controls src={心はいつもあなたのそばに}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                愛する心
                            </figcaption>
                            <audio controls src={愛する心}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                言葉にできない想い (Cello solo ver.)
                            </figcaption>
                            <audio controls src={言葉にできない想い1}>Error</audio>
                        </figure>

                    </div>

                    <div class="row">
                        <figure>
                            <figcaption id="mv">
                                Cloture
                            </figcaption>
                            <audio controls src={cloture}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                言葉にできない想い
                            </figcaption>
                            <audio controls src={言葉にできない想い}>Error</audio>
                        </figure>

                        <figure>
                            <figcaption>
                                After All～綴る想い～
                            </figcaption>
                            <audio controls src={AfterAll}>Error</audio>
                        </figure>

                    </div>
                    
                </section>

                <section  class="mv">
                    
                    <h4>Video</h4>
                    <figure>
                        <figcaption id="intromv">Opening Sequence Video of Closing Chapter</figcaption>
                        <video controls src={op} height="80%">Error</video>
                    </figure>
                </section>

                <section class="watch-anime">
                    <h4>Anime</h4>
                    <a target="_blank" href="https://search.bilibili.com/all?keyword=white%20album2&from_source=webtop_search&spm_id_from=333.851" alt="bilibili online">
                        <img src="https://img.icons8.com/plumpy/48/000000/video.png"/>
                    </a>
                </section>

                {/* 点赞模块 */}
                <section className='like-box'>
                    <p>Love it? Click like to support us</p>
                    <tag><FavoriteIcon color="primary"  onClick={addLike}/></tag>
                </section>
            </main>

            <section class="goto-top">
                <a href="#">
                    <img src="https://img.icons8.com/ios/50/000000/up-squared.png"/>
                </a>
            </section>
            
            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>
        </div>
    )
}
