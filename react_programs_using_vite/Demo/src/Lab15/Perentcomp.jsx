function Perent(){
    return <Child msg = "PROPS" />
}

function Child(props){
    return <h1>{props.msg}</h1>
}

export default Perent