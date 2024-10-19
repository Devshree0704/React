import "./App.css"
import { useState, useEffect } from "react"

const App = () => {
    const [percent, setPercent] = useState(0)

    useEffect(() => {
        const id = setInterval(function(){
            setPercent((per) => per<100?per+1:per)
        }, 20)

        return() => clearInterval(id)
    }, [percent])
    return(
        <div className="app">
            <h3>PROGRESS BAR</h3>
            <div className="progressBar">
            <div className="completeProgressBar" style={{width: `${percent}%`}}>{percent}%</div>
            </div>
        </div>
    )
}

export default App