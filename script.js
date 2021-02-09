//<div class="counter" data-target="500"></div>
const counters=document.querySelectorAll('.counter');
counters.forEach((counter)=>{
counter.innerHTML=0;
const updatecounter=()=>{
    const targetcount=Number(counter.getAttribute('data-target'));
    const startingcount=Number(counter.innerHTML);
    const incr=targetcount/100;
    if(startingcount<targetcount)
    {
        counter.innerHTML=`${startingcount+incr}` ;
        setTimeout(updatecounter, 1000);
    }
    else
    {
        startingcount=targetcount;
    }


}
updatecounter();



});