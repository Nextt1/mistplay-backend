/** 
  * @desc this file will have the frequently used functions by the
  * entire application.
  * @author Dhruvin Pipalia dhruvinhi@gmail.com
*/

/**
  * @desc will paginate the data according to the page size
  * @param - array data - array of data that needs to be paginated
  * @return - int page - page number 
*/
exports.pagination = (data, page) => {
    return data.slice(page * 10 - 10, (page)*10);
}