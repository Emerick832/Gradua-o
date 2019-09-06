var botao = document.getElementById("calcular");
botao.addEventListener("click",calcular);

function calcular(){
	var salario = document.getElementById("salario").value;
	var sc= 0;
	
	if(salario<=1693.72) {
		sc = 0.08 * salario;
	}
	else if (salario<=2822.90){
		sc = 0.09 * salario;
	}
	else if (salario<=5645.80){
		sc= 0.11 * salario;
	}
	else 0;	

	document.getElementById("resultado").innerHTML=sc;
}