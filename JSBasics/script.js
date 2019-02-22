/*//decision making
var age=18
if( age<18)
{
    console.log("minor");
}
else if(age>=18){
console.log("major");
}
age>=18?console.log("major"):console.log("minor");

//function
function abc(fname,lname)
{
    console.log(fname+'  '+lname);
}
abc('adc','bnm');

//arrays


console.log(names[2]);
console.log(names.length);




var names=['abc','def','ghi'];
names.push('liki');
names.unshift('bnmit');
names.pop();
console.log(names);
*/
var tot=['124','48','268'];
var tip1,tip2,tip3;
for( i=0;i<3;i++)
{

if(tot[i]<50)
{
tip1=(20/100)*tot[i];
console.log(tip1);
}
if(tot[i]>50 && tot[i]<200)
{
tip2=(15/100)*tot[i];
console.log(tip2);
}
if(tot[i]>200)
{
tip3=(10/100)*tot[i];
console.log(tip3);

}


}

var tiparray=[],tipw=[],totalbill=[];
console.log("The bills are:");
tipw.push(tot[0]);
tipw.push(tot[1]);
tipw.push(tot[2]);
console.log(tipw);
console.log("The tips are:");
tiparray.push(tip1);
tiparray.push(tip2);
tiparray.push(tip3);
console.log(tiparray);
console.log("The total bill(tip+bill) :");
 var totalbill1=tip1+124;
 var totalbill2=tip2+48;
 var totalbill3=tip3+268;
totalbill.push(totalbill1);
totalbill.push(totalbill2);
totalbill.push(totalbill3);
console.log(totalbill);


/*
var myDetails={
    fname:'likhita',
    lname:'B',
    dob:1997,
    calage:function(birthyear){
        return 2019-birthyear;
    }
};
console.log(myDetails.fname);
var z='dob';
console.log(myDetails[z]);

myDetails.dob=1998;
console.log(myDetails);

//new object

var bnm=new Object();
bnm.fname='qwerty';
console.log(bnm);
console.log('liki is'+myDetails.calage(1997)+"old")
*/