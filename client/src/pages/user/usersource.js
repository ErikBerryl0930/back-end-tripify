export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    // field: "email",
    headerName: "Description",
    width: 230,
  },
  {
    // field: "email",
    headerName: "Region",
    width: 100,
  },
  {
    // field: "status",
    headerName: "City",
    width: 100,
  },
  {
    // field: "status",
    headerName: "Transport Recommendation",
    width: 100,
  },
  {
    // field: "age",
    headerName: "Price",
    width: 100,
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
];
