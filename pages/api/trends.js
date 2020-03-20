const googleTrends = require('google-trends-api')
// import Cors from 'cors'

module.exports = (req, res) => {
  // const cors = Cors({
  //   methods: ['GET', 'HEAD', 'POST'],
  // })
  console.log("req trends", req)
  console.log("res trends", res)




  googleTrends.dailyTrends({ geo: 'CH' })
  .then(function(results){
    res.setHeader('Content-Type', 'application/json')
    res.status(200).end(results)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });

}
