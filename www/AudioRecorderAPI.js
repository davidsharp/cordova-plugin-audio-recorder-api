function AudioRecorderAPI() {
}

AudioRecorderAPI.prototype.record = function (duration) {
  return new Promise(function(resolve, reject){
    cordova.exec(resolve, reject, "AudioRecorderAPI", "record", duration ? [duration] : []);
  });
};

AudioRecorderAPI.prototype.stop = function () {
  return new Promise(function(resolve, reject){
    cordova.exec(resolve, reject, "AudioRecorderAPI", "stop", []);
  });
};

AudioRecorderAPI.prototype.playback = function () {
  return new Promise(function(resolve, reject){
    cordova.exec(resolve, reject, "AudioRecorderAPI", "playback", []);
  });
};

AudioRecorderAPI.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.audioRecorderAPI = new AudioRecorderAPI();
  return window.plugins.audioRecorderAPI;
};

cordova.addConstructor(AudioRecorderAPI.install);
