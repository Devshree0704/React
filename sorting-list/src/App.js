import { useEffect, useState } from "react"

const App = () => {

    const [users, setUsers] = useState([])

    const fetchData = async () => {
        const getApi = await fetch('https://jsonplaceholder.typicode.com/users')

        const getData = await getApi.json()

        console.log(getData)
        const names = getData.map((element) => element.name)
        console.log(names)
        setUsers(names)
    }


    useEffect(() => {
        fetchData()
    }, [])

    const handleShuffle = () => {
        const afterShuffle = users.sort(() => Math.random() -0.5)
        console.log('AfterShuffle:', afterShuffle)
        setUsers([...afterShuffle])
    }

    const handleSort = () => {
        const afterSort = users.sort()
        console.log('afterSort:', afterSort)
        setUsers([...afterSort])
    }

    return(
        <div className="app">
            <h3>Sorting Users List</h3>
            {users.map((element, index) => {
                return(
                    <li key={index}>{element}</li>
                )
            })}

            <div className="buttons">
                <button className="sort" onClick={handleSort}>Sort</button>
                <button className="shuffle" onClick={handleShuffle}>Shuffle</button>
            </div>
        </div>
    )
}

export default App