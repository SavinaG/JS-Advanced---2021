function bmi(name, age, weight, height){

    let bmi = Math.round(weight / (height / 100) ** 2);
    let status = calcstatus(bmi)

    let person = {
        name: name,
        personalInfo: {
            age, 
            weight,
            height,
        },
        BMI: bmi,
        status,
    }

    if(status == 'obese'){
        person.recommendation = 'admission required';
    }
    
    function calcstatus(bmi){
        if(bmi < 18.5){
            return 'underweight';
        }else if(bmi < 25){
            return 'normal';
        }else if(bmi < 30){
            return 'overweight';
        }else {
            return 'obese';
        }
    }
    return person;
}
console.log(bmi('Honey Boo Boo', 9, 57, 137)); 