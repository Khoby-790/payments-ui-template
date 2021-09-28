import Admin from "./layouts/Admin/Admin";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Admin} />
    </BrowserRouter>
  );
}

export default App;
