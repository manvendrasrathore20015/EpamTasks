const args = process.argv.slice(2);
let flag=0; // for cases input ...
if(args[0]=="operation") { 
    if(args[1]==='addition' && args[3]!= undefined) {
        flag=1;
        let sum=0;
        for(let i=2;i<args.length; i++) 
            sum+= Number(args[i]);
        if(!IntegerCheck(sum))
            console.log(sum)
        else
            return;
    }
    else if(args[1] === 'multiply'&& args[3]!= undefined) {
        flag=1;
        let multi=1;
        for(let i=2;i<args.length; i++) 
            multi*= Number(args[i]);
        if(!IntegerCheck(multi))
            console.log(multi)
        else
            return;

    }
    else if(args[1] === 'subtraction') {
        flag=1;
        if((args.length==4))
        {
            if(!IntegerCheck(args[2]-args[3]))
                console.log(args[2]-args[3]);
            else
                return;
        }
        else 
            console.log('Invalid Case !! - 2 inputs required ..');
    }
    else if(args[1] === 'division') {
        flag=1;
        if(args.length==4) {
            n = +args[3];
            if (!n) {  // Matches +0, -0, NaN
                console.log('Invalid dividend ' + n);
                }
            else {
                if(!IntegerCheck(args[2]/args[3])) 
                        console.log(args[2]/args[3]);
                else
                    return;
            }
        }
        else 
            console.log('Invalid Case !! - 2 inputs required ..');
    }
    else {
        console.log('Invalid Case !!');
        if(args[3]==undefined)
            console.log("More than 1 input required");
        }
        if(!flag)
            console.log("case must be either 'addition', 'subtraction', 'divide' or 'multiply'")
        

    function IntegerCheck(num) {
        if(isNaN(num)) {
            console.log("Invalid Case :- all inputs must be number");
            return true;
        }
        return false;
    }
}
else   
    console.log("1st input must be 'operation' ..");
