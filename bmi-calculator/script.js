// BMI calculator

var Mark = {
    name: 'Mark',
    mass: 100,
    height: 1.5,
    calcBmi: function() {
        this.bmi = this.mass/(this.height^2)
    }
}

var John = {
    name: 'John',
    mass: 80,
    height: 1.7,
    calcBmi: function() {
        this.bmi = this.mass/(this.height^2)
    }
}

console.log(John.calcBmi())
console.log(Mark.calcBmi())

var higherBmi = John.bmi > Mark.bmi ? console.log(`John has a larger BMI at ${John.bmi}`) : console.log(`Mark has a larger BMI at ${Mark.bmi}`)