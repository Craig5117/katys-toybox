import {useState} from 'react'
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
    //   const [login, { error }] = useMutation(LOGIN_USER);
      const { signIn, signOut } = useAuth()
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
          console.error(e);
        }
      };
    return (
        <div className={signUpStyles.signUpArea}>
            <form className={signUpStyles.signUpForm} onSubmit={handleFormSubmit}>
                <div>
                    <label className={signUpStyles.signUpLabel} htmlFor="username">Username</label>
                    <input className={signUpStyles.signUpInput} name="username" id="username" type="text" onChange={handleChange}/>
                </div>                
                <div>
                    <label className={signUpStyles.signUpLabel} htmlFor="password">Password</label>
                    <input className={signUpStyles.signUpInput} name="password" id="password" type="text" onChange={handleChange}/>                    
                </div>                
                <button className={`${btnStyles.btn} ${signUpStyles.signUpBtn}`} type="submit">Submit</button>
            </form>
            <div>
            <p>Message Here</p>
            </div>
        </div>
    );
}