const gameRepository =  require('./../../repository/gameRepository');

exports.search = async(req, res) => {
    const query = req.body.query;

    const data = await gameRepository.queryByName(query, req.query.page ? parseInt(req.query.page) : 1);

    res.send(data);
}
