
const result = formatPersonInfo("Jobayer", 25, "Rangpur");


function formatPersonInfo(name, age, city) {

    const formatted = `Hello, my name is ${name}. I am ${age} years old and I live in ${city}`;
    return formatted;
}

console.log(result);
