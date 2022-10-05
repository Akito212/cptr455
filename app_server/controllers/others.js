  /* GET homepage */
  module.exports.index = function(req, res){ 
    res.render('index', { title: 'othera' }); 
   };
const index = (req, res) => {
    res.render('index', { title: 'Express' });
   };

   module.exports = {
    index
   };