const jwt = require('jsonwebtoken');

const secret = 'chicken-salt-pickles';
const expiration = '2h';

module.exports = {
  signToken: function({ username, email, admin, _id }) {
    const payload = { username, email, admin, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  authMiddleware: function({ req }) {
    // allows token to be sent via req.body, req.query, or headers
   try{
     
    let token = req.body.token || req.query.token || req.headers.authorization;
  
    // separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token
        .split(' ')
        .pop()
        .trim();
    } else{
      console.log('No auth')
    }
  
    // if no token, return request object as is
    if (!token) {
      console.log('No Token')
      return req;
    }
  
    try {
      // decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
  
    // return updated request object
    return req;
  } catch (e) {
    console.log(e)
  }
   
    
  }
};