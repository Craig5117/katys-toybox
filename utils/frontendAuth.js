import decode from 'jwt-decode';
// import { Redirect } from 'react-router-dom'

class AuthService {
    // retrieve data saved in token
    getProfile() {
      return decode(this.getToken());
    }
  
    // check if the user is still logged in
    loggedIn() {
      // Checks if there is a saved token and it's still valid
      const token = this.getToken();
      // use type coersion to check if token is NOT undefined and the token is NOT expired
      // if (!token || this.isTokenExpired(token)) {
      //   return window.location.assign('/Login');
      // }
      return !!token && !this.isTokenExpired(token);
    }

    isAdmin() {
      // Checks if the user is Admin
      const token = this.getToken();
      const decoded = decode(token);
      return decoded.data.admin;
    }
  
    // check if the token has expired
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        // Date.now() / 1000 gets current time in seconds
        // this checks if the exp is less than now in seconds
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else {
          return false;
        }
      } catch (err) {
        return false;
      }
    }
  
    // retrieve token from localStorage
    getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token');
    }
  
    // set token to localStorage and reload page to homepage
    login(idToken) {
      // Saves user token to localStorage
      localStorage.setItem('id_token', idToken);
  
      window.location.assign('/');
     
     // this is slow and requires two clicks
      // return  <Redirect to="/profile" />
      
    }
  
    // clear token from localStorage and force logout with reload
    logout() {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
      // this will reload the page and reset the state of the application
      window.location.assign('/Login');
    }
  }

export default new AuthService();
