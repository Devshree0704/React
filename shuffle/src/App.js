import { useState } from "react"

const fruits = ["apple", "mango", "orange", "banana", "grapes"]
const App = () => {
    const [item, setItem] = useState(fruits)

    const handleShuffle = () => {
        const shuffle = item.sort(() => Math.random() - 0.5)
        setItem([...shuffle])
    }

    console.log("item:", item)
    return(
        <div className="app">
            <h2>Shuffle Items</h2>
            <div className="conatiner">
                {item.map((element) => {
                    return(
                        <ul className="list" key={element}>
                            <li className="item">{element}</li>
                        </ul>
                    )
                })}
            </div>
            <button onClick={handleShuffle}>shuffle item</button>
        </div>
    )
}

export default App