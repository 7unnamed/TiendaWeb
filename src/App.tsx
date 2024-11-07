import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import Home from '../src/components/Home/home.component';
import ProductDetail from './components/Producto/productDetallecomponent'
import AboutUs from './components/Nosotros/nosotrosComponent';

function App() {
  return (
    <Routes>
      {/* Rutas públicas con MainLayout */}
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />

      <Route path="/producto/:id" element={
        <MainLayout>
          <ProductDetail />
        </MainLayout>
      } />

      <Route path="/nosotros" element={
        <MainLayout>
          <AboutUs/>
        </MainLayout>
      } />

      <Route path="/productos" element={
        <MainLayout>
          <h3>Aun en desarrollo, vuelve pronto 😎👌</h3>
        </MainLayout>
      } />

      {/* Ruta 404 */}
      <Route path="*" element={
        <MainLayout>
          <div>Página no encontrada</div>
        </MainLayout>
      } />
    </Routes>
  );
}

export default App;