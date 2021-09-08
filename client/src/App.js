import ContactList from './components/ContactList';
import { Route, Switch} from "react-router";
import './App.css';
import Add from './components/Add';

function App() {
  return (
    <div className="App">
      <h2>FIRST MERN APP</h2>
      <Switch>
        <Route path="/" component = {ContactList}/>
        <Route path={["/add", "/edit/:id"]} component = {Add}/>
      </Switch>
    </div>
  );
}

export default App;
