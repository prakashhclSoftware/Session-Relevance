1. Tell me all properties names that have "OS" in the name (ensure the test is case insensitive)

    ```names of bes properties whose (name of it as lowercase contains "os")```

2. Tell me the source, source sev, name and release date for all fixlets within the patches for win site (also known as Enterprise Security)

  ```(source of it, source severity of it, name of it,source release dates of it) of bes fixlets whose (name of site of it as string is "Enterprise Security")```

3. Tell me all machines in a group (Create a computer group named "My Group", place the group within your master action site, and define with a relevance of True)

  ```names of members of bes computer group whose (name of it as string is "My Group")```

4. Tell me how many machines per OS (Hint: It, multiplicity of it of unique values of ____________)

  ```(it, multiplicity of it) of unique values of  operating systems of bes computers```

6. Tell me what machines are duplicates within your environment...

  ```names of unique values whose (multiplicity of it > 1) of bes computers```
 
7. Tell me what machines within a group are vulnerable for said fixlet (choose a fixlet within the BES support site that is relevant to all your machines)
   
  ```names of applicable computers whose ( exists names whose (it as string is "My Group") of bes computer group of it ) of bes fixlets whose(name of site of it as string is "BES Support" and id of it = 3172)```
 
8. Tell me the source, source sev, name and release date for all fixlets within the patches for win site AND are a member of group X
 
  ```(source of it, source severity of it, name of it,source release dates of it) of bes fixlets whose (name of site of it as string is "Enterprise Security" and  exists bes computer group whose (name of it as string is "X" and exists site whose (name of it is "Enterprise Security") of it ))```
 
9. Tell me what machines within a group are vulnerable for said CVE (Hint: a CVE is a mime field within a given fixlet)
    
  ```names of bes computer whose (exists bes computer group of it and exists relevant fixlets whose(cve id list of it contains "CVE-2023-20588") of it)```

12. Tell me what machines of a computer group are relevant to a given patch... Show me 2 ways... WHAT ARE OUR OPTIONS? What sucks less... And why is this a painful query?

    ``` names of applicable computers whose(name of bes computer group of it as string is "My Group") of bes fixlets whose(id of it =503337105) ```
    
  T:0.4140
     OR

    ``` names of members whose(exists id whose(it = 503337105) of relevant fixlets of it) of bes computer group whose(name of it as string is "My Group") ```

  T:0.4090
Execution time is less for 2nd query. 
  
