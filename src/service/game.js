/** 
  * @desc this service will handle the communication with file system, database, caching system 
  * to fetch the data.
  * @author Dhruvin Pipalia dhruvinhi@gmail.com
  * @required jsonfile for reading the json file from local flie system
  * @required location of the file
*/

const jsonfile = require('jsonfile')
const filePath = __dirname + "/../../assets/games.json";

/**
  * @desc will fetch the game data from the source
  * @param -
  * @return object - game data
*/
exports.getGamesData = () => {
    return jsonfile.readFile(filePath);
}