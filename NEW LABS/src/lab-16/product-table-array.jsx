import React from "react";

let product=[
    {name:"product",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Laptop",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Mobile",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Mobile",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
]

function ProductTable(){
    return(
        <>
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Rem</th>
                        <th>Camera Quality</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((pro)=>{
                        return(
                        <tr>
                            <td className="table-primary">{pro.name}</td>
                            <td className="table-secondary">{pro.price}</td>
                            <td className="table-success">{pro.color}</td>
                            <td className="table-danger">{pro.rem}</td>
                            <td className="table-warning">{pro.camera_quality}</td>
                        </tr>  
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default ProductTable