import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import DashboardPage from 'pages/DashboardPage';
import MealsPage from 'pages/MealsPage';
import WorkoutsPage from 'pages/WorkoutsPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/meals" element={<MealsPage />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
