//import logo from './logo.svg';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import ShoppingList from './components/ShoppingList';
import './App.css';
import { Container } from 'reactstrap';
// function App() {
//   return (
//     <Provider store={store}>
//     <div className="App">
//      <AppNavbar />
//      <Container>
//      <ItemModal/>
//      <ShoppingList />
//      </Container>
//     </div>
//     </Provider>
//   );
// }

class App extends Component{
  componentDiMount(){
    store.dispatch(loadUser());
  }
  render(){
    return (
      <Provider store={store}>
      <div className="App">
      <AppNavbar />
      <Container>
      <ItemModal/>
      <ShoppingList />
      </Container>
      </div>
      </Provider>
    );
  }
}
export default App;
