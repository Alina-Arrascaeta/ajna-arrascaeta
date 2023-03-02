import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (

<div>
  <NavBar />
  <ItemListContainer greeting={"Marca de biocosmética natural y boutique, de alta gama, que diseña y elabora productos que realzan la belleza interior"} />
</div>

  );


}

export default App;
