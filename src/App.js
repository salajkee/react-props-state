import './App.css';
import Modal from './components/modal/Modal';
import DarkMode from './components/darkMode/DarkMode';
import Water from './components/water/Water';
import Todolist from './components/todolist-1/Todolist';
import AddItem from './components/addItem/AddItem';
import PhoneBook from './components/phoneBook/PhoneBook';
import Tasklist from './components/todolist-2/Tasklist';

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}
      {/* <DarkMode /> */}
      {/* <Water /> */}
      <Todolist />
      <AddItem />
      <PhoneBook />
      <Tasklist />
    </div>
  );
}

export default App;
