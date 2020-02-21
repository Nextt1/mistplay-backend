/** 
 * @desc this file handle all the routes related to searching the game.
 * @author Dhruvin Pipalia dhruvinhi@gmail.com
 * @required gameRepository - fetch the required data
 * @required redis server if caching is enabled
 */
const gameRepository = require('./../../repository/gameRepository');
const ORDER_BY = ["rating"]
const ORDER_TYPE = ["asc", "desc"];
const config = require("./../../confing");
const asyncRedis = require("async-redis");

const client = asyncRedis.createClient({
	host: config.REDIS_HOST
});
/**
 * @desc will used for /search REST API.
 * Will cached the result for every query and will use it for subsequent requests if its enabled.
 * @param object req - request object of express
 * @param object res - response object of express
 * @return object response - response object with calculated data
 */
exports.search = async (req, res) => {
	const query = req.body.query;

	const page = req.query.page ? parseInt(req.query.page) : 1;
	const orderBy = req.query.orderBy && ORDER_BY.indexOf(req.query.orderBy) ? req.query.orderBy : "rating";
	const orderType = req.query.orderType && ((req.query.orderType == "desc") || (req.query.orderType == "asc")) ? req.query.orderType : "desc";

	console.log(query + "_" + page + "_" + orderBy + "_" + orderType);
	
	let data = null;
	if (config.CACHE) {
		data = await client.get(query + "_" + page + "_" + orderBy + "_" + orderType);
		data = JSON.parse(data);
		console.log("CACHED DATA");
	}

	if(data == null){
		data = await gameRepository.queryByName(query, page, orderBy, orderType);
		client.set( query + "_" + page + "_" + orderBy + "_" + orderType, JSON.stringify(data));
		console.log("NOT CACHED DATA");
	}

	res.send(data);
}