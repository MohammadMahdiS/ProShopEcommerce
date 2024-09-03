import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';

function App() {
  return (
    <Router>
    <Header />
      <main className="py-5">
        <Container>
        <Routes>
          <Route path="/"  element={<Home />} exact/> 
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id"  element={<ProductDetail />} /> 
    </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
