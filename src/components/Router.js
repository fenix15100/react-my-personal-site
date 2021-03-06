import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

const Router = () => {

    return (
        <BrowserRouter basename="/react-my-personal-site/">
            <Switch>
                <Route 
                    exact={true}
                    path={['/react-my-personal-site/','/']}
                    component={Landing}
                />
                <Route 
                    path={'/projects'}
                    component={Projects}
                />
                
                <Route 
                    path={'/resume'}
                    component={Resume}
                />

                <Route 
                    path={'/contact'}
                    component={Contact}
                />  
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;