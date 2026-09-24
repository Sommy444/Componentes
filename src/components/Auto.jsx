export default function Auto({datos}){

  return (
    <div className="card card--auto">
      <h2>{datos.modelo}</h2>
      <h3>{datos.marca}</h3>
      <img src={datos.foto} alt={datos.modelo} />
    </div>
  );
}