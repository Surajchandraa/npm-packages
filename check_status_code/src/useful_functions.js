
  function isSuccess(code) {
    return code >= 200 && code < 300;
  }
  
  function isRedirect(code) {
    return code >= 300 && code < 400;
  }
  
  function isClientError(code) {
    return code >= 400 && code < 500;
  }
  
  function isServerError(code) {
    return code >= 500 && code < 600;
  }

module.exports={isSuccess,isRedirect,isClientError,isServerError};