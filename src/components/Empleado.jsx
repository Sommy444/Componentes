export default function Empleado({datos}){

  return (
    <div className="card card--empleado">
      <h2>{datos.nombre}</h2>
      <h3>{datos.carrera}</h3>
      <img src={datos.foto} alt={datos.nombre} />
    </div>
  );
}