import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { secure_values, enums, text_manager } from '../../constants';

const clientId = secure_values.clientId;

function onSuccessCallback(response: any) {
    console.log('[Login Success] currentUser:', response.profileObj);
}

function onFailureCallback(response: any) {
    console.log('[Login Failed] res:', response);
}

export function Login() {
    return(
        <div>
            <GoogleLogin 
            clientId={clientId}
            buttonText={text_manager.getText('Login')}
            onSuccess={onSuccessCallback}
            onFailure={onFailureCallback}
            cookiePolicy={enums.cookiePolicy.singleHostOrigin}
            style={{marginTop: '100px'}}
            isSignedIn={true}
            />
        </div>
    )
}
