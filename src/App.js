import './App.css';
import AddressBook from './components/AddressBook.js/AddressBook';
import { Toaster } from 'react-hot-toast';
import GetAddressData from './components/GetAddressData/GetAddressData';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/Router/Router';

function App() {
  return (
    <div className="App">
      {/* <AddressBook></AddressBook>
      <GetAddressData></GetAddressData> */}
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
