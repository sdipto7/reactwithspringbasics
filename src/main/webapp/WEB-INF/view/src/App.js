import './App.css';
import UserForm from './components/UserForm';
import Header from './components/Header';
import { Col, Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserTable from './components/UserTable';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>

          <Header />

          <Row>
            <Col md={4}>
              <Menu />
            </Col>

            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/userList' element={<UserTable />} exact />
                <Route path='/addUser' element={<UserForm key={"add"} />} exact />
                <Route path='/updateUser/:id' element={<UserForm key={"update"} />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
};

export default App;