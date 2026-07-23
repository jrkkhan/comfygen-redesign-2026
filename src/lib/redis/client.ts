// import Redis from "ioredis";

// function createRedisClient() {
//   const client = new Redis("redis://127.0.0.1:6379", {
//     maxRetriesPerRequest: 3,
//     enableReadyCheck: true,
//   });

//   client.on("error", (err) => {
//     console.error("[Redis] connection error:", err.message);
//   });

//   return client;
// }

// export const redis = createRedisClient();