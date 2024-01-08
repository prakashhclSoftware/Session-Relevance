import axios from 'axios';

const apiUrl = 'https://10.134.137.148:8083/webreports';
const formData = new URLSearchParams({
  page: 'LoggingIn',
  Username: 'admin',
  Password: 'Bigfix@2018',
  fwdpage: '',
});

axios.post(apiUrl, formData, {
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
})
  .then(response => {
    // Check if the response contains cookies
    console.log(response)
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
