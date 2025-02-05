const app = require('../config/server');

function startServer() {
  const port = process.env.PORT || 3000;

  if (!app || typeof app.listen !== 'function') {
    console.error("❌ Error: app is not defined or listen() is not a function.");
    process.exit(1);
  }

  app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
  });
}

module.exports = startServer;
