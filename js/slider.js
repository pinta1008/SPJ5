
    function Next()
    {
        var current_image = $("#slika").attr("data-slika-id");
        var next_image = Number(current_image)+1;
        console.log(next_image);
        if(next_image > 5)
        {
            next_image = 1;
        }
        $("#slika").attr("src","img/slider_"+next_image+".jpg");
        $("#slika").attr("data-slika-id",next_image);
    };
    function Prev()
    {
        var current_image = $("#slika").attr("data-slika-id");
        var next_image = Number(current_image)-1;
        if(next_image < 1)
        {
            next_image = 5;
        }
        $("#slika").attr("src","img/slider_"+next_image+".jpg");
        $("#slika").attr("data-slika-id",next_image);
    };
