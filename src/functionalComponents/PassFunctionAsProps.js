function PassFunctionAsProp(props) {
    
    return(
        <div>
            <h1>Pass Function As Prop Component</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}


export default PassFunctionAsProp;