import { useState } from 'react';
import './App.css'
import { Catalogo } from './catalogo';
import { productos } from './datos';
import { Encabezado } from './Encabezado';
import { Layout } from './Layout';
import { PiePagina } from './PiePagina';
import { Filtros } from './Filtros';

const categorias = ["todas", ...new Set(productos.map(producto => producto.categoria))];


function App() {
  //ESTADO # 1 depende del filtro
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

  const productosVisibles = categoriaActiva === "todas" ? productos : productos.filter(producto => producto.categoria === categoriaActiva);

  return (
    <Layout encabezado={<Encabezado piezas={0}/>} pie={<PiePagina piezas={0} total={0}/>}>
      <section className="portada">
        <h1> Catalogo de Temporada</h1>
        <Filtros categorias={categorias} activa={categoriaActiva} onCambiar={setCategoriaActiva} />
        <Catalogo productos={productosVisibles} onAgregar={producto => console.log('Producto agregado:', producto)}/>




       </section>    
    </Layout>


  );

}

export default App
