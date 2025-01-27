import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import RecentCollections from './components/RecentCollections'
import Collection from './components/Collection'
import EditItem from './components/EditItem'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/recent-collections' element={<RecentCollections />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/edit-item' element={<EditItem />} />
          {/* <Route path='/admin' element={<AdminPanel />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
