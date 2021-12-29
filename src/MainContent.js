import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';
import Team from './pages/Team';
import Overview from './pages/Overview';
import Sidebar from './components/Sidebar';

const MainContent = ({ sideNavExpanded, setSideNavExpanded }) => {
    return (
        <Router>
            <Sidebar sideNavExpanded={sideNavExpanded} setSideNavExpanded={setSideNavExpanded} />
            <Switch>
                <Route path='/overview' exact component={Overview} />
                <Route path='/reports' exact component={Reports} />
                <Route path='/reports/reports1' exact component={ReportsOne} />
                <Route path='/reports/reports2' exact component={ReportsTwo} />
                <Route path='/reports/reports3' exact component={ReportsThree} />
                <Route path='/team' exact component={Team} />
            </Switch>
        </Router>
    )
}
export default MainContent