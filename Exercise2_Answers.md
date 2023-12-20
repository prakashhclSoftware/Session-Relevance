2. Show the cross section of machines that are in computer group A and computer group B
 It will give cross join of computer of two Groups:

```(names of members of bes computer groups whose (name of it  is "test manual group"), names of members of bes computer groups whose (name of it  is "CLI Machines"))```

Results:
VMSIMCOECLI2,VMSIMCOECLI2
VMSIMCOECLI2,VMSIMCOECLI1
VMSIMCOECLI1,VMSIMCOECLI2
VMSIMCOECLI1,VMSIMCOECLI1
VMBFE02,VMSIMCOECLI2
VMBFE02,VMSIMCOECLI1
VMSIMCOESIM2,VMSIMCOECLI2
VMSIMCOESIM2,VMSIMCOECLI1
VMSIMCOESIM1,VMSIMCOECLI2
VMSIMCOESIM1,VMSIMCOECLI1

 It will give common computer names of two groups: 
 
```names of elements of intersection of ( member sets of bes computer groups whose (name of it  is "test manual group"); member sets of bes computer groups whose (name of it  is "CLI Machines"))```

Results:
VMSIMCOECLI2
VMSIMCOECLI1

6. Show me all Fixlets that have a CVE field that is not valid, and show me there value... 


 ```(name of it, cve id lists of it) of bes fixlets whose(cve id list of it does not contain "CVE-" and  cve id list of it does not contain "CAN-" )```
 
T:4.6100

Note: We are considering CVE Ids that start with CVE- and CAN- as valid one. We are considering Invalid CVE's as N/A, Unspecified, " " blank 

alternate solution: 

 ```(name of it, mime fields "x-fixlet-cve" of it) of bes fixlets whose(mime field "x-fixlet-cve" of it does not contain "CVE-" and mime field "x-fixlet-cve" of it does not contain "CAN-") ```

T:4.0720
