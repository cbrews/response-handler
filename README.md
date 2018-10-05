# Response Handler

## Usage

```
const expressApp = require('express')()

expressApp.get('/myroute', responseHandler((req, resp) => {
  // error
  throw new HttpError(404);

  // success
  return {success: true}
});
```

## Dependencies
Peer dependency: node-http-error
