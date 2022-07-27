let y =200//this variable is declared to hold the amount of iterations

for (let i =1;i<=y;i++)

    {

    if(i % 6 == 0 && i % 8 == 0) //to test for numbers that are divisible by 6 and 8
    {

        console.log('ShamsTIIDELAB')

    }else
    if(i % 6 == 0 )//to test for numbers that are divisible by 6 
    {

        console.log('Shams')

    }else 
    if(i % 8 == 0)//to test for numbers that are divisible 8
    {

        console.log('TIIDELAB')
    } 
    //else if(i%6==0 && i%8==0){
    //     console.log('ShamsTIIDELAB')
    // }
    else{
        console.log(i)
    }
}
