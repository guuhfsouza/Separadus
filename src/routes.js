import { Route, BrowserRouter, Switch} from 'react-router-dom'
import React from 'react';

import Home from './pages/Home';
// import Main from './pages/Main';
// import Footer from './pages/Footer';
// import Carousel from './pages/Carousel';
// import Event from './pages/Events';
import Meditation from './pages/Meditations';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/* <Route path="/main" component={Main}/>
                <Route path="/footer" component={Footer}/> 
                <Route path="/carousel" component={Carousel}/>
                <Route path="/event" component={Event}/>*/}
                <Route path="/meditation" exact component={Meditation}/>
            </Switch>
        </BrowserRouter>
    )
}


export default Routes;