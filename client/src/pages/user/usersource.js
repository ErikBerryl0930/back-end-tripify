export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "fullname",
    headerName: "Name",
    width: 400,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.profile_image} alt="avatar" />
          {params.row.fullname}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 400,
  },
  {
    field: "username",
    headerName: "Username",
    width: 300,
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    fullname: "Snow",
    username: "snow123",
    profile_image:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
  },
];
