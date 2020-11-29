'use strict';

const Trigger = require('@runnerty/module-core').Trigger;

class triggerServer extends Trigger {
  constructor(chain, params) {
    super(chain, params);
  }

  on_request(req) {
    const checkCalendar = true;
    const inputValues = {};
    const customValues = Object.assign(req.body, req.query);

    this.startChain(checkCalendar, inputValues, customValues)
      .then(() => { })
      .catch(err => {
        this.logger.error('startChain error (triggerServer):', err);
      });
  }
}

module.exports = triggerServer;
