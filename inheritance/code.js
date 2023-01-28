String.prototype.filter = function(...args) {
    return this.split(' ').filter(w => !args.includes(w)).join(' ');
};

Array.prototype.bubbleSort = function() {
    let arr = [...this];
    for(let i=0;i<arr.length-1;i++) {
        let noswap = true;
        for(let j=0;j<arr.length-1-i;j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noswap = false;
            }    
        }
        if(noswap) break;
    }
    return arr;
};

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function() {};
Teacher.prototype = new Person();
Teacher.prototype.learn = function(subject)
{
 console.log(this.name + " is now teaching " + subject);
}
var prof = new Teacher();
prof.initialize("Elmatary", 44);
prof.learn("Inheritance");
