/** 
  * @desc this file handle all the routes related to searching the game.
  * @author Dhruvin Pipalia dhruvinhi@gmail.com
  * @required gameRepository - fetch the required data
*/
const gameRepository =  require('./../../repository/gameRepository');
const ORDER_BY = ["rating"]
const ORDER_TYPE = ["asc", "desc"]
/**
  * @desc will used for /search REST API.
  * @param object req - request object of express
  * @param object res - response object of express
  * @return object response - response object with calculated data
*/
exports.search = async(req, res) => {
    const query = req.body.query;

    const page = req.query.page ? parseInt(req.query.page) : 1;
    const orderBy = req.query.orderBy && ORDER_BY.indexOf(req.query.orderBy) ? req.query.orderBy : "rating";
    const orderType = req.query.orderType && ((req.query.orderType == "desc") || (req.query.orderType == "asc")) ? req.query.orderType : "desc";

    const data = await gameRepository.queryByName(query, page, orderBy, orderType);

    res.send(data);
}
