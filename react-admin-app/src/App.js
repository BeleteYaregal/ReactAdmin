import './App.css';
import {Admin, Resource} from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import PostList from './components/Post/PostList';
import PostCreate from './components/Post/PostCreate';
import PostEdit from './components/Post/PostEdit';
import UserList from './components/User/UserList';
import { FaUser } from 'react-icons/fa';
import UserCreate from './components/User/UserCreate';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import MyLogoutButton from './components/logout';
import UserEdit from './components/User/UserEdit';

function App() {
  return (
    <Admin logoutButton={ MyLogoutButton } loginPage={Login} dashboard={Dashboard} dataProvider={restProvider('http://localhost:3000')}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
      <Resource name='users' icon={FaUser} create={UserCreate} list={UserList} edit={UserEdit}  />
    </Admin>
  );
}

export default App;
