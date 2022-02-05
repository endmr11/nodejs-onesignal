const { ONE_SIGNAL_CONFIG } = require("../config/app_config.js");
const pushNotificationService = require("../services/push_notification_services.js");

exports.SendNotification = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: "Test Push SendNotification" },
    included_segments: ["All"],
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "CUSTOM NOTIFICATİON",
    },
  };


  pushNotificationService.SendNotification(message, (err, results) => {
    if (err) {
      return next(err);
    }
    return res.status(200).send({
      message: "Succes",
      data: results,
    });
  });
};

exports.SendNotificationToDevice = (req, res, next) => {
  var message = {
    app_id: ONE_SIGNAL_CONFIG.APP_ID,
    contents: { en: "Test Push SendNotificationToDevice" },
    included_segments: ["Active Users"],
    included_player_ids: req.body.devices,
    content_available: true,
    small_icon: "ic_notification_icon",
    data: {
      PushTitle: "CUSTOM NOTIFICATİON",
    },
  };

  pushNotificationService.SendNotification(message, (err, results) => {
    if (err) {
      return next(err);
    }
    return res.status(200).send({
      message: "Succes",
      data: results,
    });
  });
};
