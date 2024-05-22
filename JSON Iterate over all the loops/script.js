let praveen_data = { 
         name : "PRAVEEN KUMAR R",
         email : "rpraveen1dme@gmail.com",
         phone : 61380716579,
         Nationality : "Indian",
         date_of_birth  : "21-05-2002",
         Gender : "Male",
         Age : 22,
         Qulification : "B.E Mechanical",
         Marks : {"B.E" : "CGPA 8.05", "Diploma": "7.8", "SSLC" : "47%"},
         jobTitle  : "Entry-Level Software Engineer",
         TechnicalSkills : ["Java","Javascript","HTML","Css"],
};


// for loop 
const count = Object.keys(praveen_data);
    for(let i=0; i<count.length; i++){
          console.log(praveen_data[count[i]]);
};
// for in loop
    for(let keys in praveen_data){
        console.log(praveen_data[keys]);
};
// for of loop
    for (let i of count){
        console.log(praveen_data[i]);
};
// for each 
count.forEach(values);
function values(item) {
  console.log(praveen_data[item]);
};



