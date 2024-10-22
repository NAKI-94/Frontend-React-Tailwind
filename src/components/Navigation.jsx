import { Link } from "react-router-dom";


export function Navigation() {
  return (

    <div className="flex justify-between py-3"> 
        <Link to ='/'>
        <h1 className="font-bold tex-3x mb-4">CRUD</h1>
        </Link>
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">
        <Link to ='/crud-create'>CREATE NEW</Link>

        </button>

    </div>
  
  )
}

