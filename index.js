/**
 * @function responseHandler
 * @author cbrousseau
 * @param {function} fn
 * @return {Promise}
 *
 * Elegantly handles server responses
 */
module.exports = function responseHandler(fn) {
  return (req, resp) => Promise.resolve()
      .then(() => fn(req, resp))
      .then((result) => resp.status(200).json(result))
      .catch((err) => {
        resp.status(err.status || 500).json({
          error: err.name,
          message: err.message,
          details: err.stack,
        });
      });
};
