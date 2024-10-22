import { useEffect, useState } from "react";
import { GetAll, deleteProduct } from "../api/crud.api"; // Asegúrate de importar deleteProduct
import { Card } from "./Card";
import { useNavigate, useParams } from "react-router-dom"; // Para redirigir al formulario de edición

export function List() {
  const [cruds, setCrud] = useState([]);
  const navigate = useNavigate(); // Hook para redirigir
  const params = useParams();
  console.log(params)

  useEffect(() => {
    async function LoadCrud() {
      const res = await GetAll();    // Llamada a la API para obtener todos los elementos
      setCrud(res.data); // Guardar los datos en el estado
    }
    LoadCrud();
  }, []);

 
  return (
    <div className="grid grid-cols-3">
      
      {cruds.map(crud => (
        <div key={crud.id}>
          <Card crud={crud}></Card>

       
            
        </div>
      ))}
    </div>
  );
}
