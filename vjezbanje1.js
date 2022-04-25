$(document).ready (function () {

    var dugme = $('button'); //selektujemo nas button

    dugme.on ('click', function () { //dajemo mu funkciju na klik

        var unosnoPolje = $('#unosnoPolje').val(); //selektujem vrijednost onoga sto ukucamo u input i smijestamo u var unosnoPolje

        //regExp
        var unosnoPoljeReg = new RegExp (unosnoPolje,'g'); //g znaci global-sve sto je u jljucnoj rijeci pronadi mi ne samo po jednu vrijednost
        var sviElementi = $('p:contains('+unosnoPolje+')'); //u svim paragrafima zelim da mi se trazi ta rijec koju smo mi ukucali (to sto je u unosnoPolje)
        
        sviElementi.each (function (index,el) { //var svi Elementi dodjeljujemo each metodu.Koja svakoj rijeci ce da odradi funkciju


            //$(el).css ('background-color', 'red');

            var stariTekst =$(el).html(); //memorisemo u var stariTekst (ono sto smo pisali,zelimo to da stavimo u neki span)
            /*
            var noviTekst = stariTekst.replace(unosnoPolje,'gotovo'); //rijec koju unesemo ce dobiti naziv gotovo
            $(el).html(noviTekst);
            */

         /*
            var noviTekst = stariTekst.replace (unosnoPolje,'<span class="markiraj">'+unosnoPolje+'</span>'); //rijec koju ukucamo u inputu dobit ce span tag.Zamijenjena je sa starim tekstom
            $(el).html (noviTekst);
        */

          //vidjet cemo da do ove linije koda dobijamo kao rezultat samo po jednu rijec markiranu unutar paragrafa a ima ih vise
          //to cemo uraditi pomocu RegExp metode

         var noviTekst = stariTekst.replace(unosnoPoljeReg,'<span class="markiraj">'+unosnoPolje+'</span>');
         $(el).html(noviTekst);








        })

       







    });










});