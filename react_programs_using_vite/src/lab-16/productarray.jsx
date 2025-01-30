import React from "react";

let product=[
    {name:"product",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Laptop",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Mobile",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
    {name:"Mobile",price:100000,color:"Black",rem:"2GB",camera_quality:"Best"},
]

function ProductArray(){
    return(
        <div>
            {
                product.map((pro,index) => {
                    return(
                        <div class="card" style={{width:"300px",height:"200"}}>
                            <div class="card-body">
                                <h5 class="card-title">{index}-{pro.name}</h5>
                                <p class="card-text">Price-{pro.price}</p>
                                <p class="card-text">Color-{pro.color}</p>
                                <p class="card-text">Rem-{pro.rem}</p>
                                <p class="card-text">Product_Quality-{pro.camera_quality}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductArray