import React from 'react';
import { GoogleLogout } from 'react-google-login'
import { enums, secure_values, text_manager } from '../../constants';

function onSuccess() {
    alert('Logout Successful');
}

export function Logout() {
    return(
        <div>
            <GoogleLogout
            clientId={secure_values.clientId}
            buttonText={text_manager.getText('Logout')}
            onLogoutSuccess={onSuccess}
            />
        </div>
    );
}
