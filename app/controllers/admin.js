

/*
|--------------------------------------------------------------------------
| Admin Controller
|--------------------------------------------------------------------------
*/

exports.getIndex = function(req, res) {
	res.render('admin/index', { user : req.user });
}