//--------- OCULTAR LAS SECCIONES DE LA PÁGINA Y DEJAR LA SELECCIONADA
$(document).ready(SoloInicio());
function SoloInicio() {
	$( "#programas" ).hide();
	$( "#trabajos" ).hide();
	$( "#contacto" ).hide();
	$( "#inicio" ).show();
}
function SoloProgramas() {
	$( "#inicio" ).hide();
	$( "#trabajos" ).hide();
	$( "#contacto" ).hide();
	$( "#programas" ).show();
}
function SoloTrabajos() {
	$( "#inicio" ).hide();
	$( "#programas" ).hide();
	$( "#contacto" ).hide();
	$( "#trabajos" ).show();
}
function SoloContacto() {
	$( "#inicio" ).hide();
	$( "#programas" ).hide();
	$( "#trabajos" ).hide();
	$( "#contacto" ).show();
}
//--------- MOVIMIENTO DE LOS CIRCULOS INFORMATIVOS DEL INDEX (INICIO)
$( "#uno" ).hover(
  function() {
    $( this ).addClass('animated tada');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated tada');		  
	  });
  }
);
$( "#dos" ).hover(
  function() {
    $( this ).addClass('animated tada');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated tada');		  
	  });
  }
);
$( "#tres" ).hover(
  function() {
    $( this ).addClass('animated tada');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated tada');		  
	  });
  }
);
$( "#cuatro" ).hover(
  function() {
    $( this ).addClass('animated tada');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated tada');		  
	  });
  }
);
//--------- MOVIMIENTO DE LOS ICONOS DE REDES SOCIALES Y GITHUB
$( "#facebook img" ).hover(
  function() {
    $( this ).addClass('animated swing');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated swing');		  
	  });
  }
);
$( "#linkedin img" ).hover(
  function() {
    $( this ).addClass('animated swing');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated swing');		  
	  });
  }
);
$( "#twitter img" ).hover(
  function() {
    $( this ).addClass('animated swing');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated swing');		  
	  });
  }
);
$( "#youtube img" ).hover(
  function() {
    $( this ).addClass('animated swing');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated swing');		  
	  });
  }
);
$( "#github img" ).hover(
  function() {
    $( this ).addClass('animated swing');
	  $( this ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
		  $( this ).removeClass('animated swing');		  
	  });
  }
);