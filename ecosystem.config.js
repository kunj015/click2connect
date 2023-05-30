module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : '139.84.140.94',
      ref  : 'origin/main',
      repo : 'https://github.com/kunj015/click2connect.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options':'ForwardAgent=yes'
    }
  }
};
