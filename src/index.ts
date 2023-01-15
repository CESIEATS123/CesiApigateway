import { Hooks, WebSocketHooks } from 'fast-gateway';
import * as restana from 'restana';

import config from 'config';
import connectDB from './utils/connectDb';
import connectRedis from './utils/connectRedis';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';

const gateway = require ('fast-gateway');
require('dotenv').config();


const app = express();


//1. Body Parser
app.use(express.json({ limit: '10kb' }));

// 2. Cookie Parser
app.use(cookieParser());

// 3. Logger
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// 4. Cors
app.use(
  cors({
    origin: config.get<string>('origin'),
    credentials: true,
  })
);

// 5. Routes
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

// Testing
app.get('/healthChecker', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    status: 'success',
    message: 'Welcome to Cesieat Api GATEWAY!!!',
  });
});

// UnKnown Routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} not found`) as any;
  err.statusCode = 404;
  next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  err.status = err.status || 'error';
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
});

const port = config.get<number>('port');
app.listen(port, () => {
   console.log(`Server started on port: ${port}`);
  
   connectDB();
  
 });




 const port1 = 9091;
const server = gateway({
  routes: [{
    prefix: '/products',
    target: 'http://127.0.0.1:3000',
    hooks:{}


  }, {
    prefix: '/orders',
    target: 'http://127.0.0.1:3001',
    hooks:{}
  },
  {
    prefix: '/payements',
    target: 'http://127.0.0.1:3002',
    hooks:{}

  }, {
    prefix: '/livraisons',
    target: 'http://127.0.0.1:3003',
    hooks:{}
  }
]
})

server.get('/apigatetest', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('Gateway called')
});


//server.start(port).then(()=>{
  //  console.log("Gateway is running "+port);
    //connectDB();
//})

//const port = config.get<number>('port');
server.start(port1).then(() => {
 // console.log(`Server started on port: ${port}`);
  console.log("Gateway is running "+port1);
  
  //connectDB();
  
});


