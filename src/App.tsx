import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import Home from '../src/components/Home/home.component';
import ProductDetail from './components/Producto/productDetallecomponent'
import AboutUs from './components/Nosotros/nosotrosComponent';
import ProductsPage from './components/Producto/productPage.component';

function App() {
  return (
    <Routes>
      {/* Rutas públicas con MainLayout */}
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />

      <Route path="/producto" element={
        <MainLayout>
          <ProductsPage/>
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