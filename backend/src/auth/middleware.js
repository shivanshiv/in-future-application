// Authentication middleware
// TODO: Implement JWT authentication middleware

export const authenticate = (req, res, next) => {
  // TODO: Verify JWT token
  // For now, just pass through
  next();
};

export const authorize = (roles = []) => {
  return (req, res, next) => {
    // TODO: Check user roles and permissions
    // For now, just pass through
    next();
  };
};