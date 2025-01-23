class errorResponse extends Error {
    constructor(message, statusCode) {
      super(message); // Call the parent constructor (Error class)
      this.statusCode = statusCode;
    }
  }
  
  module.exports = errorResponse;
  