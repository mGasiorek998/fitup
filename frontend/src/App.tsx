import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import WorkoutsPage from 'pages/WorkoutsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/workouts" element={<WorkoutsPage />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
