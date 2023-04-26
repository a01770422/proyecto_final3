function mostrar(){
	document.f_contra.c_pass.type="text";
}

function ocultar(){
	document.f_contra.c_pass.type="password";
}

function enviar(){
	intentos=document.f_contra.c_cta.value;
	intentos=parseInt(intentos);
	c_cta=document.f_contra.c_cta.value;
	c_pass=document.f_contra.c_pass.value;
	if (c_cta.length==0){
	alert("ERROR, SE DEBE ENVIAR LA CUENTA");
	document.f_contra.c_cta.style.background="red";
	}
	else{
		if(c_pass.length==0){
			alert("Error, se debe indicar la contraseña");
			document.f_contra.c_pass.style.background="red";
		}
		else{
			intentos++;
			document.f_contra.intentos.value=intentos;
			if ((c_cta=="zeuss") && (c_pass=="pasale")){
				location.href="index_proy.html";
			}
			else{
				alert("Acceso denegado");
				if (intentos==3){
					alert("se han agotado los intentos");
					document.f_contra.c_cta.disabled="true";
					document.f_contra.c_cta.style.background="gray";
					document.f_contra.c_pass.disabled="true";
					document.f_contra.c_pass.style.background="gray";
				}//if de intentos

			}//if de cuenta y contraseña

		}//if de longitud password	
	
	}//if longitud cuenta

}//termina la función

function campos_azules(){
	document.f_contra.c_cta.style.background="blue";
	document.f_contra.c_pass.style.background="blue";
}