import { Table } from "./components/users/Table";
import { Route, Routes} from "react-router-dom";
import { ShowDetails } from "./components/users/ShowDetails";
function App() {
    return(<>
    <Routes>
      <Route path="/" exact element={<Table/>}/>
      <Route path="/userprofile" exact element={<ShowDetails/>}/>
      </Routes>
      </>
    )
}

export default App;
