function Options(props){
    return(
        <select className="form-select mt-3" id="year">
            {props.array.map(
                (item)=>(<option>{item}</option>)
            )}
        </select>        
    )
}

export default Options