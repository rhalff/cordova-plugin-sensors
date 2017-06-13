# Cordova Sensors Plugin

The sensors are capable of providing raw data with high precision and accuracy, and are useful if you want to monitor three-dimensional device movement or positioning, or you want to monitor changes in the ambient environment near a device. For example, a game might track readings from a device's gravity sensor to infer complex user gestures and motions, such as tilt, shake, rotation, or swing. Likewise, a weather application might use a device's temperature sensor and humidity sensor to calculate and report the dewpoint, or a travel application might use the geomagnetic field sensor and accelerometer to report a compass bearing.

At this moment this plugin is implemented only for Android!

## Demos

See in https://github.com/rhalff/cordova-plugin-sensors-demo

## Install

    $ cordova plugin add https://github.com/rhalff/cordova-plugin-sensors.git

## Methods

#### sensors.enable(sensors.ACCELERATOR)

Enable sensor.

#### sensors.disable(sensors.ACCELERATOR)

Disable sensor.

#### sensors.getState(sensors.ACCELERATOR, successCallBack)

Get state.

#### sensors.stop()

Stops listening to all sensors.

## Using in Ionic

```js
  APP.controller("indexController", function ($scope, $interval){

      function onSuccess(values) {
          $scope.state = values[0];
      };

      document.addEventListener("deviceready", function () {

        sensors.enableSensor("PROXIMITY");

        $interval(function(){
          sensors.getState(onSuccess);
        }, 100);


      }, false);

  });
```

## Sensors Types

```
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
```

For more information about sensors **Android** see [Android Sensors Overview](http://developer.android.com/guide/topics/sensors/sensors_overview.html)
