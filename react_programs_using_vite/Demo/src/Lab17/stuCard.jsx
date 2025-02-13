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

function StuCard() {
    return (
        <>
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
        </>
    )
}

export default StuCard