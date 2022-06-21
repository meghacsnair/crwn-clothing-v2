import { signInWithGooglePopup, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import { createUserDocumentFromAuth,auth } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { Link } from 'react-router-dom';
const Signin =() =>{
    useEffect(async ()=>{
        const response = await getRedirectResult(auth);
        if(response){
            const userDocRef = createUserDocumentFromAuth(response.user)
        }
    },[])
    const logGoogleUser = async () =>{
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user)
    }
    // const logRedirectUser = async () =>{
    //     const response = await signInWithGoogleRedirect();
    //     debugger;
    //     console.log(response);
    // }
    return (<div>
        <h1>Signin component</h1>
        <button onClick={logGoogleUser}>Sign In with Google</button>
        <button onClick={signInWithGoogleRedirect}>Sign In with Google Redirect</button>
        <Link className='nav-link' to="/signup">Signup</Link>
        </div>)
}
export default Signin;