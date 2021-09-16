import {PORT, NODE_ENV,API_URL,API_URL_TEST,IMAGE_URL,IMAGE_URL_TEST} from "@env"


export const env = NODE_ENV;
export const port = PORT || 5000;
export const apiUrl = NODE_ENV === 'production' ? API_URL : API_URL_TEST;
export const imageUrl = NODE_ENV === 'production' ? IMAGE_URL : IMAGE_URL_TEST;

console.log(apiUrl);

// thrid party service
export const google = {
    gaId: 'UA-89763523-14',
    gtagId: 'GTM-MNBGIOP',
    clientId: '880352599061-b6k9r1h8tg4godda1d6rrrcef1dp0s8e.apps.googleusercontent.com',
    clientSecret: 'PmozeDpuBuZGzZmsiEy9DQAg'
};

export const facebook = {
    appId: '335194247449366',
    appVersion: 'v8.0',
    accountKitVersion: 'v8.0',
    pixelId: '5678909432212'
};
