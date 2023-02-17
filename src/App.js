import './App.css';
import Modal from './components/modal/Modal';
import DarkMode from './components/darkMode/DarkMode';
import Water from './components/water/Water';
import Todolist from './components/todolist-1/Todolist';
import AddItem from './components/addItem/AddItem';
import PhoneBook from './components/phoneBook/PhoneBook';

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}
      {/* <DarkMode /> */}
      {/* <Water /> */}
      <Todolist />
      <AddItem />
      <PhoneBook />
    </div>
  );
}

export default App;
