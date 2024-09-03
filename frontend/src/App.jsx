import Home from './pages/Home.jsx'
import AddDate from './pages/AddDate.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL = 'https://smart-bin-d25n.onrender.com/api'
axios.defaults.withCredentials = true

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigate to='/api' />} />
        <Route path='/api' element={<Home />} />
        <Route path='/api/add' element={ <AddDate /> } />
      </Routes>
    </>
  )
}

export default App