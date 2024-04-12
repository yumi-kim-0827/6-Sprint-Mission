import Home from "./pages/Home";
import Items from "./pages/Items";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/items" element={<Items />}></Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
