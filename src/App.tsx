import './App.css'
import {Route, Switch} from "wouter";
import {Header} from "@/shared/Header/Header.tsx";

function App() {
  return (
      <div className='app'>
        <Header/>
        <Switch>
          <Route path="/users" component={<></>}/>
          {/*<Route path="/user/:userId" component={<></>}/>*/}
          {/*<Route path="/favorites" component={<></>}/>*/}
        </Switch>
      </div>
  )
}

export default App
