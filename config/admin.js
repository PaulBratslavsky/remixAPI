module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f934819ec859d0fb0f55164b7b7909f0'),
  },
});
