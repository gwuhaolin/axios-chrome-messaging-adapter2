For CORS request in chrome extensions,support chrome edge firefox.

### Quick start
In your **background** script:

```javascript
// register the adapter message hanlder
import 'axios-chrome-messaging-adapter2';
```

In your **content** script:

```javascript
import axios from 'axios'
import { adapter } from 'axios-chrome-messaging-adapter2'

// tell axios to use the adapter for this request
const axiosInstance = axios.create({
  adapter,
  ... // the rest of your configuration :)
})
```
