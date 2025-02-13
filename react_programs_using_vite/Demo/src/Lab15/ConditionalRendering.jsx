function Demo1(){
    return <Demo2 msg = {false} />
}

function Demo2(props){
    return props.msg?(<h1>Msg Is True</h1>):(<h1>Msg Is False</h1>)
}

export default Demo1