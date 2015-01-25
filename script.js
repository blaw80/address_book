//Adress book javascript project

var addressBook = [];

var entryPrototype = {
	get mailingLabel(){
		return this.firstName + " " + this.lastName + "<br/>" + this.street + "<br/>" + this.city + ", " + this.state + " " + this.zip + "<br/>" + this.email + "<br/>" + this.phone; 
	}, 
    printAddress: function(){
		return this.mailingLabel;
  	} 
}

function handleSubmit(e){     
  var inputs = [].slice.apply(document.querySelectorAll('.addressForm input'));
  var entry = Object.create(entryPrototype);  
  inputs.forEach(function(input){
		entry[input.name] = input.value;
	});
  addressBook.push(entry);
    document.querySelector(".output").innerHTML = "<h4>Added:</h4>" + entry.printAddress();
    
    localStorage.setItem((entry.firstName + " " + entry.lastName).toLowerCase(), JSON.stringify(entry));
  
    e.preventDefault();  
  }
document.querySelector('.addressForm').addEventListener('submit', handleSubmit);

function handleRetrieve(e){ 
   var localKey = (document.getElementById("first").value + " " + document.getElementById("last").value).toLowerCase(); 
   var retrieved = JSON.parse(localStorage.getItem(localKey));

   document.querySelector(".output").innerHTML = "<h4>Retrieved:</h4>" + retrieved.firstName + " " + retrieved.lastName + "<br/>" + retrieved.street + "<br/>" + retrieved.city + ", " + retrieved.state + " " + retrieved.zip + "<br/>" + retrieved.email + "<br/>" + retrieved.phone; 
   e.preventDefault();  
}

document.querySelector(".retrieveEntry").addEventListener('submit', handleRetrieve)
