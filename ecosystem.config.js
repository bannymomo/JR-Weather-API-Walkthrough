module.exports = {
  apps: [
    {
      name: "JR-Weather-API Walkthrough",
      script: "./src/index.js",
      instances: "max",
      env_production: {
        NODE_ENV: "production"
      }
    }
  ]
};
