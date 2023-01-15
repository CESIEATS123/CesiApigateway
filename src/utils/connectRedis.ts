import { createClient } from 'redis';
import { set } from 'lodash';

const redisUrl = `redis://localhost:6379`;
const redisClient = createClient({url: redisUrl});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis client connected...');
  } catch (err: any) {
    console.log(err.message);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

redisClient.on('error', (err) => console.log(err));

// redisClient.set(user._id, JSON.stringify(user), {
//   EX: 60 * 60,
// });

export default redisClient;

