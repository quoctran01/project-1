import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './views/Auth'
import Dashboard from './views/Dashboard';
import AuthContextProvider from './context/AuthContext';
import ProtectedRouter from './components/routing/ProtectedRouter';
import About from './views/About';
import PostContextProvider from './context/PostContext';
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/login' render={props => <Auth {...props} authRoute='login'/>}/>
              <Route exact path='/register' render={props => <Auth {...props} authRoute='register'/>}/>
              <ProtectedRouter exact path='/dashboard' component={Dashboard}/>
              <ProtectedRouter exact path='/about' component={About}/>
            </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>

  );
}

export default App;
