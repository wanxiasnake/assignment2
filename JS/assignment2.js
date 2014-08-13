//What is the length of the "data" array (2 pts.)? 
var mylen=data.length;
//What is the fourth element of the array *hint: remember how indexing for arrays beings (2 pts.)
var myarr=data[3];
//Using the array "map" funcitonality, create a variable "city_names" that has the name of each city (4 pts.)

var mycity=function(x){return x.city;};
var city_names=data.map(mycity);

//Using the array "map" funcitonality, create a variable "populations" that the population of each city (4 pts.)

var mypop=function(x){return x.pop;};
var populations=data.map(mypop);

//Sort the data variable by median age (4 pts.)
 sortfunction=function(a,b){return a.age-b.age;};
 data.sort(sortfunction);
 
 
//Based on this, what are the cities with the youngest/oldest median ages? (2 pts.)
var myarryougest=data[0].city;
var myarroldest=data[data.length-1].city;
 
//Write a function called "description" that takes in an object (one element from the data array) and constructs the following sentence (4 pts.):
//"The median age in " {city} " is " {median age}"
var description =function(x){
   return "The median age in " + x.city + " is " + x.age;
};

//Pass one of the data elements to your function and view the results
var mysentence = description(data[5]);


//Using the array filter functionality, create an array called "maleCities" that has the names of cities where there are more men than women (3 pts.)
var maleCities=data.filter(function(x){return x.males>x.females;}).map(mycity);

//How many of the top 100 cities have more males than females?
var top100maleCities=data.slice(0,100).filter(function(x){return x.males>x.females;}).length;





