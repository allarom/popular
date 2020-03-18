import googleTrends from 'google-trends-api'
import Cors from 'cors'


module.exports = (req, res) => {
  const cors = Cors({
    methods: ['GET', 'HEAD', 'POST'],
  })

  googleTrends.dailyTrends({ geo: 'CH' })
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });

}
