import logo from './logo.svg';
import './App.css';
import { Login, Logout} from '../src/components/google_auth';
import { Spinner } from '../src/components/spinner'

function App() {
  return (
    <div className='App'>
      <Login/>
      <Logout/>
      <Spinner />
    </div>
  )
};

export default App;
