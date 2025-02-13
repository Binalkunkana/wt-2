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

function ProTable() {
    return (
        <>
            <div className='mx-5 mt-5'>
                <table className="table table-striped table-hover table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Sku</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pro.map((data, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <img
                                            src={data.image}
                                            alt={data.name}
                                            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                                        />
                                    </td>
                                    <td>{data.name}</td>
                                    <td>{data.category}</td>
                                    <td>{data.price}</td>
                                    <td>{data.sku}</td>
                                    <td>{data.stock}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProTable