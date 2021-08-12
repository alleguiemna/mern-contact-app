import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import UserList from './components/UserList/UserList'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import UserDetail from './components/UserDetail/UserDetail';
import Nav from './components/Nav/Nav'
import AddUser from './components/AddUser/AddUser';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getUser } from './redux/userAction';

function App() {
  // const dispatch = useDispatch();
  // const {users,loading} = useSelector(state => state);
  // useEffect(() => {
  //     dispatch(getUser())
  // }, [ ])
  return (
    <div className="App">
      <Router>
      <Route path="/" component={Nav}/>
      <Route path="/" exact component={UserList} />
      <Route path="/" component={AddUser}/>
      <Route path="/users/get/:id" exact component={UserDetail}/>
    
      </Router>
    </div>
  );
}

export default App;
