import React , {Suspense , lazy } from 'react';
import {withRouter , Switch , Route , Redirect} from 'react-router-dom';

import Base from './component/Layout/Base';

import Pageloader from './pages/Pageloader';
const Home=lazy(()=> import('./pages/Home'));






const Routes=({location})=>{
    return(
        <Base location={location}>
            <Suspense fallback={<Pageloader/>}>
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Suspense>
        </Base>
    )
}

export default withRouter(Routes);