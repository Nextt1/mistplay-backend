/** 
  * @desc this repository will handle the data manipulation and transformation fetched by the game service.
  * @author Dhruvin Pipalia dhruvinhi@gmail.com
  * @required gameService - to fetch the actual data
  * @required helper - function for pagination
*/
const gameService = require('../service/game');
const HELPER = require("./../helper");

/**
  * @desc will filter the game data by query
  * @param -
  * @return object - game data
*/
exports.queryByName = async (name, page = 1) => {
    let data;
    name = name.toLowerCase();
    
    try{
        data = await gameService.getGamesData();
    }catch( e ){
        return {data: {}, message: "Can not load the data", errorCode: 300};
    }

    const simpleMatch = [];

    for(let key in data){
        const title = data[key].title.toLowerCase();
        console.log(title);
        if(title.includes(name)){
            simpleMatch.push(data[key]);
        }
    }

    return { data: { results: HELPER.pagination(simpleMatch, page), totalResults: simpleMatch.length }, message: "Data loaded successfully", erroCode: 200};
}