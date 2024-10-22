import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import {CrudLists} from './pages/CrudLists'
import { CrudForm } from './pages/CrudForm'
import { Navigation } from './components/Navigation'
import {Toaster} from 'react-hot-toast'


function App(){
  return (
    

    <BrowserRouter>
      <div className='container mx-auto' >
      <Navigation></Navigation>

<Routes>
<Route path='/' element={<Navigate to ='/crud'/>} />
  <Route path='/crud' element={<CrudLists/>} />
  <Route path='/crud-create' element={<CrudForm/>} />
  <Route path='/crud/:id' element={<CrudForm/>} />
</Routes>     

<Toaster></Toaster>
      </div>
    </BrowserRouter>
  )
}
export default App