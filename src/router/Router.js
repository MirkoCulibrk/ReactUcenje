import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DetailPage from '../components/Pages/DetailPage/DetailPage';
import { Popular } from '../components/Pages/Popular/Popular';
import TopRated from '../components/Pages/TopRated/TopRated';
import Upcoming from '../components/Pages/Upcoming/Upcoming';
import Search from '../components/Pages/SearchPage/SearchPage';
const Router = () => {
    return (
        <Switch>
            <Route path="/" exact component={Search}></Route>
            <Route path="/top-rated" component={TopRated}></Route>
            <Route path="/upcoming" component={Upcoming}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path="?s=id" component={DetailPage}></Route>
            <Route path="/movie/:id" component={DetailPage}></Route>
        </Switch>
    );
};

export default Router;
