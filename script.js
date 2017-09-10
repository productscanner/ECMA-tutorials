var nameBuilder = function(firstName="Henry", lastName = "Doe"){
			console.log(firstName + " "+ lastName);
		}
		nameBuilder();
		
		window.onload = function(){
			func1();
		}
		var func1 = function(){
				for(let i=0; i<45; i++){
				var div = document.createElement('div');
				div.onclick = function(){
					alert("You clicked on the div #"+i);
				};
				document.getElementsByTagName('section')[0].appendChild(div);
			}
		}
		
		function createEmail (firstName, purchasePrice){
			var shipping = 5.95;
			console.log(`
				Hi ${firstName}, thanks for buying from us
				Total : $${purchasePrice}
				shipping price is $${shipping}
				Grand Total : $${purchasePrice + shipping};
			`);
		}
		createEmail("Ravikiran",34);
		
		var cats = ["cat0","cat1","cat2","cat3","cat4"];
		var dogs = ["dog0","dog1","dog2","dog3","dog4"];
		
		var animals = ["whales", "elephants", ...cats, ...dogs];
		
		console.log(animals);