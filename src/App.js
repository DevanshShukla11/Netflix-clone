
import './App.css';
import { Header } from './Header';
import { Sign } from './Sign';
import { Switch , Route } from 'react-router';
import { Redirect } from 'react-router-dom';


function App() {
  return (
   <>
    <Switch>
    <Route exact  path="/" component={Header} />
    <Route exact  path="/sign" component={Sign} />
    <Redirect to  = "/" />
    </Switch>
   </>
  );
}
export default App;
