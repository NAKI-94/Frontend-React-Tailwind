import axios from'axios';



//crear la instancia de la url para reutilizarla
const UrlApi = axios.create({
    baseURL : 'http://localhost:8000/crud/api/v1/crud/'
})

export const GetAll =()=>{
 return UrlApi.get ('/')

}

export const getProduct = (id)=>{
    return UrlApi.get(`/${id}/`);
}
export const createProduct =(crud) => {
   return UrlApi.post ('/', crud) ;
}


export const deleteProduct = (id)=>{
    return UrlApi.delete(`/${id}/`);
}
export const updateProduct = (id, crud)=>{
    return UrlApi.put(`/${id}/`, crud);
}