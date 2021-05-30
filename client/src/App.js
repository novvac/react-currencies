import AppLayout from './layouts/AppLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <AppLayout />
    </>
  );
}

export default App;
