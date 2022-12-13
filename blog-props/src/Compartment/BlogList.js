import React from "react"


export default function BlogList(props){
    return(
    <>
     
    <div className="main">
    <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">
    <h2 className="title">{props.title}</h2>
    <h3 className="sub-title">{props.subTitle}</h3>
    </a>
    <a href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!">
    <p>Posted by {props.author} {props.date}
    </p>
    </a>
    </div>
    </>
    )
}