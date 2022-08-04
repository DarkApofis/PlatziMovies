import { Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Details from './pages/Details'
import Home from './pages/Home'
import Search from './pages/Search'
import Trends from './pages/Trends'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trends' element={<Trends/>} />
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/movie/:id' element={<Details/>}/>
      <Route path='/search' element={<Search/>} /> 
      <Route path='*' element={<h1>Ups</h1>}/>
    </Routes>
  )
}

export default App
