import './App.css'
import { useEffect, useState } from 'react'

const App = () => {

    const [names, setNames] = useState([])
    const [filterdNames, setFilteredNames] = useState([])

    const fetchData = async () => {
        const getApi = await fetch('https://jsonplaceholder.typicode.com/users')

        const getData = await getApi.json()

        setNames(getData)
    }

    const handleInput = (event) => {
        const value = event.target.value

        console.log('value:', value)
        if(value==='') setFilteredNames([])

        const filteredNames = names.filter((element) =>{
            if(value){
                return element.name.toLowerCase().includes(value)
            }
            setFilteredNames([])
        })
        
        setFilteredNames(filteredNames)
        console.log(filteredNames)
    }

    useEffect(function(){
        fetchData()
    }, [filterdNames])


    return(
        <div className="app">
            <h3>Autocomplete-Searchbar</h3>
            <input type='text' onChange={handleInput}/>
            <div className='name-container'>
                {filterdNames.map((element) => {return(
                    <div className='name' key={element.id}>{element.name}</div>
                )
                })}
            </div>
        </div>
    )
}

export default App