import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';

const UserEdit=(props) => {
    return (
        <Edit title="Edit a user Info" {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email'/>
                <TextInput source='password'/>
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit;
