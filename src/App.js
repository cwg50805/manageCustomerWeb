// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import dataProvider from './dataProvider';
import UserIcon from '@material-ui/icons/Group';
// import jsonServerProvider from 'ra-data-json-server';


// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
  <Resource name="users" list={UserList} icon={UserIcon} />
</Admin>
);

export default App;