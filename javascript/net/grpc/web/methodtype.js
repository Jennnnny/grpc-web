/**
 * @fileoverview Description of this file.
 */

goog.module('grpc.web.MethodType');

goog.module.declareLegacyNamespace();

/**
 * @enum {string}
 */
const MethodType = {
  'UNARY': 'unary',
  'SERVER_STREAMING': 'server_streaming'
};

exports = MethodType;
