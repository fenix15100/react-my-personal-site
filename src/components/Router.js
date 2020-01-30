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
                    path={['/react-my-personal-site/','/']}
                    component={Landing}
                />
                <Route 
                    path='/react-my-personal-site/projects'
                    component={Projects}
                />

            <Route 
                path='/react-my-personal-site/about-me'
                component={AboutMe}
            />
            <Route 
                path='/react-my-personal-site/contact'
                component={Contact}
            />
            <Route 
                path={'/react-my-personal-site/resume'}
                component={Resume}
            />  
            </Switch>
        </BrowserRouter>
        
    );
}

export default Router;