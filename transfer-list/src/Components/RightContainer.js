const RightCointainer = ({rightNames, setRightNames}) => {

    const handleRightNames = (index) => {
        const updatedRightName = rightNames.map((ele, ind) => {
            return index === ind ? {...ele, status: !ele.status} : ele
        })
        setRightNames([...updatedRightName])
    }

    return(
        <div className="rightContainer">
            {rightNames.map((element, index) => {
                return(
                    <div className={element.status?"selectedNames":"name"} key={index} onClick={() => {handleRightNames(index)}}>{element.item}</div>
                )
            })}
        </div>
        
    )
}

export default RightCointainer