import { Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import {
  Destination,
  Home,
  Login,
  New,
  Transaction,
  Category,
  User,
  DestinationDetail,
  AddDestination,
} from "./pages";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<User />} />
            {/* <Route path=":userId" element={<Single />} /> */}
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="destinations">
            <Route index element={<Destination />} />
            <Route path=":destinationId" element={<DestinationDetail />} />
            <Route
              path="add"
              element={<AddDestination />}
              // element={<New inputs={productInputs} title="Add New Destination" />}
            />
          </Route>
          <Route path="transactions">
            <Route index element={<Transaction />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
          <Route path="categories">
            <Route index element={<Category />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
