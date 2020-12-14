import React from 'react';
import {Create, SimpleForm, TextInput, DateInput} from 'react-admin';

const UserCreate=(props) => {
    return (
        <Create title="Create a user" {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email'/>
                <TextInput source='password'/>
            </SimpleForm>
        </Create>
    )
}

export default UserCreate;
