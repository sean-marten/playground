// Tip calculator

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    tipCalc: function() {
        this.tips = [];
        this.finalBill = [];
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i]*0.2;
            }
            else if (this.bills[i] < 200) {
                this.tips[i] = this.bills[i]*0.15;
            }
            else {
                this.tips[i] = this.bills[i]*0.1;
            }
            this.finalBill[i] = this.tips[i] + this.bills[i]
        }
    }
}

var mark = {
    fullName: 'Mark Doe',
    bills: [77, 375, 110, 45],
    tipCalc: function() {
        this.tips = [];
        this.finalBill = [];
        for (var i = 0; i < this.bills.length; i++){
            if (this.bills[i] < 100) {
                this.tips[i] = this.bills[i]*0.2;
            }
            else if (this.bills[i] < 300) {
                this.tips[i] = this.bills[i]*0.10;
            }
            else {
                this.tips[i] = this.bills[i]*0.25;
            }
            this.finalBill[i] = this.tips[i] + this.bills[i]
        }
    }
}

function avgTipCalc(tips) {
    var total = 0;
    for (i = 0; i < tips.length; i++) {
        total = total + tips[i];
    }
    return (total/tips.length);
}

john.tipCalc();
mark.tipCalc();
john.average = avgTipCalc(john.tips)
mark.average = avgTipCalc(mark.tips)
console.log(john, mark);

console.log(john.average > mark.average ? john.fullName + " pays higher tips, with an average of $" + john.average : mark.fullName + " pays higher tips, with an average of $" + mark.average )