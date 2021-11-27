import React from 'react'
import { useState } from 'react'

import wa2snow from "../../img/wa2snow.jpg"

import "./member.css"

const Member = (props) => {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [age, setAge] = useState("Under 18")
    const [email, setEmail] = useState()
    const [intro, setIntro] = useState()

    return (
        <div className="member">
            <header>
                <h3><a href="./index.html">White Album 2</a></h3>
            </header>

            <section class="start-poster">
                <img id="start" src={wa2snow} alt="home-poster" width="100%"/>
            </section>

            <nav>
                <ul>
                    <li>
                        <a class='nonhome' href="/">Home</a>
                    </li>
                    <li>
                        <a class="nonhome" href="./playhouse.html">Media House</a>
                    </li>
                    <li>
                        <a href="./member.html"><b>Member</b></a>
                    </li>
                    <li>
                        <a class='nonhome'  href="./donate.html">Donate</a>
                    </li>
                </ul>
            </nav>

            <form>
                <h4>Become Our Member</h4>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Items</th>
                            <th scope="col">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>
                        <tr>
                            <td>User Name</td>
                            <td>
                                <input type="text"/>
                            </td>
                        </tr>

                        <tr>
                            <td>Age</td>
                            <td>
                                <select>
                                    <option id="under18" value='Under 18'>Under 18</option>
                                    <option id="19-40" value='19-40'>19 - 40</option>
                                    <option id="41-70" value="41-70">41 - 70</option>
                                    <option id="above71" value="Above 70">Above 70</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Mail Address</td>
                            <td><input type="email"/></td>
                        </tr>
                        <tr class="textarea">
                            <td >Introduction</td>
                            <td>
                                <textarea value="" placeholder="Write Something About You">
                                    
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button >Submit</button>
            </form>

            <footer>
                <hr/>
                <p>Copyright 2021 WA2 by 贺烨毅(2019210737)</p>
            </footer>

            </div>
            )
        }

export default Member
