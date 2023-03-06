import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import { mainPageText } from '../../utils/pageText';
function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Main text={mainPageText} />} />
      </Routes>
    </div>
  );
}

export default App;
