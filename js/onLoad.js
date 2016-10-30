$(function() {
	//Chargement à la page du menu et de l'entête
	$("#business").append('<div class="brand">Céline Vallet - Ostéopathe D.O.</div><div class="address-bar">25-27 rue Gérard Blot | 33400 Talence | 06.52.66.35.91</div>');
	$("#menu").append('<nav class="navbar navbar-default" role="navigation"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="index.html">Céline Vallet Ostéopathe D.O.</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li><a href="index.html">Accueil</a></li><li><a href="osteopathie.html">L\'ostéopathie</a></li><li><a href="informations.html">Infos Pratiques</a></li><li><a href="contact.html">RDV en ligne</a></li></ul></div></div></nav>');
	
	$( "#buttonContact" ).click(function() {
		var name = $("#nomContact").val();
		var phone = $("#telContact").val();
		var mail = $("#mailContact").val();
		var message = $("#areaContact").val();

		if(false)
			alert("Merci de remplir tous les champs pour valider.");
		else{
			$.ajax({
       			url : '../send_mail.php',
       			type : 'POST', // Le type de la requête HTTP, ici devenu POST
       			data : 'mail=' + mail + '&phone=' + phone + '&name=' + name+ '&message=' + message, // On fait passer nos variables, exactement comme en GET, au script more_com.php
       			dataType : 'html'
    		});
		}
	});

}); 