const {log} = require('console-log-colors');

const success = (...msg) => {
  log.green(...msg);
};

const danger = (...msg) => {
  log.red(...msg);
};

const warning = (...msg) => {
  log.yellow(...msg);
};

const info = (...msg) => {
  log.blue(...msg);
};

const debug = (...msg) => {
  log.gray(...msg);
};

const loading = (function() {
  const P = ['\\', '|', '/', '-'];
  let x = 0;
  return setInterval(function() {
    process.stdout.write('\r' + P[x++]);
    x &= 3;
  }, 250);
});

const stopLoading = (loadingId) => {
  clearInterval(loadingId);
  process.stdout.write('\r');
};

module.exports = {
  success,
  danger,
  warning,
  info,
  debug,
  loading,
  stopLoading,
};
