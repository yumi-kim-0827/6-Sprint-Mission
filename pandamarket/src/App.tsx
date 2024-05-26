import { Routes, Route, BrowserRouter } from 'react-router-dom'
import {
  AddItem,
  Items,
  ItemsDetail,
  Main,
  Signin,
  Signup,
} from './pages/index.ts'
import Layout from './pages/Layout.tsx'

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="items">
              <Route index element={<Items />} />
              <Route path=":id" element={<ItemsDetail />} />
            </Route>
            <Route path="additem" element={<AddItem />} />
          </Route>
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
