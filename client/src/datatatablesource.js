export const userColumns = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "user", headerName: "User", width: 260, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img src={params.row.img} alt="avatar" className="cellImg" />
                    {params.row.username}
                </div>

            )
        }
    },
    { field: "email", headerName: "Email", width: 260 },
    { field: "age", headerName: "Age", width: 130 },
    {
        field: "status", headerName: "Status", width: 190,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },

]

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35
    },
    {
        id: 2,
        username: "Jamie Laminister",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "passive",
        email: "2snow@gmail.com",
        age: 45
    },
    {
        id: 3,
        username: "Kamal",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "active",
        email: "kalaml@gmail.com",
        age: 18
    },
    {
        id: 4,
        username: "Nimal",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "active",
        email: "nimal@gmail.com",
        age: 75
    },
    {
        id: 5,
        username: "Tesla",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "active",
        email: "tesla@gmail.com",
        age: 15
    },
    {
        id: 6,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
    {
        id: 7,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
    {
        id: 8,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
    {
        id: 9,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
    {
        id: 10,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
    {
        id: 11,
        username: "Thgarupathi",
        img: "https://images.pexels.com/photos/715546/pexels-photo-715546.jpeg?cs=srgb&dl=pexels-sebastian-voortman-715546.jpg&fm=jpg",
        status: "pending",
        email: "Thgarupathi@gmail.com",
        age: 45
    },
]