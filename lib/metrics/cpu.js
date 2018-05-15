import pmx from 'pmx'
import pidusage from 'pidusage'

var probe = pmx.probe();
var metrics = {};

function refreshMetrics(interval) {
  setTimeout(function () {
    pidusage.stat(process.pid, function (err, stat) {
      if (err) {
        console.error(err)
      }
      metrics.cpuResult.set(Math.round(stat.cpu) + '%');
    })
    setTimeout(function () { refreshMetrics(interval); }, interval * 1000);
  }, 100);
}

function initMetrics() {
  metrics.cpuResult = probe.metric({
    name: 'CPU',
    value: 'N/A',
    alert: {
      mode: 'threshold-avg',
      value: 90,
      interval: 100,
      cmp: '>'
    }
  });
}

function init(conf) {
  initMetrics();
  refreshMetrics(conf.small_interval);
}

module.exports.init = init;
