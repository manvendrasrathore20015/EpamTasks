const args = process.argv.slice(2);

if(args[1] === 'addition') {
    let sum=0;
    for(let i=2;i<args.length; i++) 
        sum+= Number(args[i]);
    console.log(sum);
}
else if(args[1] === 'multiply') {
    let multi=1;
    for(let i=2;i<args.length; i++) 
        multi*= Number(args[i]);
    console.log(multi);
}
else if(args[1] === 'subtraction') {
    if(args.length==4)
        console.log(args[2]-args[3]);
    else 
        console.log('Invalid Case !!');
}
else if(args[1] === 'division') {
    if(args.length==4)
        console.log(args[2]/ args[3]);
    else 
        console.log('Invalid Case !!');
}
else {
    console.log('Invalid Case !!');
}