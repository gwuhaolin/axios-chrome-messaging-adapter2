### Quick start

If you are using a bundler, like webpack or rollup:, you'll just need to **`require`** the lib. If you are using a CDN, the lib will be available under **`window.axiosChromeMessagingAdapter`**.

In your **background** script:

```javascript
import axios from 'axios';
import { registerMessageHandler } from 'axios-chrome-messaging-adapter';

// register the adapter message hanlder
registerMessageHandler();
```

In your **content** script:

```javascript
import axios from 'axios'
import { adapter } from 'axios-chrome-messaging-adapter'

// tell axios to use the adapter for this request
const axiosInstance = axios.create({
  adapter,
  ... // the rest of your configuration :)
})
```
