// Login.jsx
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'; 
import React, { useState } from 'react';
import auth from '../Firebase/Firebase.init';

const Login = () => {
    const [user, setUser] = useState(null); 
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user); 
        })
        .catch((error) => {
            console.log('ERROR', error);
            setUser(null); 
        });
    };

   
    const handleGoogleSignOut = () => { n
        signOut(auth)
        .then(() => {
            console.log('Sign-out successful');
            setUser(result.user); 
        })
        .catch((error) => {
            console.log('sin out done');
            setUser(null);

        });
    };

    return (
        <div>
            {/* <button onClick={handleGoogleSignIn}>Login with Google</button>
            <button onClick={handleGoogleSignOut}>Sign out</button>  */}
            
{
    user ?  <button onClick={handleGoogleSignOut}>Sign out</button> :
    <button onClick={handleGoogleSignIn}>Login with Google</button>
}



















            {user && (
                <div>
                    <h3>{user.displayName}</h3>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User profile" /> 
                </div>
            )}
        </div>
    );
};

export default Login;
