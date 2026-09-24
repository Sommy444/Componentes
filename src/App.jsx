import './App.css';

import Empleado from './components/Empleado';
const e1 = {
  nombre: "Juan Perez",
  carrera: "Ingeniería en Sistemas",
  foto: "https://i.pinimg.com/736x/5d/a2/1a/5da21afaffdd3a6aa9b7515aed7b73c1.jpg"
}
 const e2 = {
  nombre: "Maria Lopez",
  carrera: "Licenciatura en Administración",
  foto: "https://i.pinimg.com/736x/08/4c/5b/084c5b34aaaf6076725d9c751b8df226.jpg"
}
 const e3 = {
  nombre: "Carlos Sanchez",
  carrera: "Ingeniería Industrial",
  foto: "https://i.pinimg.com/736x/6c/c7/ff/6cc7ffbc03a7cf4a57741c91a4b67c38.jpg"
}

import Auto from './components/Auto';
const a1 = {
  modelo: "Mustang",
  marca: "Ford",
  foto: "https://i.pinimg.com/736x/1f/3d/ce/1f3dce04b7a23527ec7cd0a8aa7828f3.jpg"
}
 const a2 = {
  modelo: "Civic",
  marca: "Honda",
  foto: "https://i.pinimg.com/736x/4b/9c/5e/4b9c5e171737e05ea15c0a6166bcc08c.jpg"
}
 const a3 = {
  modelo: "Camaro",
  marca: "Chevrolet",
  foto: "https://i.pinimg.com/736x/9a/c3/42/9ac3428eaf4bfa8e42e887532ca8e42e.jpg"
}

import Empresa from './components/Empresa';
const em1 = {
  nombre: "Coca-cola",
  producto: "Refresco",
  foto: "https://i.pinimg.com/1200x/a5/89/c8/a589c8077c7e4735b767a9ffc7ef6c23.jpg"
}
const em2 = {
  nombre: "Labello",
  producto: "Cuidado labial",
  foto: "https://i.pinimg.com/736x/00/d5/9b/00d59b5847ebebe32bd4f3e887939ba6.jpg"
}
const em3 = {
  nombre: "Bissu",
  producto: "Maquillaje",
  foto: "https://i.pinimg.com/736x/3b/3b/52/3b3b52145e97ab118f19664e88113244.jpg"
}

import Pelicula from './components/Pelicula';
const p1 = {
  nombre: "Perfect Blue",
  año: "1997",
  foto: "https://i.pinimg.com/736x/a7/62/f6/a762f61b3b17e036f72c56b226d58c15.jpg"
}
const p2 = {
  nombre: "Ponyo",
  año: "2008",
  foto: "https://i.pinimg.com/736x/a3/d4/69/a3d46987b6cb7d6b8d12cfc7afa62542.jpg"
}
const p3 = {
  nombre: "Call me by your name",
  año: "2017",
  foto: "https://i.pinimg.com/1200x/65/c1/26/65c1267d7d85f0ed5653674543dc5752.jpg"
}

import Videojuego from './components/Videojuego';
const v1 = {
  nombre: "The Legend of Zelda: Breath of the Wild",
  descripcion: "Aventura y exploración en un mundo abierto",
  foto: "https://i.pinimg.com/1200x/31/59/2d/31592dd53c1d4976a8d5cadfd3fd07c5.jpg"
}
const v2 = {
  nombre: "God of War",
  descripcion: "Acción y mitología nórdica",
  foto: "https://i.pinimg.com/736x/fb/df/3c/fbdf3cbc2980749091d52751ffabb7b7.jpg"
}
const v3 = {
  nombre: "Red Dead Redemption 2",
  descripcion: "Aventura en el Lejano Oeste",
  foto: "https://i.pinimg.com/736x/d1/13/9b/d1139b1ee12965f315652a3eb970aa28.jpg"
}

import P_Principal from './components/P_Principal';
const pp1 = {
  nombre: "Steve",
  juego: "Minecraft",
  foto: "https://i.pinimg.com/736x/bd/cd/99/bdcd99843a56de92d94620d37c1d40e7.jpg"
}
const pp2 = {
  nombre: "Hello Kitty",
  juego: "Hello kitty and friends",
  foto: "https://i.pinimg.com/736x/fa/08/92/fa089266e77f7099f3fd1dc4136961df.jpg"
}
const pp3 = {
  nombre: "Ayano",
  juego: "Yandere Simulator",
  foto: "https://i.pinimg.com/736x/c1/13/a2/c113a2baf44faa93a6670ae65c92bf0f.jpg"
}

function App() {
  return (
    <div className="app">
      <h1>#1.1 TAREA: Componentes (Componentes, Módulos, JSX y Props)</h1>
      <hr />
      <div className="app__row">
        <Empleado datos={e1}/>
        <Empleado datos={e2}/>
        <Empleado datos={e3}/>
      </div>
      <div className="app__row">
        <Auto datos={a1}/>
        <Auto datos={a2}/>
        <Auto datos={a3}/>
      </div>
      <div className="app__row">
        <Empresa datos={em1}/>
        <Empresa datos={em2}/>
        <Empresa datos={em3}/>
      </div>
      <hr />
      <div className="app__row">
        <Pelicula datos={p1}/>
        <Pelicula datos={p2}/>
        <Pelicula datos={p3}/>
      </div>
      <div className="app__row">
        <Videojuego datos={v1}/>
        <Videojuego datos={v2}/>
        <Videojuego datos={v3}/>
      </div>
      <div className="app__row">
        <P_Principal datos={pp1}/>
        <P_Principal datos={pp2}/>
        <P_Principal datos={pp3}/>
      </div>
    </div>
  );
}

export default App;
