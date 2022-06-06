
function dropdown(){
    var x=document.getElementById("drop");
    if(x.className === "top-nav")
    {
        x.className += " responsive ";
        
    }
    else{
        x.className  = "top-nav"
        
    }


    var n=document.getElementById("type");
    if(n.className === "option")
    {
        n.className += " responsive2 ";
        
    }
    else{
        n.className  = "option"
        
    }

    var w=document.getElementById("CV");
    if(w.className === "dropdown")
    {
        w.className += " responsive3 ";
        
    }
    else{
        w.className  = "dropdown"
       
    }

    var w=document.getElementById("hidebtn");
    if(w.className === "btn")
    {
        w.className += " responsive3 ";
        
    }
    else{
        w.className  = "btn btn-show-all"
        
    }



}

function flowdown(){
   
    var y=document.getElementById("hidebtn");
    
    var x=document.getElementById("more");
    if(x.className === "more")
    {
        x.className += "skill";
        console.log("open");
        y.innerHTML="See few ^";
       
    }
    else{
        x.className  = "more"
        console.log("closed");
        y.innerHTML="See all->";
    }
}
function clicked()
{
    alert("Submitted successfully");
}



function certdown(){
   
    var a=document.getElementById("hidebtn2");
    
    var b=document.getElementById("show");
    if(b.className === "projects-grid2")
    {
        b.className += " show";
        console.log("all certficates");
        a.innerHTML="See few ^";
       
    }
    else{
        b.className  = "projects-grid2"
        console.log("Some certificates");
        a.innerHTML="See all->";
    }
}
function projectdown(){
   
    var p=document.getElementById("hidebtn3");
    
    var k=document.getElementById("show2");
    if(k.className === "projects-grid2")
    {
        k.className += " show2";
        console.log("all projects");
        p.innerHTML="See few ^";
       
    }
    else{
        k.className  = "projects-grid2"
        console.log("Some projects");
        p.innerHTML="See all->";
    }
}
