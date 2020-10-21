import React , {Suspense , lazy } from 'react';
import {withRouter , Switch , Route , Redirect} from 'react-router-dom';

import Base from './component/Layout/Base';
import BaseAdmin from './component/Layout/BaseAdmin'
import Pageloader from './pages/Pageloader';


const Home=lazy(()=> import('./pages/Home'));
const SearchPage= lazy(()=>import('./pages/Search'));
const AdminPanel= lazy(()=>import('./pages/AdminpanelHome'));
const UserProfile = lazy(()=> import ('./pages/UserProfile'));
const Register = lazy (()=>import('./pages/Register'));
const Login = lazy (()=> import ('./pages/Login'));
const recover = lazy (()=>import ('./pages/Recoveremail'));
const mailmsg= lazy (()=>import ('./pages/Sendigemailmsg'));




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
    }else if(location.pathname==="/" ||
    location.pathname==="/search" || 
    location.pathname ==="/profile" ||
    location.pathname ==="/register" ||
    location.pathname ==="/login" ||
    location.pathname ==="/recover" ||
    location.pathname ==="/sentrecover"

    ) {
        return(
        <Base location={location}>
            <Suspense fallback={<Pageloader/>}>
                <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/register" component={Register}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/profile" component={UserProfile} />
                    <Route path="/recover" component={recover} />
                    <Route path="/sentrecover" component={mailmsg} />
                </Switch>
            </Suspense>
        </Base>
    )
    }
    
}

export default withRouter(Routes);