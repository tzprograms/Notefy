import rateLimit from "../config/upstash.js"
import user from "../models/user.js"


const rateLimiter = async (req , res , next) => {
	
try {
	console.log("RateLimiter key:", req.user?._id?.toString());

	const userId = req.user._id.toString();
    const { success, limit, remaining, reset } = await rateLimit.limit(
      `ratelimit_${userId}`
    );
	

    // Debug log: user + limiter state
    console.log("Rate limit check:", {
      userId,
      success,
      limit,
      remaining,
      reset,
    });

	if (!success){
		return res.status(429).json({
			message : "Too many requests , please try again later "
		})
	}
	next();
} 	
catch (error) {
	console.error("Rate limit error" , error)
	next(error)
}
}

export default rateLimiter