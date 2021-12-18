import { Routes, Route, useLocation } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import OverviewGroupSubject from './Pages/OverviewGroupSubject/OverviewGroupSubject';
import OverviewSocial from './Pages/OverviewSocial/OverviewSocial';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import styles from './App.module.css';
import Details from './Pages/Details/Details';
import AddSocial from './Pages/AddEntry/AddEntry';

function App() {
  const current = useLocation();

  return (
    <>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/students"
            element={<OverviewSocial category={'students'} />}
          />
          <Route
            path="/teachers"
            element={<OverviewSocial category={'teachers'} />}
          />
          <Route path="/home" element={<Dashboard />} />
          <Route
            path="/groups"
            element={<OverviewGroupSubject category={'groups'} />}
          />
          <Route
            path="/subjects"
            element={<OverviewGroupSubject category={'subjects'} />}
          />
          <Route path="/details" element={<Details />} />
          <Route
            path="/addsocial"
            element={<AddSocial category={'social'} />}
          />
          <Route path="/addorga" element={<AddSocial category={'orga'} />} />
        </Routes>
      </div>
      {current.pathname !== '/' && (
        <NavigationBar activeLink={current.pathname} />
      )}
    </>
  );
}

export default App;
