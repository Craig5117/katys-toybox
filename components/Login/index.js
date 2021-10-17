import {useEffect, useState, useRef} from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';
// import frontendAuth from '../../utils/frontendAuth';
import btnStyles from '../../styles/Button.module.css';
import signUpStyles from '../../styles/SignUp.module.css';
import { useAuth } from '../../utils/auth.js'


export default function Login () {
    const [formState, setFormState] = useState({
        username: '',
        password: '',
      });
    const [errMessage, setErrMessage] = useState('');
    //   const [login, { error }] = useMutation(LOGIN_USER);
      const { signIn, signOut } = useAuth();
      const userEl = useRef(null);
      const passEl = useRef(null);

      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
        // console.log(value)
      }
      
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (formState.username === '' && formState.password === '') {
          console.log("running")
          const username = userEl.current.value;
          const password = passEl.current.value;
          return signIn({ username: username, password: password})
        }

        try {
        //   if (form.checkValidity() === false) {
        //     event.stopPropagation();
        //   }
        //   setValidated(true);
        console.log(formState)
        signIn({
            ...formState,
          });
        //   frontendAuth.login(data.login.token);
          // console.log(formState)
          
        } catch (e) {
          console.log('error');
          if (e === "Incorrect credentials") {
            console.log('yep')
          }
        }
      };
    
     

    return (
        <div className={signUpStyles.signUpArea}>
            <form className={signUpStyles.signUpForm} onSubmit={handleFormSubmit}>
                <div>
                    <label className={signUpStyles.signUpLabel} htmlFor="username">Username</label>
                    <input className={signUpStyles.signUpInput} name="username" id="username" type="text" onChange={handleChange} ref={userEl}/>
                </div>                
                <div>
                    <label className={signUpStyles.signUpLabel} htmlFor="password">Password</label>
                    <input className={signUpStyles.signUpInput} name="password" id="password" type="text" onChange={handleChange} ref={passEl}/>                    
                </div>                
                <button className={`${btnStyles.btn} ${signUpStyles.signUpBtn}`} type="submit">Submit</button>
            </form>
            {/* <div>
            <p>Message Here</p>
            </div> */}
        </div>
    );
}