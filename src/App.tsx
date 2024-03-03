import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Switch } from "wouter";
import { Header } from "@/shared/Header/Header.tsx";
const UserPostsPage = lazy(() => import("@/pages/UserPostsPage/UserPostsPage.tsx")
    .then(module => ({ default: module.UserPostsPage })));
const Favorites = lazy(() => import("@/pages/Favorites/Favorites.tsx")
    .then(module => ({ default: module.Favorites })));
const UserListPage = lazy(() => import("@/pages/UserListPage/UserListPage.tsx")
    .then(module => ({ default: module.UserListPage })));

function App() {
    // <Suspense fallback={<>Loading....</>}>
    return (
        <div className='app'>
            <Header />
            <Suspense fallback={<></>}>
                <Switch>
                    <Route path="/" component={UserListPage} />
                    <Route path="/user/:userId" component={UserPostsPage} />
                    <Route path="/favorites" component={Favorites} />
                </Switch>
            </Suspense>
        </div>
    );
}

export default App;
