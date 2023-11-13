import { Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {
  Destination,
  Home,
  Layout,
  Login,
  Transaction,
  Category,
  User,
  DestinationDetail,
  AddDestination,
  AddCategory,
  EditCategory,
} from "./pages";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="users">
            <Route index element={<User />} />
          </Route>
          <Route path="destinations">
            <Route index element={<Destination />} />
            <Route path=":destinationId" element={<DestinationDetail />} />
            <Route path="add" element={<AddDestination />} />
          </Route>
          <Route path="transactions">
            <Route index element={<Transaction />} />
          </Route>
          <Route path="categories">
            <Route index element={<Category />} />
            <Route path="add" element={<AddCategory />} />
            <Route path="edit" element={<EditCategory />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
