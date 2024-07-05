let {StatusCode,StatusMessage}=require('./src/status_code');
let {isSuccess,isRedirect,isClientError,isServerError}=require('./src/useful_functions');

module.exports={StatusCode,StatusMessage,isSuccess,isRedirect,isClientError,isServerError}