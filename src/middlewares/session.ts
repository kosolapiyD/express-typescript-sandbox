import session from 'express-session';

const isProd = process.env.NODE_ENV === 'production';

export const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET || 'dev-secret-change-me',
  resave: false,
  saveUninitialized: false,

  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60,
    secure: isProd,
    sameSite: isProd ? 'strict' : 'lax',
  },

  // recommended for production
  proxy: isProd, // trust reverse proxy (NGINX, Heroku, etc.)
});
