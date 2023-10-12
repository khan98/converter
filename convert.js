var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue,resultTypeValue;


input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

inputTypeValue = inputType.value;
inputTypeValue = resultType.value;

function myResult(){ 
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;  

    if(inputTypeValue === "meter"){
		if(resultTypeValue==="kilometer"){
			//this is meter to kilometer formula 
			result.value = Number(input.value) * 0.001;
		}else if(resultTypeValue==="centimeter"){
	
			//this is meter to Centimeter formula 
			result.value = Number(input.value) * 100;
	
		}else if(resultTypeValue==="meter"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else if(resultTypeValue==="miles"){
			//this is meter to meter formula 
			result.value = (Number(input.value) / 1609.34).toFixed(5);
		}
		else{
			result.value = "N/A";
		}
	}
	if(inputTypeValue === "kilometer"){
		if(resultTypeValue==="meter"){
			//this is meter to kilometer formula 
			result.value = Number(input.value) * 1000;
		}else if(resultTypeValue==="centimeter"){
	
			//this is meter to Centimeter formula 
			result.value = Number(input.value) * 100000;
	
		}else if(resultTypeValue==="meter"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else if(resultTypeValue==="miles"){
			//this is meter to meter formula 
			result.value = (Number(input.value) * 0.621371).toFixed(5);
		}
		else{
			result.value = "N/A";
		}
	}
	if(inputTypeValue === "miles"){
		if(resultTypeValue==="meter"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) * 1609.34);
		}else if(resultTypeValue==="centimeter"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) * 160934.4);
	
		}else if(resultTypeValue==="meter"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else if(resultTypeValue==="kilometer"){
			//this is meter to meter formula 
			result.value = (Number(input.value) * 1.60934).toFixed(3);
		}
		else{
			result.value = "N/A";
		}
	}
	if(inputTypeValue === "centimeter"){
		if(resultTypeValue==="meter"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) / 100);
		}else if(resultTypeValue==="kilometer"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) / 1000);
	
		}else if(resultTypeValue==="centimeter"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else if(resultTypeValue==="miles"){
			//this is meter to meter formula 
			result.value = (Number(input.value) / 160934.4).toFixed(3);
		}
		else{
			result.value = "N/A";
		}
	}
	if(inputTypeValue === "celsius"){
		if(resultTypeValue==="kelvin"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) + 273.15);
		}else if(resultTypeValue==="fahrenheit"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) * 9/5 + 32);
	
		}else if(resultTypeValue==="celsius"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}

	if(inputTypeValue === "fahrenheit"){
		if(resultTypeValue==="kelvin"){
			//this is meter to kilometer formula 
			result.value = ((Number(input.value) - 32) *5/9 + 273.15);
		}else if(resultTypeValue==="celsius"){
			
			//this is meter to Centimeter formula 
			result.value = ((Number(input.value) - 32) * 5/9);
	
		}else if(resultTypeValue==="fahrenheit"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}

	if(inputTypeValue === "kelvin"){
		if(resultTypeValue==="celsius"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) - 273.15);
		}else if(resultTypeValue==="fahreinheit"){
			
			//this is meter to Centimeter formula 
			result.value = ((Number(input.value) - 273.15) * 9/5 + 32);
	
		}else if(resultTypeValue==="kelvin"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}
	if(inputTypeValue === "kg"){
		if(resultTypeValue==="lbs"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value)*2.20462);
		}else if(resultTypeValue==="kg"){
			//this is meter to meter formula 
			result.value = input.value;
		}
	}

	if(inputTypeValue === "lbs"){
		if(resultTypeValue==="kg"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value)/2.20462);
		}else if(resultTypeValue==="lbs"){
			//this is meter to meter formula 
			result.value = input.value;
		}
	}

	if(inputTypeValue === "kph"){
		if(resultTypeValue==="mph"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) / 1.609);
		}else if(resultTypeValue==="mps"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) / 3.6);
	
		}else if(resultTypeValue==="kph"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}

	if(inputTypeValue === "mph"){
		if(resultTypeValue==="kph"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) * 1.609);
		}else if(resultTypeValue==="mps"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) / 2.237);
	
		}else if(resultTypeValue==="mph"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}

	if(inputTypeValue === "mps"){
		if(resultTypeValue==="kph"){
			//this is meter to kilometer formula 
			result.value = (Number(input.value) * 3.6);
		}else if(resultTypeValue==="mph"){
			
			//this is meter to Centimeter formula 
			result.value = (Number(input.value) * 2.237);
	
		}else if(resultTypeValue==="mps"){
			//this is meter to meter formula 
			result.value = input.value;
		}
		else{
			result.value = "N/A";
		}
	}

/*	if(inputTypeValue === "centimeter" && resultTypeValue==="kilometer"){
		//this is Centimeter to kilometer formula 
		result.value = Number(input.value) * 0.00001;
	}else if(inputTypeValue === "centimeter" && resultTypeValue==="meter"){
		//this is Centimeter to meter formula 
		result.value = Number(input.value) * 0.01;
	}else if(inputTypeValue === "centimeter" && resultTypeValue==="centimeter"){
		//this is Centimeter to Centimeter formula 
		result.value = input.value
	}
*/
}

