import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Home/Navigation';
import HomePage from './components/HomePages/HomePage';
import Ricerca from './components/HomePages/Ricerca';
import Help from './components/HomePages/Help';
import SinglePost from './components/singlepost/SinglePost';
import UserPost from './components/singlepost/UserSinglePost';
import AllPosts from './components/AllPosts/AllPosts';
import UpdatePost from './components/UpdatePost/UpdatePost';
import Contatti from './components/HomePages/Contatti';
import Autorizzazioni from './components/HomePages/Autorizzazioni';
import Privacy from './components/HomePages/Privacy';

import LoginForm from "../src/Navbars/forms/LoginForm";
import RegisterForm from "../src/Navbars/forms/RegisterForm";
import ForgetPassword from "../src/Navbars/forms/ForgetPassword";
import EmailVerify from "../src/Navbars/forms/EmailVerify";
import AdminAccount from "../src/Navbars/forms/AdminAccount";

import PrivateRoute from './components/dashboard/PrivateRoute';
import AdminRoute from './components/dashboard/AdminRoute';
import AdminDashboard from './components/dashboard/dashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import CreateMateriale from './components/dashboard/materials';
import CreateDatazione from './components/dashboard/datezone';
import CreateProvenienza from './components/dashboard/provenienza';
import CreateGenere from './components/dashboard/genere';
import CreateInventory from './components/dashboard/inventory';
import CreateAcquisition from './components/dashboard/acquisition';
import CreateBookform from './components/dashboard/bookform';
import CreateFragment from './components/dashboard/fragment';
import CreateAuthor from './components/dashboard/author';
import CreatePost from './components/dashboard/createpost';
import UpdateProfile from './components/UpdatePost/UpdateProfile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FirstNav from './Navbars/firstNav/FirstNav';
import Crediti from '../src/Navbars/last Nav/lastNavPages/Crediti';
import Abbreviazioni from '../src/Navbars/last Nav/lastNavPages/Abbreviazioni';
import Riviste from '../src/Navbars/last Nav/lastNavPages/Riviste';
import Informazioni from '../src/Navbars/last Nav/lastNavPages/Informazioni';
import Inventoryinfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Inventoryinfo';
import Origininfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Origininfo';
import Materialinfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Materialinfo';
import Bookforminfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Bookforminfo';
import Acquisitioninfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Acquisitioninfo';
import Genereinfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Genereinfo';
import Dateinfo from '../src/Navbars/last Nav/lastNavPages/infoPages/Dateinfo';
import TMInfo from './Navbars/last Nav/lastNavPages/infoPages/TMInfo';
import ViewPost from './components/viewpost/ViewPost';

const App = () => {
  return (
    <Fragment>
      <FirstNav />
      <Navigation />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/emailverify" component={EmailVerify} />
        <Route exact path="/reset/password/:id" component={ForgetPassword} />
        <AdminRoute path='/admin/dashboard' exact component={AdminDashboard} />
        <PrivateRoute path='/user/dashboard' exact component={UserDashboard} />
        <PrivateRoute path='/user/post' exact component={UserPost} />

        <Route exact path="/crediti" component={Crediti} />
        <Route exact path="/abbreviazioni" component={Abbreviazioni} />

        <Route exact path="/riviste" component={Riviste} />
        <Route exact path="/informazioni" component={Informazioni} />
        <AdminRoute exact path='/user/materiale' component={CreateMateriale} />
        <AdminRoute exact path='/user/datazione' component={CreateDatazione} />
        <AdminRoute exact path='/user/provenienza' component={CreateProvenienza} />
        <AdminRoute exact path='/user/genere' component={CreateGenere} />
        <AdminRoute exact path='/user/inventory' component={CreateInventory} />
        <AdminRoute exact path='/user/acquisition' component={CreateAcquisition} />
        <AdminRoute exact path='/user/bookform' component={CreateBookform} />
        <AdminRoute exact path='/user/fragments' component={CreateFragment} />
        <AdminRoute exact path='/user/author' component={CreateAuthor} />
        <PrivateRoute exact path='/user/crearepost' component={CreatePost} />
        <AdminRoute exact path="/updatepost" component={UpdatePost} />
        <AdminRoute exact path="/admin/accounts" component={AdminAccount} />
        <PrivateRoute exact path='/update/profile/:profileId' component={UpdateProfile} />
        <Route exact path="/singlepost" component={SinglePost} />
        <Route exact path="/allposts" component={AllPosts} />
        <Route exact path="/ricerca" component={Ricerca} />
        <Route exact path="/help" component={Help} />

        <Route exact path="/contatti" component={Contatti} />
        <Route exact path="/autorizzazioni" component={Autorizzazioni} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/inventoryinfo" component={Inventoryinfo} />
        <Route exact path="/origininfo" component={Origininfo} />
        <Route exact path="/materialinfo" component={Materialinfo} />
        <Route exact path="/bookforminfo" component={Bookforminfo} />
        <Route exact path="/genereinfo" component={Genereinfo} />
        <Route exact path="/dateinfo" component={Dateinfo} />
        <Route exact path="/acquistioninfo" component={Acquisitioninfo} />
        <Route exact path="/tmInfo" component={TMInfo} />
        <Route exact path="/viewpost/:id" component={ViewPost} />

      </Switch>
    </Fragment>
  );

};

export default App;
