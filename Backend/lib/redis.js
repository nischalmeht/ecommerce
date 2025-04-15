const Redis = require("ioredis");
const dotenv = require("dotenv");

dotenv.config();

const redis = new Redis(process.env.UPSTASH_REDIS_URL);

module.exports=redis
// import Redis from "ioredis"

// const client = new Redis("rediss://default:AVStAAIjcDE1ZTE0MGQzNDlkYTU0NWE0YWE2MmY3NjM3MjAxNzY2NXAxMA@well-spider-21677.upstash.io:6379");
// await client.set('foo', 'bar');