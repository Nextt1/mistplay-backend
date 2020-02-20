/** 
 * @desc this service will handle the communication with file system, database, caching system 
 * to fetch the data.
 * @author Dhruvin Pipalia dhruvinhi@gmail.com
 * @required jsonfile for reading the json file from local flie system
 * @required location of the file
 * @required redis server if caching is enabled
 */

const jsonfile = require('jsonfile')
const filePath = __dirname + "/../../assets/games.json";
const config = require("./../confing");
const asyncRedis  = require("async-redis");

const client = asyncRedis.createClient({
	host: config.REDIS_HOST
});

/**
 * @desc will fetch the game data from the source
 * If caching is enabled then it will look for the cached data first
 * It will maintain the count of how many times the data has been access and will 
 * periodically delete it.
 * @param -
 * @return object - game data
 * @todo adding logging module 
 */
exports.getGamesData = async () => {
	if(!config.CACHE){
		return await jsonfile.readFile(filePath);
	}
	
	try {
		let data;
		data = await client.get("data");
		if(data == null){
			data = await jsonfile.readFile(filePath);
			client.set("data", JSON.stringify(data));
		}else{
			data = JSON.parse(data);
		}

		let count = await client.get("count");

		if(count == null){
			count = 1;
		}else{
			count = parseInt(count) + 1;
		}

		client.set("count", count);
		if(count % 5 == 0) client.del("data");

		return data;

	} catch (e) {
		console.log(e);
		throw new Error(e);
	}
}