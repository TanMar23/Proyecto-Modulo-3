// module.exports = checkRole = role => (req, res, next) => {
//     if (req.isAuthenticated()) {
//       if (req.user.role === role) {
//         next()
//       } else {
//         res.redirect('/auth/login')
//       }
//     } else {
//       res.redirect('/auth/login')
//     }
//   }