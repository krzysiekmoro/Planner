import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const Dashboard = lazy(() => import('./components/dashboard/Dashboard'));
const ProjectDetails = lazy(() => import('./components/projects/ProjectDetails'));
const SignIn = lazy(() => import('./components/auth/SignIn'));
const SignUp = lazy(() => import('./components/auth/SignUp'));
const CreateProject = lazy(() => import('./components/projects/CreateProject'))
const Navbar = lazy(() => import('./components/layout/Navbar'));




function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading screen...</div>;
  return children
}

function App() {
  return (
    <BrowserRouter>
      <AuthIsLoaded>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </Suspense>
      </AuthIsLoaded>
    </BrowserRouter>
  );
}

export default App;
