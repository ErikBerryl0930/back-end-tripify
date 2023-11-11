export const destinationColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "destination_name",
    headerName: "Destination Name",
    width: 300,
    height: "100%",
    renderCell: (params) => {
      return (
        <div className="cellWithImgDes">
          <img className="cellImgDes" src={params.row.picture} alt="avatar" />
          {params.row.destination_name}
        </div>
      );
    },
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "region",
    headerName: "Region",
    width: 200,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
  },
  {
    field: "transport_recomendation",
    headerName: "Transport Recommendation",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
];

//temporary data
export const destinationRows = [
  {
    id: 1,
    destination_name: "Snow",
    picture:
      "https://images.pexels.com/photos/18510514/pexels-photo-18510514/free-photo-of-a-close-up-of-apples-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    description: "Lorem ipsum dolor",
    region: "Jawa Timur",
    city: "malang",
    transport_recomendation: "bus",
    price: 35,
  },
];
