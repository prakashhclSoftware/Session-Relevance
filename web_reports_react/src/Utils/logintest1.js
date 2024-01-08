import fetch from 'node-fetch';// API endpoint URL

const loginUrl = 'https://10.134.137.148:8083/webreports';

const payload = {
  page: 'LoggingIn',
  fwdpage: '',
  Username: 'admin',
  Password: 'Bigfix@2018'
};
// Define the headers for the POST request
const headers = {};

headers['Accept'] = 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7';
headers['Accept-Encoding'] = 'gzip, deflate, br';
headers['Accept-Language'] = 'en-US,en;q=0.9';
headers['Cache-Control'] = 'max-age=0';
headers['Content-Type'] = 'application/x-www-form-urlencoded';
headers['Connection'] = 'keep-alive';
headers['Content-Length'] = payload.toString().length.toString();

// Add additional headers as needed
headers['Host'] = '10.134.137.148:8083';
headers['Origin'] = 'https://10.134.137.148:8083';
headers['Referer'] = 'https://10.134.137.148:8083/webreports';
headers['Sec-Ch-Ua'] = '"Not_A Brand";v="8", "Chromium";v="120", "Google Chrome";v="120"';
headers['Sec-Ch-Ua-Mobile'] = '?0';
headers['Sec-Ch-Ua-Platform'] = '"Windows"';
headers['Sec-Fetch-Dest'] = 'document';
headers['Sec-Fetch-Mode'] = 'navigate';
headers['Sec-Fetch-Site'] = 'same-origin';
headers['Sec-Fetch-User'] = '?1';
headers['Upgrade-Insecure-Requests'] = '1';
headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Now 'headers' is an object containing all the headers

const requestOptions = {
  method: 'POST',
  headers: headers,
  body: new URLSearchParams(payload).toString(),
  redirect: 'follow'
};

fetch(loginUrl, requestOptions)
  .then(response => {
    // Check if the response is a redirect (status code 302)
    if (response.redirected) {
        const setCookieHeaders = response.headers;
        console.log(response)

    } else {
      console.error('Login failed. No redirect detected.');
    }
  })
  .catch(error => console.error('Error during login:', error));
