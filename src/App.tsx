import './App.css'
import {Route, Switch} from "wouter";
import {Header} from "@/shared/Header/Header.tsx";
import {UserListPage} from "@/pages/UserListPage/UserListPage.tsx";
import {UserPostsPage} from "@/pages/UserPostsPage/UserPostsPage.tsx";

function App() {
  return (
      <div className='app'>
        <Header/>
        <Switch>
          <Route path="/" component={UserListPage}/>
          <Route path="/user/:userId" component={UserPostsPage}/>
          {/*<Route path="/favorites" component={<></>}/>*/}
        </Switch>
      </div>
  )
}

export default App
