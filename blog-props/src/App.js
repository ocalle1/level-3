import React from "react";
import data from './data.js'
import BlogList from'./Compartment/BlogList'
import Footer from'./Compartment/Footer'
import Header from'./Compartment/Header'
import Navbar from'./Compartment/Navbar'
import './Css/Navbar.css'



function App() {
  const blog = data.map(post => {
  return (
  <>
<BlogList 
key={post.id}
{...post} 
/>
  </>
    )
}) 
return(
  <div>
    <Header />
    <Navbar />
    <Footer />
{blog}
  </div>
)
}
export default App;
