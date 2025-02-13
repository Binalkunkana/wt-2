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

function FacCard() {
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
        </>
    )
}

export default FacCard