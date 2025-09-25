import { Route , Routes } from 'react-router'

import HomePage from './pages/HomePage.jsx'
import CreateNote from './pages/CreateNote.jsx'
import NoteDetailPage from './pages/NoteDetailPage.jsx'

const App = () => {
return (
  <div className="relative h-full w-full">
    <div
      className="
        absolute inset-0 -z-10 h-full w-full
        [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#8b5cf640_100%,#ec489940_100%)]
        backdrop-blur-sm
      "
    />


    {/* Routes */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
  </div>
);

}

export default App