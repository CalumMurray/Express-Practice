// Middleware for checking authentication on routes that require to be logged in

module.exports =
    function checkAuth(req, res, next) {
        if (!req.session.user) {
            req.flash('denied', 'Access Denied: Must be logged in');
            res.redirect('/login');
        } else {
            res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
            next();
        }
    };