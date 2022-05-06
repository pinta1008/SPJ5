function Spremi()
{
    var Ime = $("#inptIme").val();
    var Prezime = $("#inptPrezime").val();
    var Jmbag = $("#inptJmbag").val();
    var Oib = $("#inptOib").val();
    var Datum = $("#inptDatum").val();
    var Adresa = $("#inptAdresa").val();
    var Postanski = $("#inptPostanski").val();
    var Grad = $("#inptGrad").val();

    if(Ime !=""&&Prezime!=""&&Jmbag!="-1"&&Oib!="-1"&&Datum!=""&&Adresa!=""&&Postanski!="-1"&&Grad!="")
    {
        var Student=
        {
            Ime:Ime,
            Prezime:Prezime,
            Jmbag:Jmbag,
            Oib:Oib,
            Datum:Datum,
            Adresa:Adresa,
            Postanski:Postanski,
            Grad:Grad
        }
        console.log(Student);
    }
    else
    {
        alert("Nije sve popunjeno!");
    }
    

}