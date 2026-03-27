import HomePage from "./pages/HomePage"
import CollectionPage from "./pages/CollectionPage"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='min-h-screen bg-[var(--bg-main)] text-white'>
      <div className='min-h-screen'>
        <Navbar />
        <main className='mx-auto w-full max-w-6xl px-4 py-6 sm:px-6'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/collection' element={<CollectionPage />} />
          </Routes>
        </main>
        <ToastContainer
          position='bottom-right'
          autoClose={2200}
          hideProgressBar
          newestOnTop
          closeButton={false}
          theme='dark'
          toastClassName='!rounded-md !bg-gray-800 !px-3 !py-2 !text-sm !text-white'
        />
      </div>
    </div>
  )
}

export default App
