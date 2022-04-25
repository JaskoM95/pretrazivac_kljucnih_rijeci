
$(document).ready (function () {



    var btn = $('button');
    
    
    btn.on ('click',function() {
        var uzmi_iz_inputa = $ ('#searchField').val(); 
       
        var uzmi_iz_inputa_REG = new RegExp (uzmi_iz_inputa,'g'); 
    
        var sviElementi = $('p:contains('+uzmi_iz_inputa+')'); 
       
      
       sviElementi.each (function (index,el)  { 
    
    

    
        var stariText = $(el).html();

        var noviText = stariText.replace(uzmi_iz_inputa_REG,'<span class="selektovano"> '+uzmi_iz_inputa+' </span>');
         $(el).html (noviText);
       })
    
    
    
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    })
    