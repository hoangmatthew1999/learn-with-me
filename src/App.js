import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Home';
import {StudyMaterial, StudyMaterials} from './StudyMaterial';
import {Courses} from './Courses';
import {Link, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Learn With Us</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/study-materials">Study Materials</Nav.Link>
            <Nav.Link href="/courses">Courses</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path = "/home" element = {<Home/>} />
        <Route path = "/study-materials" element = {<StudyMaterials/>} />
        <Route path = "/courses" element = {<Courses/>} />

      </Routes>

    </div>

  );
}

export default App;
