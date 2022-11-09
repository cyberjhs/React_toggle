import React, { useState } from "react"
const Container = () => {
    const [theme, setTheme] = useState(true)

  return (
    <div className={ theme ? "light" : "dark"}>
        <div className="parent">
                <div className="navbaar">
                    <span><u>Overreacted</u></span>
                    <span><button onClick={() => setTheme(!theme)}>Toggle</button></span>
                </div>
            <div className="content">
                <div>
                    <h1>The Wet Codebase</h1>
                    <p><i>Sunday 4th,2020 11 min read</i></p>
                    <span>Come waste your time with me</span>
                </div>

                <div>
                    <h1>Goodby, Clean Code</h1>
                    <p><i>Friday 22nd,2019 5 min read</i></p>
                    <span>Let clean code guide you,then let it go.</span>
                </div>

                <div>
                    <h1>My Decade In Review</h1>
                    <p><i>Saturday 11th,2018 5 min read</i></p>
                    <span>A person reflextion.</span>
                </div>

                <div>
                    <h1>What Are The React Team Principles</h1>
                    <p><i>Thurday 4th,2015 5 min read</i></p>
                    <span>Make the website easily with your code.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container