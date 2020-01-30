import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';

const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route 
                    exact={true}
                    path={['/myPersonalSite/','/']}
                    component={Landing}
                />
                <Route 
                    exact={true}
                    path='/myPersonalSite/projects'
                    component={Projects}
                />

                <Route 
                exact={true}
                path='/myPersonalSite/projects'
                component={Projects}
            />
            <Route 
                exact={true}
                path='/myPersonalSite/about-me'
                component={AboutMe}
            />
            <Route 
                exact={true}
                path='/myPersonalSite/contact'
                component={Contact}
            />
            <Route 
                exact={true}
                path={'/myPersonalSite/resume'}
                component={Resume}
            />  
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;