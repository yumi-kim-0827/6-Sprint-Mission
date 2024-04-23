import { Header, Footer } from './components'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { AddItem, Items, ItemsDetail, Main } from './pages'


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/items" element={<Items />} />
          <Route path="/items/:id" element={<ItemsDetail />} />

          <Route path="/additem" element={<AddItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
