import "./App.scss";
import Navigation from "./Componentes/Navigation";
import LeftSidebar from "./Componentes/LeftSidebar";
import RigthSidebar from "./Componentes/RigthSidebar";
import Content from "./Componentes/Content";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="main-container">
        <LeftSidebar />
        <Content />
        <RigthSidebar />
      </main>
    </div>
  );
}

export default App;
