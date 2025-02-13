const fac = [
    {
        name: "Dr. John Smith",
        department: "Computer Science",
        designation: "Professor",
        email: "john.smith@example.com",
        phone: "123-456-7890",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Emily Johnson",
        department: "Mathematics",
        designation: "Associate Professor",
        email: "emily.johnson@example.com",
        phone: "987-654-3210",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Robert Williams",
        department: "Physics",
        designation: "Assistant Professor",
        email: "robert.williams@example.com",
        phone: "456-789-1230",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Sarah Brown",
        department: "Chemistry",
        designation: "Professor",
        email: "sarah.brown@example.com",
        phone: "789-123-4560",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Michael Davis",
        department: "Biology",
        designation: "Lecturer",
        email: "michael.davis@example.com",
        phone: "321-654-9870",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Laura Wilson",
        department: "English",
        designation: "Associate Professor",
        email: "laura.wilson@example.com",
        phone: "654-987-3210",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. James Taylor",
        department: "History",
        designation: "Assistant Professor",
        email: "james.taylor@example.com",
        phone: "147-258-3690",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Anna Anderson",
        department: "Economics",
        designation: "Professor",
        email: "anna.anderson@example.com",
        phone: "369-258-1470",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. William Thomas",
        department: "Political Science",
        designation: "Lecturer",
        email: "william.thomas@example.com",
        phone: "258-147-3690",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    },
    {
        name: "Dr. Olivia Martinez",
        department: "Psychology",
        designation: "Assistant Professor",
        email: "olivia.martinez@example.com",
        phone: "741-852-9630",
        image: "https://cdn.pixabay.com/photo/2023/11/28/13/52/ai-generated-8417525_640.jpg"
    }
]

const stu = [
    {
        name: "Alice Johnson",
        department: "Computer Science",
        year: "Sophomore",
        email: "alice.johnson@example.com",
        phone: "123-456-7890",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Michael Smith",
        department: "Mathematics",
        year: "Junior",
        email: "michael.smith@example.com",
        phone: "987-654-3210",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Sophia Williams",
        department: "Physics",
        year: "Freshman",
        email: "sophia.williams@example.com",
        phone: "456-789-1230",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Daniel Brown",
        department: "Chemistry",
        year: "Senior",
        email: "daniel.brown@example.com",
        phone: "789-123-4560",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Emma Davis",
        department: "Biology",
        year: "Junior",
        email: "emma.davis@example.com",
        phone: "321-654-9870",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Liam Wilson",
        department: "English",
        year: "Sophomore",
        email: "liam.wilson@example.com",
        phone: "654-987-3210",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Olivia Taylor",
        department: "History",
        year: "Freshman",
        email: "olivia.taylor@example.com",
        phone: "147-258-3690",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Noah Anderson",
        department: "Economics",
        year: "Senior",
        email: "noah.anderson@example.com",
        phone: "369-258-1470",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Ava Thomas",
        department: "Political Science",
        year: "Junior",
        email: "ava.thomas@example.com",
        phone: "258-147-3690",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    },
    {
        name: "Ethan Martinez",
        department: "Psychology",
        year: "Sophomore",
        email: "ethan.martinez@example.com",
        phone: "741-852-9630",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/college-student-illustration-download-in-svg-png-gif-file-formats--pretty-logo-bag-young-men-pack-people-illustrations-2294268.png"
    }
];

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





function FacultyOBJ() {
    return (
        <>
            <div className='mx-5 row'>
                {
                    fac.map((data, index) => {
                        return (
                            <>
                                <div class="col-3 mt-3">
                                    <div class="card border border-1 border-black" style={{ width: "18rem" }}>
                                        <img src={data.image} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <p class="card-text">{data.name}</p>
                                            <p class="card-text">{data.email}</p>
                                            <p class="card-text">{data.department}</p>
                                            <p class="card-text">{data.designation}</p>
                                            <p class="card-text">{data.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='mx-5 row'>
                {
                    stu.map((data, index) => {
                        return (
                            <>
                                <div class="col-3 mt-3">
                                    <div class="card border border-1 border-black" style={{ width: "18rem" }}>
                                        <img src={data.image} class="card-img-top" alt="..." />
                                        <div class="card-body text-center">
                                            <p class="card-text">{data.name}</p>
                                            <p class="card-text">{data.email}</p>
                                            <p class="card-text">{data.department}</p>
                                            <p class="card-text">{data.year}</p>
                                            <p class="card-text">{data.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
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
            <div className='mx-5 mt-5'>
                <table className="table table-striped table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            fac.map((data, index) => (
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
                                    <td>{data.email}</td>
                                    <td>{data.department}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='mx-5 mt-5'>
                <table className="table table-hover table-bordered text-center">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Department</th>
                            <th>Year</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stu.map((data, index) => (
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
                                    <td>{data.email}</td>
                                    <td>{data.department}</td>
                                    <td>{data.year}</td>
                                    <td>{data.phone}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
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

export default FacultyOBJ