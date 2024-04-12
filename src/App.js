import Items from "./pages/Items";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Items />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
