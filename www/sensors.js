/*global cordova, module*/

module.exports = {
  // Android Standard
  ACCELEROMETER: 1,
  ALL: -1,
  AMBIENT_TEMPERATURE: 13,
  DEVICE_PRIVATE_BASE: 65536,
  GAME_ROTATION_VECTOR: 15,
  GEOMAGNETIC_ROTATION_VECTOR: 20,
  GRAVITY: 9,
  GYROSCOPE: 4,
  GYROSCOPE_UNCALIBRATED: 16,
  HEART_BEAT: 31,
  HEART_RATE: 21,
  LIGHT: 5,
  LINEAR_ACCELERATION: 10,
  MAGNETIC_FIELD: 2,
  MAGNETIC_FIELD_UNCALIBRATED: 14,
  MOTION_DETECT: 30,
  ORIENTATION: 3,
  POSE_6DOF: 28,
  PRESSURE: 6,
  PROXIMITY: 8,
  RELATIVE_HUMIDITY: 12,
  ROTATION_VECTOR: 11,
  SIGNIFICANT_MOTION: 17,
  STATIONARY_DETECT: 29,
  STEP_COUNTER: 19,
  STEP_DETECTOR: 18,
  TEMPERATURE: 7,

  // Epson Moverio
  HEADSET_TAP: 8193,
  HEADSET_FREE_FALL: 8194,
  HEADSET_MOVE_STATE: 8195,
  HEADSET_VEHICLE_STATE: 8196,

  CONTROLLER_MAGNETIC_FIELD: 1048578,
  CONTROLLER_ACCELEROMETER: 1048577,
  CONTROLLER_GYROSCOPE: 1048580,
  CONTROLLER_ROTATION_VECTOR: 1048587,

  getSensorList: function(successCallback) {
      cordova.exec(successCallback, null, "Sensors", "getSensorList", []);
  },

  getState: function(SensorType, successCallback) {
      cordova.exec(successCallback, null, "Sensors", "getState", [SensorType]);
  },

  enable: function(SensorType) {
      cordova.exec(null, null, "Sensors", "enable", [SensorType]);
  },

  disable: function(SensorType) {
      cordova.exec(null, null, "Sensors", "disable", [SensorType]);
  }
};

