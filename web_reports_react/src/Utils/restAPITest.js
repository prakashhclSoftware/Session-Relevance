import axios from 'axios';
import { parseString } from 'xml2js';

const parseXml= (xmlString)=> {
    return new Promise((resolve, reject) => {
      parseString(xmlString, { explicitArray: false }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

export const relevanceQueries = (relevanceQuery)=>{
    const username = 'admin';
    const password = 'Bigfix@2018';   
    const apiUrl = `https://10.134.137.148:52311/api/query?relevance=${relevanceQuery}`;

    axios({
    method: 'get', 
    url: apiUrl,
    auth: {
        username: username,
        password: password
    },
    })
    .then(response => {
        // console.log(response)
        return parseXml(response.data);
    })
    .then(result => {
        // Access the content inside the Answer tag
        const answerContent = result.BESAPI.Query.Result.Answer._;
        console.log('Query: ', relevanceQuery)
        console.log('Answer Content:', answerContent);
        console.log('\n')
      })
    .catch(error => {
        console.error('Error:', error.message);
    });

}
