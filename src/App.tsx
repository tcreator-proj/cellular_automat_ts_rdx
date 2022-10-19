import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row } from 'react-bootstrap';
import CellarField from './components/cellar-field/CellarField';
import ControllerButton from './components/controller-button/ControllerButton';
import Header from './components/header/Header';
import Render from './components/Render';

function App() {
  return (
    
    <Container>
      <Render />
      <Row className="d-flex flex-direction-column justify-content-center">
        <Header />
        <CellarField />
        <ControllerButton />
      </Row>
    </Container>
  );
}

export default App;
