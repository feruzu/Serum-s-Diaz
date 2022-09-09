import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer  from './components/ItemListContainer/ItemListContainer';







function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      <NavBar />
      </header>
      
      <ItemListContainer greeting="Bienvenidos a la Web" />
    </div>
  );
}

export default App;
