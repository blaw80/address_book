//Adress book javascript project

var addressBook = [];
var entryPrototype = {
	//This is a getter that dynamically generates the label
	get mailingLabel(){
		return this.firstName + " " + this.lastName + "\n" + this.street + "\n" + this.city + ", " + this.state + " " + this.zip; 
	},
  
    printAddress: function(){
		console.log(this.mailingLabel);
  	} 
}

function handleSubmit(e){   
   if (document.querySelectorAll('input')[0].value == "") { alert("name field cannot be left blank");}
  else{
  var inputs = [].slice.apply(document.querySelectorAll('.addressForm input'));
  var entry = Object.create(entryPrototype);
    
  inputs.forEach(function(input){
		entry[input.name] = input.value;
	});

  addressBook.push(entry);
  entry.printAddress();

  e.preventDefault();
  }
} 

document.querySelector('.addressForm').addEventListener('submit', handleSubmit);

