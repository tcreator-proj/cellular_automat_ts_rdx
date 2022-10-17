import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
import { Header } from 'react-bootstrap/lib/Modal';
import CellarField from './components/cellar-field/CellarField';

function App() {
  return (
    <Container>
      <Header>

      </Header>
      <CellarField />
    </Container>
  );
}

export default App;
