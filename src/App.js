import { RouterProvider } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './App.css';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        <Toaster/>
    </div>
  );
}

export default App;
