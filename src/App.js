import Footer from './components/Footer/Footer.js';
import TableDetails from './components/TableDetails/TableDetails.js';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import NotFound from './components/NotFound/NotFound.js';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TableDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;