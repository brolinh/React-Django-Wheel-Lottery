import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/header';
import SignIn from './pages/login';
import Dashboard from './pages/dashboard';
import SignUp from './pages/signup';
import Score from './pages/score';
import Setting from './pages/setting';
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/score' element={<Score />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;