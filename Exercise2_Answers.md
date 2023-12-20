2. Show the cross section of machines that are in computer group A and computer group B
 It will give cross join of computer of two Groups:

```(names of members of bes computer groups whose (name of it  is "test manual group"), names of members of bes computer groups whose (name of it  is "CLI Machines"))```

#### Updated query using sets
#### ```(names of elements whose(exists names whose(it = "test manual group") of bes computer groups of it) of bes computer set, names of elements whose(exists names whose(it = "CLI Machines") of bes computer groups of it) of bes computer set)```

Results: <br>
VMSIMCOECLI2,VMSIMCOECLI2 <br>
VMSIMCOECLI2,VMSIMCOECLI1 <br>
VMSIMCOECLI1,VMSIMCOECLI2 <br>
VMSIMCOECLI1,VMSIMCOECLI1 <br>
VMBFE02,VMSIMCOECLI2 <br>
VMBFE02,VMSIMCOECLI1 <br>
VMSIMCOESIM2,VMSIMCOECLI2 <br>
VMSIMCOESIM2,VMSIMCOECLI1 <br>
VMSIMCOESIM1,VMSIMCOECLI2 <br>
VMSIMCOESIM1,VMSIMCOECLI1 <br>

 It will give common computer names of two groups: 
 
```names of elements of intersection of ( member sets of bes computer groups whose (name of it  is "test manual group"); member sets of bes computer groups whose (name of it  is "CLI Machines"))```

Results:
VMSIMCOECLI2
VMSIMCOECLI1

3. Show A list of all individual CVEs within the enviornment 

```Q:unique values of substrings separated by " " of substrings separated by "," of  substrings separated by ";" of cve id lists of bes fixlets whose ( exists cve id lists of it )```

OR 

```Q:unique values of substrings separated by " " of substrings separated by "," of  substrings separated by ";" of cve id lists of bes fixlets whose ( exists cve id lists of it )  as trimmed string```

Note:  2nd solution will remove the unwanted space before and after a each CVE-ID


4. Show a listing of the individual CVEs and how many different fixlets have them associated... 


```Q:(it, multiplicity of it) of unique values of substrings separated by " " of substrings separated by "," of  substrings separated by ";" of cve id lists of bes fixlets whose ( exists cve id lists of it )```


6. Show me all Fixlets that have a CVE field that is not valid, and show me there value... 


 ```(name of it, cve id lists of it) of bes fixlets whose(cve id list of it does not contain "CVE-" and  cve id list of it does not contain "CAN-" )```
 
T:4.6100

Note: We are considering CVE Ids that start with CVE- and CAN- as valid one. We are considering Invalid CVE's as N/A, Unspecified, " " blank 

alternate solution: 

 ```(name of it, mime fields "x-fixlet-cve" of it) of bes fixlets whose(mime field "x-fixlet-cve" of it does not contain "CVE-" and mime field "x-fixlet-cve" of it does not contain "CAN-") ```

T:4.0720
