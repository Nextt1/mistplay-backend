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

exports.sortArrayOfObjectsByNumber = (data, key, orderType) => {
  console.log(key, orderType);
  if(key == "rating"){
    function compare(a, b) {
  
      if(b[key] - a[key] != 0){
        if(orderType == "asc"){
          return a[key] - b[key];
        }else{
          return b[key] - a[key];
        }
      }
      return b["rCount"] - a["rCount"];
    }
    return data.sort(compare);
  }
  return data;
}

exports.sortArrayOfObjectsByText = (data, key, orderType) => {
  function compare(a, b) {
    const keyA = a[key].toUpperCase();
    const keyB = b[key].toUpperCase();
  
    let comparison = 0;
    if (keyA > keyB) {
      comparison = 1;
    } else if (keyA < keyB) {
      comparison = -1;
    }
    if(orderType == "asc"){
      comparison = comparison * -1;
    }
    // console.log(keyA, keyB, comparison, orderType, orderType === "asc");
    return comparison;
  }

  return data.sort(compare);
}

