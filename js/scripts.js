$(document).ready(function(){
    $("#pigLatin").submit(function(event) {
        event.preventDefault();
        let word = $('input#sentence').val();
        $('#output').text(pigLatinRegex(word)); 
    
    });

});
function pigLatin(str) {
    str = str.toLowerCase();
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelIndex = 0;

    if (vowels.includes(str[0])) {
        return str + "way";
    } else {
        for (let char of str) {
            if (vowels.includes(char)) {
                vowelIndex = str.indexOf(char);
                break;
            }
        }
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay"; 
    }
}

function pigLatinRegex(str) {
    if (/^qu/i.test(str)){
        let strX = str.split(/^qu/i());
        strX.reverse();
        strX.push('ay');
        return strX.join("");
    }
    else if(/^[aeiou]/i.test(str)){
        return str.concat('way');
    }
    else if (/^[^aieou]/i.test(str)){
        let newStr = str.split(/^[^aeiou]/i)
        newStr.reverse();
        newStr.push('ay');
        return newStr.join("");
    }
}