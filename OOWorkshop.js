// Problem 1:
// Create an object called Multiplier with two methods: 
// multiply and getCurrentValue. multiply should initially return 
// the number supplied * 1 and from then on whatever the current value
// is times the number supplied.  getCurrentValue should return the
// last answer returned from multiply.

function Multiplier(){
    this.currentvalue = 1;
    //this sets up the class Multiplier, with a currentvalue = 1

    this.multiply = function(input){
    //this sets up the multiply function inside of the Multiplier class, with an input argument
        this.currentvalue = input * this.currentvalue;
    //using the input (which we define in our variable), we take that * the current value, and wrap that in the new currentvalue variable
        console.log(this.currentvalue);
    //this logs the value of currentvalue AFTER the input operation
    }
}
Multiplier.prototype.getCurrentValue = function() {
    //creates a prototypical function called "getCurrentValue" 
        return this.currentvalue;
    //just reiterates what the current value is for the prompt, can be found in the lower console.log
}

var multiple = new Multiplier();
//create the variable with a BLANK argument for multiplier, because multiplier is also blank
multiple.multiply(5);
//now calling the multiple variable with the multiply function
multiple.multiply(10);
multiple.multiply(15);

console.log(multiple.getCurrentValue())
//logging the getCurrentValue function for the multiple variable

//Problem 2
// Implement an object model that allows you to store strings that represent a Photo.
// Your model should include an Album object that can contain many Photo objects
// in its photos attribute. Each Album should allow you to add a new photo, 
// list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken
// in as strings. Create instances of each object defined to prove that your object 
// model works.
// album is one object, lists method of adding photos
// photo contains location and filename

function Album(){
    this.photos = [];
    //creates a photos attribute and assigns it to an empty array

    this.addPhoto = function(photo_instance){
        //creates the addphoto function with the photo_instance attribute, so we can call addphoto later
        this.photos.push(photo_instance);
        //this will push the output of our function to the photos array
    }
    this.getPhoto = function(){
        //getphoto function created
        for(let myPhotos of this.photos){
        //for loop to make the myphotos call the photo array
            console.log(myPhotos)
        //logging the output of myPhotos (duh)
        }
    }
    this.getPhotoIndex = function(photo_index){
        console.log(photo_index)
        //legends say i dont know if this function even works
    }
}

//function for the photo portion of our album, where we call photos later
function Photo(name, location){
    this.name = name;
    this.location = location;
}


var myAlbum = new Album();
//setting the variable for the Album name
var photo1 = new Photo('The Fjords', 'Reykjavik');
var photo2 = new Photo('The Rocks', 'Monument Valley');
var photo3 = new Photo('The Sea', 'Theramore');
//setting the variables for our photos

myAlbum.addPhoto(photo1);
myAlbum.addPhoto(photo2);
myAlbum.addPhoto(photo3);
//these take the album variable, call the addphoto function, and use our individual photo variables as arguments

myAlbum.getPhoto();
//calls the getphoto function to loop through
console.log(getPhotoIndex[0]);


// Problem 3
// Create a prototypical Person object. From this object, extend a Teacher object
// and a Student object. Each of these objects should have attributes and methods 
// pertinent to what they describe. Also create a School object that should be able 
// to store instances of students and teachers. Make sure to write code afterwards 
// that creates instances of these objects to make sure that what you've written 
// works well and you're able to store the necessary data in each object.


function Person(name, age){

    this.name = name;
    this.age = age;

}

function Teacher(name, age, subjectTaught, teacherID){

    this.subjectTaught = subjectTaught;
    this.teacherID = teacherID;

    Person.call(this, name, age)

    this.subjectCall = function(){
        console.log(this.subjectTaught + " is the subject of " + this.name)
    }

}

function Student(name, age, grade, studentID){

    this.grade = grade;
    this.studentID = studentID;

    Person.call(this, name, age)


    this.gradeCall = function(){
        console.log(this.grade + " is the grade of " + this.name)
    }
}

function School(){
    this.teachers = [];
    this.students = [];

    Student.call(this, name, age, grade, studentID)
    Teacher.call(this, name, age, subjectTaught, teacherID)
    
    this.addStudents = function(student_instance){
        this.students.push(student_instance)
    }
    this.addTeachers = function(teacher_instance){
        this.teachers.push(teacher_instance)
    }
}


var school = new School();

var teacher1 = new Teacher('Robert', '35', 'History', '123456')

var student1 = new Student('Jimmy', '14', '8th', '1234')

school.addTeachers(teacher1);
school.addStudents(student1);