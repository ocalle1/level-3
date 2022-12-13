import React from "react"

export default function Header(){
    return(
    <>
    <header className="header">   
    <h3 className="clean-blog">Clean Blog</h3>
    <h1 className="blog-int">A Blog Theme by Strart Bootstrap</h1>
        <nav className="nav">
    <div className="navstyle">
    <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/" className="start--bootstrap"> Start Bootstrap</a>
    <div className="row">
    <li className="nav-item">Home</li>
    <li className="nav-item">About</li>
    <li className="nav-item">Sample Post</li>
    <li className="nav-item">Contact</li>
    </div>
</div>
</nav>
    </header>
    
    </>
    )
};