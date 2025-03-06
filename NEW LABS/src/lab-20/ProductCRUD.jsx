import { useState } from "react"

function ProductCrud() {

    const [product, setProduct] = useState([
        { id: 0, name: "Product 1", price: 1300 },
        { id: 1, name: "Product 2", price: 1900 },
        { id: 2, name: "Product 3", price: 9000 },
        { id: 3, name: "Product 4", price: 9300 }
    ])

    const [newproduct, setNewProduct] = useState({ name: "", price: "" })
    const [editid,setEditid] = useState()

    const deleteproduct = (id) => {
        setProduct(product.filter(item => item.id !== id))
    }

    const handleAdd= () =>{
        if(newproduct.name !== "" && newproduct.price !== ""){
            setProduct([...product,{id :product.length+1, ...newproduct}])
            setNewProduct({name:"",price:""})
        }
    }


    const handledit= (id) =>{
        const producttoedit = product.find((product)=>{product.id === id})
        setEditid(id)
        setNewProduct(producttoedit)
    }

    const handleinputchange = (e)=>{
        setNewProduct({...newproduct,[e.target.name]:e.target.value})
    }

    const handleupdate = () =>{
        if(editid !== null){
            setProduct(product.map((product)=>{
                product.id === editid ? {...product,...newproduct} : product
            }))

            setEditid(null)
        }
        else{
            setProduct([...product,{id : Date.now(),...newproduct}])
        }
        setNewProduct({name:"",price:""})
    }

    return (
        <>
            <ol className="list-group list-group-numbered">
                <input type="text"  value={newproduct.name} onChange={handleinputchange}/>
                <input type="text" value={newproduct.price} onChange={handleinputchange} />
                {product.map((pro) => {
                    return (
                        
                        <li className="list-group-item">
                            <span>{pro.name} - Ru.{pro.price}</span>
                            <button onClick={() => {
                                deleteproduct(pro.id)
                            }}>DELETE</button>

                            <button onClick={() => {
                                handleAdd
                            }}>ADD</button>

                            <button onClick={() => {
                                // setNewProduct({name:pro.name,price:pro.price})
                                // setEditid(pro.id)

                                handleupdate()
                            }}>EDIT</button>
                        </li>
                    )
                })}
            </ol>
        </>
    )
}



export default ProductCrud