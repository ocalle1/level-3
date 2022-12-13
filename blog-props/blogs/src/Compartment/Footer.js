import React from "react"
import twitter from"../Photos/twitter.png"
import facebook from"../Photos/facebook.png"
import github from"../Photos/github.png"

export default function Footer(){
    return(
        <>
        <a className="btn" href="https://startbootstrap.github.io/startbootstrap-clean-blog/#!">Older Posts</a>
        <p className="copy-right">Copyright Your Website 2022 </p>
        <img src={twitter} alt="twitter" className="twitter"/>
        <img src={facebook} alt="facebook" className="facebook"/>
        <img src={github} alt="github" className="github"/>
        <svg className="social-media">
        </svg>
        </>
    )
}