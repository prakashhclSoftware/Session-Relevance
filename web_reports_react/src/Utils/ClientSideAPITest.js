import { relevanceQueries } from "./restAPITest.js";

const findRelevanceResults = ()=>{
    const queries = [
        'now',
        'now - (1 * day)',
        'number of bes fixlets',
        'number of bes computers',
        'number of bes sites',
        'number of bes users',
        'Names of Bes Computers',
        'Number of unique values of operating systems of bes computers',
        `maximum of unique values of last report times of bes computers whose (exist last report time of it)`,
        `sha1 of "ABC"`,
      ];

    queries.forEach( (value)=>{        
       relevanceQueries(value);
    }  )  

}
findRelevanceResults();
