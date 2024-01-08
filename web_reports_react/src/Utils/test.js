import fetch from 'node-fetch';// API endpoint URL
const apiUrl = 'https://10.134.137.148:8083/json/relevance';

// Payload data
const payload = {
  expr: 'Names of Bes Computers'
};

// Convert payload to URL-encoded form data
const formData = new URLSearchParams();
for (const key in payload) {
  formData.append(key, payload[key]);
}

// Make the POST request
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': '*/*',
    'Cookie': 'BESReportsLoginUsername=admin; BESReportsLoginUserID=2; BESLoginMethod=UserPass; BESReportsLoginSession=QwXpHqshyjF0ukNHYnU9nmEDJp8',
    // Add other headers if needed
  },
  body: formData,
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the API response data
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
