import { useState } from "react"

function ProductCrud() {
    const product = () => {
        const [product, setProduct] = useState([
            { id: 0, name: "Product 1", price: 1300 },
            { id: 1, name: "Product 2", price: 1900 },
            { id: 2, name: "Product 3", price: 9000 },
            { id: 3, name: "Product 4", price: 9300 }
        ])
    
        const deleteproduct = (id) => {
            setProduct(product.filter(item => item.id !== id))
        }
    
        return (
            <>
                <ol class="list-group list-group-numbered">
                    {product.map((pro) => {
                        <li class="list-group-item">
                            <span>{product.name} - Ru.{product.price}</span>
                            <button onClick={()=>{
                                deleteproduct(product.id)
                            }}>DELETE</button>
                        </li>
                    })}
                    {/* <li class="list-group-item">Cras justo odio</li> */}
                </ol>
            </>
        )
    }
    
}

export default ProductCrud