import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import { lazy, Suspense } from 'react';
// Lazy loading de componentes
const Home = lazy(() => import('../src/components/Home/home.component'));
const ProductDetail = lazy(() => import('./components/Producto/productDetallecomponent'));
const AboutUs = lazy(() => import('./components/Nosotros/nosotrosComponent'));
const ProductsPage = lazy(() => import('./components/Producto/productPage.component'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 border-[#8B6F4E] border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
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
            <ProductsPage/>
          </MainLayout>
        } />

        <Route path="*" element={
          <MainLayout>
            <div>Página no encontrada</div>
          </MainLayout>
        } />
      </Routes>
    </Suspense>
  );
}

export default App;