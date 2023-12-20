2. Show the cross section of machines that are in computer group A and computer group B
 It will give cross join of computer of two Groups:

```(names of members of bes computer groups whose (name of it  is "test manual group"),
names of members of bes computer groups whose (name of it  is "CLI Machines"))```

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
