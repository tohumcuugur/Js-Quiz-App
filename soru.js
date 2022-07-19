
function Soru(soruMetni, cevapSecenekleri, dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevapKontrol = function (cevap) {
    return cevap === this.dogruCevap;
}
let sorular = [
    new Soru("1.Javascript is an _______ language?", {
        a: "Object-Oriented",
        b: "Object-Based",
        c: "Procedural",
        d: "None of the above",
    }, "a"),
    new Soru("2.Which of the following keywords is used to define a variable in Javascript?", {
        a: "Var",
        b: "Let",
        c: "Both A and B",
        d: "None of the above",
    }, "c"),
    new Soru("3.Which of the following methods is used to access HTML elements using Javascript?", {
        a: "getElementbyId()",
        b: "getElementsByClassName()",
        c: "Both A and B",
        d: "None of the above",
    }, "c"),
    new Soru("4.Which of the following methods can be used to display data in some form using Javascript?", {
        a: "document.write()",
        b: "console.log()",
        c: "window.alert()",
        d: "All of the above",
    }, "d"),
    new Soru("5.Upon encountering empty statements, what does the Javascript Interpreter do?", {
        a: "Throws an error",
        b: "Ignores the statements",
        c: "Gives a warning",
        d: "None of the above",
    }, "b"),
    new Soru("6.How can a datatype be declared to be a constant type?", {
        a: "Conts",
        b: "Var",
        c: "Let",
        d: "Constant",
    }, "a"),
    new Soru("7.When the switch statement matches the expression with the given labels, how is the comparison done?", {
        a: "Both the datatype and the result of the expression are compared.",
        b: "Only the datatype of the expression is compared.",
        c: "Only the value of the expression is compared.",
        d: "None of the above",
    }, "a"),
    new Soru("8.What keyword is used to check whether a given property is valid or not?", {
        a: "in",
        b: "is in",
        c: "exist",
        d: "lies",
    }, "a"),
    new Soru("9.What is the use of the <noscript> tag in Javascript?", {
        a: "The contents are displayed by non-JS-based browsers.",
        b: "Clears all the cookies and cache.",
        c: "Both A and B.",
        d: "None of the above",
    }, "a"),
    new Soru("10.When an operator’s value is NULL, the typeof returned by the unary operator is:", {
        a: "Boolean",
        b: "Undefined",
        c: "Object",
        d: "Integer",
    }, "c"),
    new Soru("11.What does the Javascript “debugger” statement do?", {
        a: "It will debug all the errors in the program at runtime.",
        b: "It acts as a breakpoint in a program.",
        c: "It will debug error in the current statement if any.",
        d: "All of the above.",
    }, "b"),
    new Soru("12.What does the ‘toLocateString()’ method do in JS?", {
        a: "Returns a localised object representation.",
        b: "Returns a parsed string.",
        c: "Returns a localized string representation of an object.",
        d: "None of the above.",
    }, "c"),
    new Soru("13.The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?", {
        a: "Object Serialization",
        b: "Object Encapsulation",
        c: "Object Inheritance",
        d: "None of the above",
    }, "a"),
    new Soru("14.Which function is used to serialize an object into a JSON string in Javascript?", {
        a: "stringify()",
        b: "parse()",
        c: "convert()",
        d: "None of the above",
    }, "a"),
    new Soru("15.Which of the following are closures in Javascript?", {
        a: "Variables",
        b: "Functions",
        c: "Objects",
        d: "All of the above",
    }, "d"),
]
