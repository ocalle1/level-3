import './App.css';
import data from './data'
import Friends from './Components/Friends'



function App() {
  const friend = data.map(post => {
    return (
      <>
        <Friends
          key={post.id}
          {...post}
        />
      </>
    )
  });

  return (
    <>
    <section>
    <nav>
      {friend}
      </nav>
      </section>
    </>
  )

}

export default App;
