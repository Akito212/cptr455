module.exports.index = function(req, res){ 
    res.render('index', { title: 'menu' }); 
   };

const index = (req, res) => {
    res.render('index', { title: 'Express' });
   };

   module.exports = {
    index
   };