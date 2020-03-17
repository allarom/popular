import googleTrends from 'google-trends-api'

export default (req, res) => {
  googleTrends.dailyTrends({ geo: 'CH' })
  .then(function(results){
    res.send(results)
  })
  .catch(function(err){
    console.error('Oh no there was an error', err);
  });

}