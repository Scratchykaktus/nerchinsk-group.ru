
function foo(bb, aa){

   
    for (var i=1;i<4;i++)
    {
        var c='text'+i;
       
        var a=document.getElementById(c);
        a.style.display='none';

        var cilka_m = document.getElementById(aa);
        cilka_m.style.fontWeight= "bold";
    };

    var b=document.getElementById(bb);
    b.style.display='block';

    return false;
}


function show_call_back(aa){

    var FormCallBack = document.getElementById(aa);

    
    FormCallBack.style.display = "block";
    

}

function close_call_back(aa){

    var FormCallBack = document.getElementById(aa);

    // FormCallBack.style.display = "none";
  

}
