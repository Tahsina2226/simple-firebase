// Login.jsx
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import auth from '../Firebase/Firebase.init'; // Import default export

const Login = () => {
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log('ERROR', error);
        });
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login with Google</button>
        </div>
    );
};

export default Login;
