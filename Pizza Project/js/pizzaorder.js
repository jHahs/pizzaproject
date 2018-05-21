function getReceipt() {
			var text1 = "<h3>You Ordered:</h3>";
			var text2 = "<h3>Subtotal:</h3>";
			var runningTotal = 0;
			var sizeTotal = 0;
			var sizeArray = document.getElementsByClassName("Size");
		for (var i = 0; i < sizeArray.length; i++) {
			if (sizeArray[i].checked){
				var selectedSize = sizeArray[i].value;
				text1 = text1+selectedSize+"<br>";
			}
		}
		if (selectedSize === "Personal Pizza") {
			sizeTotal = 6;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Medium Pizza") {
			sizeTotal = 10;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Large Pizza") {
			sizeTotal = 14;
			text2 = text2+sizeTotal+"<br>";
		} else if (selectedSize === "Extra Large") {
			sizeTotal = 16;
			text2 = text2+sizeTotal+"<br>";
		}
		runningTotal = sizeTotal;
		getMeat(runningTotal,text1,text2);
	};
	

		function getMeat(runningTotal,text1,text2) {
			var meatTotal = 0;
			var selectedMeat =[]
			var meatArray = document.getElementsByClassName("Meat");
		for (var j = 0; j < meatArray.length; j++) {
			if (meatArray[j].checked) {
				selectedMeat.push(meatArray[j].value);
				text1 = text1+meatArray[j].value+"<br>";
			}
		}
			var meatCount = selectedMeat.length;
			if (meatCount > 1) {
				meatTotal = (meatCount - 1);
			} else {
				meatTotal = 0;
			}
			runningTotal = (runningTotal + meatTotal);
			for (var j = 0; j < selectedMeat.length; j++) {
			 	text1 = text1+selectedMeat[j]+"<br>"
			 	if (meatCount <= 1) {
			 		text2 = text2 + 0 + "<br>";
			 		meatCount = meatCount - 1;
			 	} else if (meatCount == 2) {
			 		text2 = text2 + 1 + "<br>";
			 		meatCount = meatCount - 1;
			 	} else {
			 		text2 = text2 + 1 + "<br>";
			 		meatCount = meatCount - 1;
			 	}
			}
			getVeggies(runningTotal,text1,text2);
	};

		function getVeggies(runningTotal,text1,text2) {
			var veggiesTotal = 0;
			var selectedVeggies = []
			var veggiesArray = document.getElementsByClassName("Veggie")
		for (var k = 0; k < veggiesArray.length; k++) {
			if (veggiesArray[k].checked) {
				selectedVeggies.push(veggiesArray[k].value);
				text1 = text1+veggiesArray[k].value+"<br>";
			}
		}
			var veggiesCount = selectedVeggies.length;
			if (veggiesCount >= 2) {
				veggiesTotal = (veggiesCount - 1);
			} else {
				veggiesTotal = 0;
			}
			runningTotal = (runningTotal + veggiesTotal);
			for (var k = 0; k < selectedVeggies.length; k++) {
			 	text1 = text1+selectedVeggies[k]+"<br>"
			 	if (veggiesCount <= 1) {
			 		text2 = text2 + 0 + "<br>";
			 		veggiesCount = veggiesCount - 1;
			 	} else if (veggiesCount == 2) {
			 		text2 = text2 + 1 + "<br>";
			 		veggiesCount = veggiesCount - 1;
			 	} else {
			 		text2 = text2 + 1 + "<br>";
			 		veggiesCount = veggiesCount - 1;
			 	}
			}
			getCheese(runningTotal,text1,text2);

	};


		function getCheese(runningTotal,text1,text2) {
			var cheeseTotal = 0;
			var cheeseArray = document.getElementsByClassName("Cheese")
		for (var l = 0; l < cheeseArray.length; l++) {
			if(cheeseArray[l].checked){
				var selectedCheese = cheeseArray[l].value;
				text1=text1+selectedCheese+"<br>";
			}
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		} else {
			cheeseTotal = 0;
	}
		text2 = text2+cheeseTotal+"<br>"
		runningTotal = (runningTotal + cheeseTotal);
		getSauce(runningTotal,text1,text2);
	};

		function getSauce(runningTotal,text1,text2){
			var sauceArray = document.getElementsByClassName("Sauce")
		for (var o = 0; o < sauceArray.length; o++) {
			if(sauceArray[o].checked) {
				var selectedSauce = sauceArray[o].value;
				text1= text1+selectedSauce+"<br>";

			}
		}
		text2 = text2 + 0 + "<br>";
		getCrust(runningTotal,text1,text2);
	};

		function getCrust(runningTotal,text1,text2) {
			var crustTotal = 0;
			var crustArray = document.getElementsByClassName("Crust")
		for (var p = 0; p < crustArray.length; p++) {
			if(crustArray[p].checked) {
				var selectedCrust = crustArray[p].value;
				text1= text1+selectedCrust+"<br>";
			}
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		} else {
			crustTotal = 0;
		}
		runningTotal =(runningTotal + crustTotal);
		text2 = text2 + crustTotal +"<br>";
		document.getElementById("cart").style.opacity=1;
		document.getElementById("showText").innerHTML=text1;
		document.getElementById("showText2").innerHTML=text2;
		document.getElementById("totalPrice").innerHTML = "</h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";

		};

		function clearAll() {
			document.getElementById("cart").style.opacity=0;
			document.getElementById("cscfrm").reset();
			document.getElementById("column").reset();
		}



