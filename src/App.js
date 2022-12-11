import './App.css';
import AddressBook from './components/AddressBook.js/AddressBook';
import { Toaster } from 'react-hot-toast';
import GetAddressData from './components/GetAddressData/GetAddressData';

function App() {
  return (
    <div className="App">
      <AddressBook></AddressBook>
      {/* <GetAddressData></GetAddressData> */}
      <Toaster />
    </div>
  );
}

export default App;
