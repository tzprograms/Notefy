import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import 'dotenv/config'


// Allow 10 request per 20 second 
const rateLimit = new Ratelimit({
	redis : Redis.fromEnv(),
	limiter: Ratelimit.slidingWindow(1000, "60 s")
})

export default rateLimit