$("#opcije").change(function () {
    
    if($("#opcije").val() == "email")
    {
        console.log("email je");
        $('input').attr("type","email");
        
    }

    if($("#opcije").val() == "password")
    {
        console.log("password je");
        $('input').attr("type","password");
    }

    if($("#opcije").val() == "number")
    {
        console.log("number je");
        $('input').attr("type","number");
    }

    if($("#opcije").val() == "text")
    {
        console.log("text je");
        $('input').attr("type","text");
    }
}); 


$("#spremi").click(function()
{
    var unos = $("#unos").val();
    if($("#opcije").val() == "email")
    {
        var spremi = (JSON.stringify({email: unos}));
        
    }

    if($("#opcije").val() == "password")
    {
        var spremi = (JSON.stringify({password: unos}));
    }

    if($("#opcije").val() == "number")
    {
        var spremi = (JSON.stringify({number: parseInt(unos)}));
    }

    if($("#opcije").val() == "text")
    {
        var spremi = (JSON.stringify({text: unos}));
    }


    function spremaj(content, imeFilea, tip) {
        const a = document.createElement("a");
        const file = new Blob([content], { type: tip });
        a.href = URL.createObjectURL(file);
        a.download = imeFilea;
        a.click();
       }

        spremaj(spremi, "zad8.json", "text/plain");
    
})





   


