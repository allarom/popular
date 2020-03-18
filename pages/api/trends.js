import googleTrends from 'google-trends-api'
import Cors from 'cors'


module.exports = (req, res) => {
  const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
  })

  googleTrends.dailyTrends({ geo: 'CH' })
  .then(function(results){
    console.log("req  trends", req)
    console.log("res  trends", res)
    console.log("results  trends", results)
    res.status(200).send(results)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });

}
