import { useState } from "react";
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'; 
const defaultformFields ={
    displayName:"",
    email:"",
    password:"",
    cnfrmpwd:""
}
const SignUpForm = () => {

    const [formFields,setformFields]=useState(defaultformFields);
    const {displayName,email,password,cnfrmpwd}=formFields;

    const handleChange =(event)=>{
        const {name,value} = event.target;
        setformFields((state)=>{
            return {...state, [name]:value}
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(password!==cnfrmpwd) return;
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            const userDocRef = createUserDocumentFromAuth(user,{"displayName":displayName})
        }catch(Err){
            alert(Err);
        }
        
    }
    return (
        <div>
            <h1>Sign Up with email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>DisplayName</label>
                <input type="text" required value={displayName} name="displayName" onChange={handleChange}></input>
                <label>Email</label>
                <input type="email" required name="email" value={email} onChange={handleChange}></input>
                <label>Password</label>
                <input type="password" required name="password" value={password} onChange={handleChange}></input>
                <label>Confirm password</label>
                <input type="password" required value={cnfrmpwd} name="cnfrmpwd" onChange={handleChange}></input>

                <button type="submit">Sign Up</button>
            </form>
        </div>

    )
}
export default SignUpForm;