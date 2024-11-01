import { useEffect, useState } from "react"

const Cards = () => {
    const [cards, setCards] = useState([])
    const [limit, setLimit] = useState(12)

    const handleMore = () => {
        setLimit((l) => l + 12)
    }

    useEffect(function(){
        async function fetchData(){
            const getApi = await fetch(`https://jsonplaceholder.typicode.com/albums?_limit=${limit}`)
        
            const getData = await getApi.json()
        
            setCards(getData)
        
            }
            fetchData()
    }
    , [limit])

    console.log("cards:", cards)
    console.log("limit:", limit)
    return (
      <>
        <div className="cards">
          {cards.map((element) => {
            return (
              <div className="card-item" key={element.id}>
                {element.title} {element.id}
              </div>
            );
          })}
        </div>
        <button onClick={handleMore}>More</button>
      </>
    );
}

export default Cards