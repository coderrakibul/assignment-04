//problem : 1
function anaToVori(ana) {
    //error handle code
    if (typeof ana != "number") {
        return "please! insert number";
    }
    if (ana < 0) {
        return "positive number only";
    }
    // main code
    var vori = ana / 16;
    return vori;
}
console.log(anaToVori(32));
//problem : 2
function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {
    //error handle code
    if (typeof singaraQuantity != "number" || typeof somuchaQuantity != "number" || typeof jilapiQuantity != "number") {
        return "please! input number only";
    }
    if (singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0) {
        return "please! insert a positive number";
    }
    // main code
    var singaraPrice = singaraQuantity * 7;
    var somuchaPrice = somuchaQuantity * 10;
    var jilapiPrice = jilapiQuantity * 15;
    var totalPrice = singaraPrice + somuchaPrice + jilapiPrice;
    return totalPrice;
}
var foodQuantity = pandaCost(3, 2, 0);
console.log(foodQuantity);
//problem : 3
function picnicBudget(person) {
    //error handle code
    if (person < 1) {
        return "please! input a valid number";
    }
    if (typeof person != "number") {
        return "please! input number only";
    }
    // main code
    var cost = 0;
    var first100 = 0;
    var second100 = 0;
    if (person <= 100) {
        cost = person * 5000;
        return cost;
    }
    else if (person > 100 && person <= 200) {
        first100 = 100 * 5000;
        remainingCost = (person - 100) * 4000;
        cost = first100 + remainingCost;
        return cost;
    }
    else if (person > 200) {
        first100 = 100 * 5000;
        second100 = 100 * 4000;
        remainingCost = (person - 200) * 3000;
        cost = first100 + second100 + remainingCost;
        return cost;
    }
}
var personNumber = picnicBudget(300);
console.log(personNumber);
//problem : 4
function oddFriend(friends) {
    //error handle code
    if (friends.length == 0) {
        return "please! insert a name"
    }
    // main code
    var myOddFriend;
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element.length % 2 != 0) {
            myOddFriend = element;
            break;
        }
    }
    return myOddFriend;
}
var friendList = ["Shamim", "Ahasan Habib", "Alomgir", "Nayem", "Noyon", "Ohab"];
var result = oddFriend(friendList);
console.log(result);