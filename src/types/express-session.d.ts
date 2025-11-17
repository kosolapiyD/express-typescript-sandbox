import 'express-session';

// Extend express-session types
// By default TS does not know about our custom session properties
// So we declare a module augmentation here
declare module 'express-session' {
  interface SessionData {
    userId?: number;
    isAdmin?: boolean;
    views?: number;
  }
}
