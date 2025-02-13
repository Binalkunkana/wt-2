const pro = [
    {
        name: "Wireless Headphones",
        category: "Electronics",
        price: 99.99,
        stock: 50,
        sku: "WH-12345",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Smartphone",
        category: "Electronics",
        price: 699.99,
        stock: 30,
        sku: "SP-98765",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Gaming Laptop",
        category: "Computers",
        price: 1299.99,
        stock: 20,
        sku: "GL-45678",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Bluetooth Speaker",
        category: "Audio",
        price: 49.99,
        stock: 100,
        sku: "BS-78901",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Smartwatch",
        category: "Wearables",
        price: 199.99,
        stock: 40,
        sku: "SW-85236",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "4K LED TV",
        category: "Home Entertainment",
        price: 899.99,
        stock: 25,
        sku: "TV-36985",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Mechanical Keyboard",
        category: "Accessories",
        price: 79.99,
        stock: 60,
        sku: "MK-65478",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "External Hard Drive",
        category: "Storage",
        price: 119.99,
        stock: 35,
        sku: "HD-74125",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Wireless Mouse",
        category: "Accessories",
        price: 29.99,
        stock: 80,
        sku: "WM-25896",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    },
    {
        name: "Coffee Maker",
        category: "Kitchen Appliances",
        price: 59.99,
        stock: 45,
        sku: "CM-96325",
        image: "https://img.freepik.com/premium-vector/set-different-cosmetics-tubes-bottles-jars-body-butter-lotion-creame-lipstick-collection-colorful-skincare-eco-beauty-products-white-with-leaves_106612-373.jpg?w=740"
    }
];


function ProCard() {
    return (
        <>
            <div className='mx-5 row'>
                {
                    pro.map((data, index) => {
                        return (
                            <>
                                <div class="col-3 mt-3">
                                    <div class="card border border-1 border-black" style={{ width: "18rem" }}>
                                        <img src={data.image} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <p class="card-text">{data.name}</p>
                                            <p class="card-text">{data.category}</p>
                                            <p class="card-text">{data.sku}</p>
                                            <p class="card-text">{data.stock}</p>
                                            <p class="card-text">{data.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProCard