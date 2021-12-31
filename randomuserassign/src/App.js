import { TableData } from "./components/users/TableData";
import { Route, Routes} from "react-router-dom";
import { ShowDetails } from "./components/users/ShowDetails";
function App() {
    return(<>
    <Routes>
      <Route path="/" exact element={<TableData/>}/>
      <Route path="/userprofile" exact element={<ShowDetails/>}/>
      </Routes>
      </>
    )
}

export default App;
