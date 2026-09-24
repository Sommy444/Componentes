export default function Videojuego({datos}){

  return (
    <div className="card card--videojuego">
      <h2>{datos.nombre}</h2>
      <h3>{datos.descripcion}</h3>
      <img src={datos.foto} alt={datos.nombre} />
    </div>
  );
}