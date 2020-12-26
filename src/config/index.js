const ENV = process.env

const config = {
  port: ENV.PORT || 4000,
  redisURL: ENV.REDIS_URL,
}

module.exports = config
