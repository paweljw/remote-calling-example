/* global XMLHttpRequest, Event */

const URL = 'http://poloniex.com/public/?command=returnTicker'
const METHOD = 'GET'

module.exports = {
  fetch: function () {
    var req = new XMLHttpRequest()
    req.responseType = 'json'
    req.open(METHOD, URL, true)
    var doneEvent = new Event('example:fetched')

    req.onreadystatechange = function (aEvt) {
      if (req.readyState === 4) {
        if (req.status === 200) {
          this.data = req.response
        } else {
          this.error = true
        }
        window.dispatchEvent(doneEvent)
      }
    }.bind(this)

    req.send(null)
  },
  error: false,
  data: {}
}
