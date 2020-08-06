import axios from 'axios';

export function registerMessageHandler() {
    chrome.runtime.onMessage.addListener((request, _, sendResponse) => {
        if (request.name === 'axiosMessagingAdapterRequest') {
            // perform axios request in the background script
            axios(request.config)
                .then((response) => sendResponse({
                    response: {
                        data: response.data,
                        headers: response.headers,
                        status: response.status,
                        statusText: response.statusText,
                    }
                }))
                .catch((error) => sendResponse({error: {
                        message: error.message,
                        stack: error.stack,
                        fileName: error.fileName,
                    }}));

            return true;
        }

        return false;
    });
}
