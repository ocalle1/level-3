import data from'./data.js'
import Cards from './Compartments/Cards'
import Header from './Compartments/Header'
function App() {
  const vaca = data.map( post =>{
    return (
      <>
     <Cards 
     key={post.id}
     {...post}
     />
      </>
     )
  })
  return(
    <>
     <div>
      <Header />
    </div>
    {vaca}
    </>
   
  );
}

export default App;
