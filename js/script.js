let eventType = prompt("what kind of event are you going to");
let tempFahr = prompt("what's the temperature");
let resultEvent = "";
let resultTemp = "";


if(eventType === "formal") {
    resultEvent = "Since it is " + tempFahr + " degrees, you should wear a suit ";
}else if(eventType==="semi-formal") {
    resultEvent = "Since it is " + tempFahr + " degrees, you should wear a polo ";
}else if(eventType=== "casual") {
    resultEvent = "Since it is " + tempFahr + " degrees, you should wear something comfy ";
}
if (tempFahr > 70) {
    resultTemp = "and no jacket";

}else if(tempFahr >= 70 && tempFahr >= 54) {
    resultTemp = "and a jacket";

}else if(tempFahr <54) {
    resultTemp = "and a coat";
}

 let result = resultEvent += resultTemp;
 console.log(result);