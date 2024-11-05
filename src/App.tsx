import { Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/mainLayout';
import Home from '../src/components/Home/home.component'; // Tu componente Home existente

function App() {
  return (
    <Routes>
      {/* Rutas públicas con MainLayout */}
      <Route path="/" element={
        <MainLayout>
          <Home />
        </MainLayout>
      } />

      <Route path="/nosotros" element={
        <MainLayout>
          <div>Página de Contacto (próximamente)</div>
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