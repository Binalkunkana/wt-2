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


function StuTable() {
    return (
        <>
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
        </>
    )
}


export default StuTable