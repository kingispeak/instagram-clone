module.exports = {
    apps : [{
        name: 'SERVICE_NAME',
        script: 'app.js',
        env: {
            NODE_ENV: 'development',
        },
        env_production : {
            NODE_ENV: 'production',
        }
    },],

    // Deployment Configuration: https://pm2.keymetrics.io/docs/usage/deployment/
    deploy : {
        "dev": {
            "host": "[localhost]",
            "ref": "origin/main",
            "repo": ".",
            "path": "./",
            "post-deploy": "npm rebuild --update-binary && pm2 startOrRestart ecosystem.json --env dev",
            "env": {
                "NODE_ENV": "dev"
            }
        },
        "production" : {}
    }
}