import "./App.css";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  const greeting = "Bienvenidos a mi vivero";
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje={greeting} />
    </>
  );
}

export default App;
