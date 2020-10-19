import React , {Suspense , lazy } from 'react';
import {withRouter , Switch , Route , Redirect} from 'react-router-dom';

import Base from './component/Layout/Base';
import BaseAdmin from './component/Layout/BaseAdmin'
import Pageloader from './pages/Pageloader';


const Home=lazy(()=> import('./pages/Home'));
const SearchPage= lazy(()=>import('./pages/Search'));
const AdminPanel= lazy(()=>import('./pages/AdminpanelHome'))






const Routes=({location})=>{
    console.log(location.pathname)
    if(location.pathname==="/admin" ){
        return(
            <BaseAdmin>
                <Suspense fallback={<Pageloader />}>
                    <Switch location={location}>
                        <Route exact path="/admin" component={AdminPanel} />
                    </Switch>
                </Suspense>
            </BaseAdmin>
        )
    }else if(location.pathname==="/" ||location.pathname==="/search" ){
        return(
        <Base location={location}>
            <Suspense fallback={<Pageloader/>}>
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={SearchPage} />
                </Switch>
            </Suspense>
        </Base>
    )
    }
    
}

export default withRouter(Routes);