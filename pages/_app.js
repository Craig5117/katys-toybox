import '../styles/globals.css';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink} from '@apollo/client';
import { AuthProvider } from '../utils/auth.js'
// import { setContext } from "@apollo/client/link/context";



function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
// const httpLink = new HttpLink({ uri: "http://localhost:3000/api/graphql" });

// const authLink = new ApolloLink((operation, forward) => {
//   // Retrieve the authorization token from local storage.
//   const token = localStorage.getItem('auth_token');

//   // Use the setContext method to set the HTTP headers.
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : ''
//     }
//   });

//   // Call the next link in the middleware chain.
//   return forward(operation);
// });

// const client = new ApolloClient({
//   uri: "http://localhost:3000/api/graphql",
//   cache: new InMemoryCache(),
//   link: authLink.concat(httpLink),
// });