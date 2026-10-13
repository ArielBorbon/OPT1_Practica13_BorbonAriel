import { useState } from 'react';
import './App.css';
import { Catalogo } from './Catalogo';
import { productos } from './datos';
import { Encabezado } from './Encabezado';
import { Layout } from './Layout';
import { PiePagina } from './PiePagina';
import { Filtros } from './Filtros';

const categorias = ["todas", ...new Set(productos.map(producto => producto.categoria))];

function App() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  
  const [carrito, setCarrito] = useState<any[]>([]);

  const productosVisibles = categoriaActiva === "todas" 
    ? productos 
    : productos.filter(producto => producto.categoria === categoriaActiva);

  const totalCarrito = carrito.reduce((total, producto) => total + producto.precio, 0);

  const manejarAgregarAlCarrito = (producto: any) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <Layout 
      encabezado={<Encabezado piezas={carrito.length}/>} 
      
      pie={<PiePagina piezas={carrito.length} total={totalCarrito}/>}
    >
      <section className="portada">
        <h1> Catálogo de Temporada</h1>
        <Filtros 
          categorias={categorias} 
          activa={categoriaActiva} 
          onCambiar={setCategoriaActiva} 
        />
        <Catalogo 
          productos={productosVisibles} 
          onAgregar={manejarAgregarAlCarrito} 
        />
       </section>    
    </Layout>
  );
}

export default App;