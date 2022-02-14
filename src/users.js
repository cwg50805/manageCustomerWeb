// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="gender" />
            <EmailField source="email" />
            <TextField source="role" />
            <TextField source="cityOfBirth" />
            <TextField source="temp" />
            <TextField source="lastLogin" />
        </Datagrid>
    </List>
);