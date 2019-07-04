"use strict";

const Trigger = global.TriggerClass;

class triggerServer extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  on_request(req) {
    let _this = this;

    const checkCalendar = true;
    const inputValues = {};
    const customValues = Object.assign(req.body, req.query);

    _this
      .startChain(checkCalendar, inputValues, customValues)
      .then(() => {})
      .catch(err => {
        _this.logger.error("startChain error (triggerServer):", err);
      });
  }
}

module.exports = triggerServer;
