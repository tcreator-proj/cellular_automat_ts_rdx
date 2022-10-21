import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import CellarField from './components/cellar-field/CellarField';
import ControllerButton from './components/controller-button/ControllerButton';
import Header from './components/header/Header';
import Render from './components/Render';
import style from './app.module.css';
import RulesSlider from './components/rules-slider/RulesSlider';

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
