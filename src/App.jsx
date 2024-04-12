import Header from "./components/header";
import BestProducts from "./components/bestProducts";
import ProductsInSelling from './components/productsInSelling';
import ProductInSelling from "./components/productsInSelling";

function App() {
  return (
    <main>
      <Header/>
      <BestProducts/>
      <ProductInSelling/>
    </main>
  );
}

export default App;