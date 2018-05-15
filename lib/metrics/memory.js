var pmx = require('pmx');
var os = require('os');

var Probe = pmx.probe();
var metrics = {};

function refreshMetrics() {
  const maxMem = parseInt(process.env.CONTAINER_SIZE || os.totalmem())

  const usedMem = Math.round(process.memoryUsage().rss / (1024 * 1024))
  const memSize = Math.round(maxMem / (1024 * 1024))
  metrics.freeMem.set(memSize - usedMem)
  metrics.memUsed.set(usedMem)
}

function initMetrics() {
  metrics.freeMem = Probe.metric({
    name: 'Free memory',
    value: 'N/A',
    alert: {
      mode: 'threshold-avg',
      value: 10,
      cmp: '<'
    }
  });

  metrics.memUsed = Probe.metric({
    name: 'Used memory',
    value: 'N/A'
  });
}

function init(conf) {
  initMetrics();
  refreshMetrics();
  setInterval(refreshMetrics.bind(this), conf.small_interval * 1000);
}

module.exports.init = init;
