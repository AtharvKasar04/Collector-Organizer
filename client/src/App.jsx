import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import RecentCollections from './components/RecentCollections';
import Collection from './components/Collection';
import EditItem from './components/EditItem';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/recent-collections" element={<RecentCollections />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/edit-item" element={<EditItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
