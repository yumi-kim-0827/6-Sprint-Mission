import { QueryClient, QueryClientProvider } from "react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import AddItem from "./pages/AddItem";
import Home from "./pages/Home";
import Items from "./pages/Items";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/items" element={<Items />}></Route>
            <Route path="/additem" element={<AddItem />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
