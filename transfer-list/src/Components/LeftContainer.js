
const LeftContainer = ({leftNames, setLeftNames, rightNames, setRightNames}) => {
    const handleLeftNames = (index) => {
      const updatedLeftNames = leftNames.map((ele, ind) => {
        return ind === index ? { ...ele, status: !ele.status } : ele;
      });
      setLeftNames(updatedLeftNames);
    };

    return (
        <div className="leftContainer">
            {leftNames.map((element, index) => {
                return(
                    <div key={index} className = {element.status?"selectedNames":"name"}
                     onClick={() => {handleLeftNames(index)}}>{element.item}</div>
                )
            })}
        </div>
    )
}

export default LeftContainer