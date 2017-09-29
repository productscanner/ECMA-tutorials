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
		
		function haveFun(activityName = "Jogging", time = 30){
				console.log(`today I will go for ${activityName} for ${time} minutes`);
		};
		
		haveFun();
		haveFun("hiking", 120);
		
		console.log(`---------------------------------------------------------`);
		let chapter = "object literals";
		console.log(`chapter -  Learning ${chapter}`);
		
		var cat = {
			meow(times){
				console.log("meow".repeat(times));
			},
			purr(times){
				console.log("purr".repeat(times));
			},
			snore(times){
				console.log("snore".repeat(times));
			}
		};
		
		cat.meow(3);
		cat.purr(5);
		cat.snore(4);
		
		console.log(`---------------------------------------------------------`);
		console.log(`---------------------------------------------------------`);
	    chapter = "Arrow functions";
		console.log(`chapter -  Learning ${chapter}`);
		console.log(`Normal function implementation`);
		var studentsList = function(students){
			console.log(students);
		};
		
		studentsList(["Joe", "Cindy", "Jeanne"]);
		console.log(`*************************************`);
		console.log(`Arrow function implementation`);
		
		var studentsListArrow = (studentList)  => console.log(studentList);
		
		studentsListArrow(["Joe", "Cindy", "Jeanne"]);
		
		console.log(`---------------------------------------------------------`);
		console.log(`---------------------------------------------------------`);
		
		chapter = "Arrow functions and the 'this' scope";
		console.log(`chapter -  Learning ${chapter}`);
		console.log(`Normal function implementation`);
		var person = {
			name: "Doug",
			actions: ['Bike','Hike','Ski','Surf'],
			printActions: function(){
				
				this.actions.forEach(function(action){
					var str = this.name + " likes "+ action; 
					console.log(str);
				}.bind(this));
			}
		};
		person.printActions();
		
		console.log(`*************************************`);
		console.log(`Arrow function implementation`);
		
		var personArrow = {
			name: "Doug",
			actions: ['Bike','Hike','Ski','Surf'],
			printActions(){			
				this.actions.forEach(action => {
					var str = this.name + " likes "+ action; 
					console.log(str);
				});
			}
		};
		
		personArrow.printActions();
		
		console.log(`---------------------------------------------------------`);
		console.log(`---------------------------------------------------------`);
		
		chapter = "Destructuring assignments";
		console.log(`chapter -  Learning ${chapter}`);
		
		var cities = ['Spokane','Boston','Los Angeles', 'Seattle', 'Portland'];
		
		console.log(cities[0]);
		console.log(cities[3]);
		
		console.log("destructuring array elements");
		var [first,,,fourth,] = ['Spokane','Boston','Los Angeles', 'Seattle', 'Portland'];
		
		console.log(first);
		console.log(fourth);
		
		console.log("normal destructuring of objects");
		var sandwich = {
			title:"Reuben",
			price:7,
			description:"Cleveland's favorite sandwich",
			ingredients:['bread','corned beef','dressing','saurekruft','cheese']
		}
		
		console.log(sandwich.title);
		
		console.log("ES6 destructuring of objects");
		var {title,description} = {
			title:"Reuben",
			price:7,
			description:"Cleveland's favorite sandwich",
			ingredients:['bread','corned beef','dressing','saurekruft','cheese']
		}
		
		console.log(title,description);
		
		
		var vacation = {
			destination: "chile",
			travelers:2,
			activity:"skiing",
			cost:4000
		};
		
		function vacationMarketing({destination, activity}){
			return `come to ${destination} and do some ${activity}`;
		}
		
		console.log(vacationMarketing(vacation));
		console.log(`---------------------------------------------------------`);		