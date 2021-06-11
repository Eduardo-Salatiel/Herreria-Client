import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../views/Home';


const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Navigation;