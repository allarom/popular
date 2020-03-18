import googleTrends from 'google-trends-api'
module.exports = (req, res) => {
  googleTrends.dailyTrends({ geo: 'CH' })
  .then(function(results){
    res.status(200).send(results)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });
}