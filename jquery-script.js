//efeito de esconder formulário de cadastro

$(documen).ready(function(){

   
 $("botao-cadastrar").click(function(){

 

    $("form-cadastrar").slideToggle("slow");
    $("section-login").slideToggle("slow");
    $("botao-cadastrar").hide("");
});


});