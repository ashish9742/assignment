/*var notes=[2000,1000,500,200,100,50,20,10,5,1];
var no=[0];
var amount,balance,bill;


function calculatechange(bill,amount)
{
    console.log("amount given is ", amount);

    balance=amount-bill;
    console.log("remaining balance is ",balance);
    

    for(var i=0;i<10;i++)
    {
        if(balance>=notes[i])
        {
             no[i]= parseInt(balance/notes[i]);
            balance=balance-no[i]*notes[i];
        }
    }
    for(i=0;i<10;i++)
    if(!no[i]==0){
    console.log(no[i] ,"*",notes[i]);}

}
calculatechange(650,2000); */
/*
var a=[1,2,8,3,4,4,7];
var b=[4,5,9,6];
var c=a.concat(b).sort();
console.log(c);
var res=c.filter((value,pos) => {
   console.log("pos" ,pos);
   console.log(value);
    return c.indexOf(value) == pos;} );
console.log(res);

*/
function union(a, b) {
    return a.concat(b).reduce(function(prev, cur) {
        console.log(cur);
        if (prev.indexOf(cur) === -1) prev.push(cur);
        return prev.sort();
    }, []);
}
var res= console.log(union([1,2,8,3,4,4,7],[4,5,9,6]));