const { ExtractJwt, Strategy } = require('passport-jwt');
const _passport = require('passport');


// import strategy

const Auth = require('../models/auth');

module.exports = {

    passportAuthenticate: passport => {
        let opts = {};
        opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        opts.secretOrKey = 'secret_long_string';

        // used to serialize the user for the session
        passport.serializeUser(function(user, done) {
            done(null, user.id);
        });

        // used to deserialize the user
        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user) {
                done(err, user);
            });
        });


        passport.use(new Strategy(opts, async (jwt_payload, done) => {
            const { email } = jwt_payload;
            try {
                const user = await Auth.findOne({ email });

                if (!user) {
                    return done(null, false);
                }

                return done(null, user); // req.user
            } catch (e) {
                return done(e, false);
            }
        }));

    },
    authenticateUser: _passport.authenticate('jwt', { session: false }),
    authenticateRole: roles => (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Not authenticated' });
        }

        if (!roles.some(role => req.user.role === role)) {
            return res.status(401).json({ message: 'Not authenticated (role)' });
        }
        next();
    }
};
