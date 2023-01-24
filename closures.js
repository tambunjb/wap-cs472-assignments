console.log("Answer 1");
const count = (function() {
    let counter = 0;
    return {
        add: () => ++counter,
        reset: () => counter=0
    };
})();
console.log(count.add());
console.log(count.add());
console.log(count.reset());

console.log("Answer 2");
console.log("Free variable in add is counter. Free variable is variable(s) defined outside the function, nor its parameter(s).");

console.log("Answer 3");
const make_adder = inc => {
    let counter = 0;
    return () => counter += inc;
};
var add5 = make_adder(5);
add5();
add5();
console.log(add5());
var add7 = make_adder(7);
add7();
add7();
console.log(add7());

console.log("Answer 4");
console.log('Wrap all codes inside a function, or in other word make it a closure. "(function() { /* Put all codes here */ })();"');

console.log("Answer 5");
const Employee = () => {
    let name = '';
    let age = 1;
    let salary = 0;
    let getName = () => name;
    let getAge = () => age;
    let getSalary = () => salary;
    return {
        setName: (n) => name = n,
        setAge: (a) => age = a,
        setSalary: (s) => salary = s,
        increaseSalary: percentage => salary += getSalary() * percentage,
        incrementAge: () => age = getAge()+1,
        print: () => getName() +' '+ getAge() +' '+ getSalary()
    };
};
const emp1 = Employee();
emp1.setName('Jake');
emp1.setAge(30);
emp1.setSalary(1000);
emp1.increaseSalary(0.4);
emp1.incrementAge();
console.log(emp1.print());

console.log("Answer 6");
const EmployeeExt = (function() {
    let address = '';
    const emp = Employee();
    return {
        address: address,
        getAddress: () => address,
        setAddress: a => address = a,
        ...emp,
        print: () => emp.print() +' '+ address
    };
});
const emp2 = EmployeeExt();
emp2.setName('Dave');
emp2.setAge(24);
emp2.setSalary(500);
emp2.increaseSalary(0.2);
emp2.incrementAge();
emp2.setAddress('Fairfield');
console.log(emp2.print());