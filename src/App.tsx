import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import Render from './components/Render';
import style from './App.module.css';
import RulesSlider from './components/RulesSlider/RulesSlider';
import CellarField from './components/CellarField/CellarField';
import ControllerButton from './components/ControllerButton/ControllerButton';
import Header from './components/Header/Header';

function App() {
  return (
    <Container className={style.container}>
      <Render />
      <Row className="d-flex flex-direction-column justify-content-center">
        <Row>
          <Header />
        </Row>
        <Row>
          <Col className="render-board">
            <CellarField width={"full"}/>
          </Col>
          <Col className="controlls">
            <RulesSlider />
            <ControllerButton />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default App;
