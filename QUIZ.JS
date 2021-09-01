var value=0;
function increase()
{
    value++;
    alert("Correct Answer");
}
function wrong()
{
   alert("Wrong Answer");
}
function result()
{
    s="YOUR SCORE IS ...."+value+"/5.";
    document.getElementById("result").innerHTML=s;
    value=0;
}

