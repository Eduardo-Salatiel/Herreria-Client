import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Catalog from '../views/Catalog';
import Home from '../views/Home';


const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/:catalog" component={Catalog} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default Navigation;