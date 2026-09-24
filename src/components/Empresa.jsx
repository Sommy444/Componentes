export default function Empresa({datos}){

  return (
    <div className="card card--empresa">
      <h2>{datos.nombre}</h2>
      <h3>{datos.producto}</h3>
      <img src={datos.foto} alt={datos.nombre} />
    </div>
  );
}