import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
// export default {
    
//         dbName: 'MONGODB_USERNAME',
//         dbPass: 'MONGODB_PASSWORD',
//         accessTokenPrivateKey: 'ACCESS_TOKEN_PRIVATE_KEY',
//         accessTokenPublicKey: 'ACCESS_TOKEN_PUBLIC_KEY',
//       };
      


      export default {
    
        dbName: 'cesieat',
        dbPass: 'password123',
        accessTokenPrivateKey: 'ACCES_TOKEN_PRIVATE_KEY',
        accessTokenPublicKey: 'process.env.ACCES_TOKEN_PUBLIC_KEY'
      };


      
