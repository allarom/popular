import googleTrends from 'google-trends-api'
import Cors from 'cors'


module.exports = (req, res) => {
  const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
  })
  console.log("req trends", req)
  console.log("res trends", res)

    res.json({
      body: req.body,
      query: req.query,
      cookies: req.cookies
    })

  // googleTrends.dailyTrends({ geo: 'CH' })
  // .then(function(results){
  //   res.status(200).end(results)
  // })
  // .catch(function(err){
  //   console.error('Oh no there was an error', err);
  // });

}
