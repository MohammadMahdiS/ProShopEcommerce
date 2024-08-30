import {Container} from 'react-bootstrap';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from './pages/Screen/HomeScreen';
import {Routes, Route} from 'react-router-dom'
import ProductScreen from './pages/Screen/ProductScreen';

function App() {
  return (
    <>
    <Header />
      <main className="py-5">
        <Container>
        <Routes>
          <Route path="/"  element={<HomeScreen />} exact/> 
          <Route path="/product/:id"  element={<ProductScreen />} /> 
    </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
