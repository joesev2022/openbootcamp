import './App.css';
import ContactoListComponent from './components/container/contacto_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Componente del listado de contactos */}
        <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
