import { useState } from 'react'
import './App.css'
import LeftContainer from './Components/LeftContainer'
import RightCointainer from './Components/RightContainer'
import Buttons from './Components/Buttons'
import { data } from './data'

const App = () => {
    const [leftNames, setLeftNames] = useState(data)
    const [rightNames, setRightNames] = useState([])

    const onHandleRightClick = () => {
        const updatedLeftNames = leftNames.filter((ele) => {
            return ele.status !== true
        })
        setLeftNames(updatedLeftNames)

        const updatedRightNames = leftNames.filter((ele) => {
            return ele.status === true
        }).map((ele) => ele.status? {...ele, status: false} : ele)
        console.log('updatedRightNames:', updatedRightNames)
        setRightNames([...rightNames, ...updatedRightNames])
    }

    const onHandleLeftClick = () => {
        const updatedRightName = rightNames.filter((ele) => {
            return ele.status !== true
        })

        const updatedLeftNames = rightNames.filter((ele) => {
            return ele.status === true
        }).map((ele) => ele.status ? {...ele, status: false} : ele)
        setLeftNames([...leftNames, ...updatedLeftNames])
        setRightNames(updatedRightName)
    }

    console.log('leftNames:', leftNames)
    console.log('rightNames:', rightNames)

    return(
        <div className="app">
            <h3>Transfer List</h3>
            <div className='container'>
            
            <LeftContainer 
            leftNames={leftNames} 
            setLeftNames={setLeftNames} 
            rightNames={rightNames} 
            setRightNames={setRightNames}/>
            
            <RightCointainer rightNames={rightNames} setRightNames={setRightNames}/>
            </div>
            
            <Buttons onHandleRightClick={onHandleRightClick} onHandleLeftClick={onHandleLeftClick}/>
        </div>
    )
}

export default App