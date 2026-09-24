export default function Pelicula({datos}){

  return (
    <div className="card card--pelicula">
      <h2>{datos.nombre}</h2>
      <h3>{datos.año}</h3>
      <img src={datos.foto} alt={datos.nombre} />
    </div>
  );
}