import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import RecentCollections from './components/RecentCollections'
import Collection from './components/Collection'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/recent-collections' element={<RecentCollections />} />
          <Route path='/collection' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
