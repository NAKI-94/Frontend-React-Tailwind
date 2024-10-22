import { useNavigate } from "react-router-dom"



export function Card({crud}) {

  const navigate =useNavigate();

  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
    onClick={()=>{
      navigate(`/crud/${crud.id}`)
    }}> 
    <h2 className="font-bold uppercase">{crud.Nom_Product}</h2>
    
    </div>
    
  )
}

