import React from 'react';
import {Routes,Switch} from 'react-router-dom';
import Landing from './Landing';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';


const Routes = () => {
    return (
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
        
    );
}

export default Routes;