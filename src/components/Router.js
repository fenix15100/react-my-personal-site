import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';
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
                path={'/about-me'}
                component={AboutMe}
            />
            <Route 
                path={'/contact'}
                component={Contact}
            />
            <Route 
                path={'/resume'}
                component={Resume}
            />  
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;