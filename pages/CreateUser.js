import {useState} from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../graphql/mutations';
import frontendAuth from '../utils/frontendAuth';
import btnStyles from '../styles/Button.module.css';
import signUpStyles from '../styles/SignUp.module.css';

export default function CreateUser () {
    const [formState, setFormState] = useState({
        email: '',
        username: '',
        password: '',
      });
      const [addUser, { error }] = useMutation(ADD_USER);

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
          const { data } = await addUser({
            variables: { ...formState },
          });
          Auth.login(data.addUser.token);
          // console.log(formState)
          console.log(data.addUser.user)
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
                    <label className={signUpStyles.signUpLabel} htmlFor="email">Email</label>
                    <input className={signUpStyles.signUpInput} name="email" id="email" type="text" onChange={handleChange}/>                    
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