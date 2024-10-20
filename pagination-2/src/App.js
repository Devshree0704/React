import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [comments, setComments] = useState([])
  const [currentPage, setCurrentPage] =  useState(1)

  async function getData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    const data = await response.json()
    setComments(data)
    console.log(data)
  }

  const handlePrev = () => {
    setCurrentPage((pg) => pg-1)
  }

  const handleNext = () => {
    setCurrentPage((pg) => pg+1)
  }

  const handleCurrentPage = (event) => {
    setCurrentPage(Number(event.target.value))
  }

  useEffect(function(){
    getData()
  }, [])

  const totalPages = (comments.length/10)

  return (
    <div className="App">
      <h3>Pagination</h3>
      <div className='actions'>
        <button className='prev' onClick={handlePrev}disabled={currentPage === 1 ? true : false}>Prev</button>
        <input value={currentPage} onChange={handleCurrentPage} style={{width: '30px'}}/>
        <span>/{totalPages}</span>
        <button className='next' onClick={handleNext}disabled={currentPage === 50 ? true : false}>Next</button>
      </div>
      {comments.slice((currentPage*10)-10, currentPage * 10).map((element) => {
        return(
          <div className='comment-item' key={element.id}>{element.body} -- {element.id}</div>
        )
      })}
    </div>
    // slice(currentPage*10, (currentPage + 1) * 10)
  );
}

export default App;
