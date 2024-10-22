import {useForm} from 'react-hook-form';
import { createProduct, deleteProduct , updateProduct , getProduct } from '../api/crud.api';  
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {toast} from 'react-hot-toast'

export function CrudForm() {
 
  const {register, handleSubmit, formState: { errors },setValue} = useForm();
  const navigate = useNavigate();
  const params = useParams();
  

  const onSubmit = handleSubmit(async (data) => {
   if (params.id){
    //actualizar
    await updateProduct(params.id, data);
    toast.success('Tarea Actualizada',{
      style:{
        background: "#101010",
        color : "#fff" 
      }
    })
    
   }else{
    // crear tarea
    await createProduct(data);
    // cuando cree el producto indique el aviso
    toast.success('Tarea Creada',{
      style:{
        background: "#101010",
        color : "#fff" 
      }
    })
   }

   navigate("/crud");
  });

  useEffect(()=>{
    async function loadProduct (){
      if(params.id){
        
       const res =await getProduct(params.id);
       console.log (res)
       setValue('Nom_Product', res.data.Nom_Product);
       
      } 
    }
    loadProduct ()
  },[])
  return (
    <div className='max-w-xl mx-auto'>
      <h1 className="font-bold tex-3x mb-4">Create Form</h1>

      <form onSubmit={onSubmit}>
        <input 
          className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 '
          type="text" 
          placeholder="Nombre del Producto" 
          {...register('Nom_Product', { required: true })} 
        />
        {errors.Nom_Product && <span>Este Campo es Requerido</span>}
        <button
         className="bg-indigo-500 p-3 rounded-lg block w-full mb-3">Guardar</button>
      </form>
    
      {params.id && (
        <div className='flex justify-end'>
        <button 
        className="bg-red-500 px-3 py-2 rounded-lg"
          onClick={async () => {
            //eliminar el producto
            const accept = window.confirm('¿Estás seguro de eliminar?');
            if (accept) {

              await deleteProduct(params.id);
              navigate('/crud');
              toast.success('Tarea Eliminada',{
                style:{
                  background: "#101010",
                  color : "#fff" 
                }
              })
            }
          }}
        >
          Eliminar
        </button>
        </div>  
      )}
    </div>
  );
}
