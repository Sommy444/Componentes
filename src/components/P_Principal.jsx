export default function P_Principal({datos}){

  return (
    <div className="card card--p-principal">
      <h2>{datos.nombre}</h2>
      <h3>{datos.juego}</h3>
      <img src={datos.foto} alt={datos.nombre} />
    </div>
  );
}