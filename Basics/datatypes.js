// Primitive datatypes ::


// 1. string
    // single ' '.
    var example_string = 'hehe';
    //double " ".
    var example_string = "hehe";
    //backticks (can be used to join something within the string).
    var example_string = `hehe`;    
    
    //backsticks example:
    function calculations(){
        var example;
        example = `10 + 20 = ${ 10 + 20 } . hehe you got it`
        console.log(example);
    };
    calculations();



// 2. Numbers
 console.log(1e6 === "1000000"); // (false) comparision by === but it check datatype too.
 console.log(1e6 == "1000000"); // true it doesn't check the datatype.

 console.log(Math.floor(3.5)); // round-of the same number by removing decimal.
 console.log(Math.ceil(3.5)); // round-of to the next(bigger) number
 console.log(Math.round(3.5)); // round-of accordinh to math.
 console.log(Math.trunc(3.5)); // removes everything ahead of the decimal.
 
 let a = 5.6748;
 console.log(a.toFixed(1)); // toFixed to remove decimal as you want.
 
 let a = 1;
 let output = a.toString(); //  used to convert number into string but it also can convert into hexadecimal ASCII and binmary.
 console.log(typeof(output));



 // type of conversions ::

 // string conversion

 let a = String(true);   // using String.
 console.log(typeof(a));


 // number conversion with NaN too.
 let a = Number("name");
 console.log(a);               // gets Nan value
 console.log(typeof(a));  
 
 let a = Number("  123 \n");
 console.log(a);               // gets Nan value
 console.log(typeof(a)); 


 // boolean conversion
 let a = Boolean(""); // false
 console.log(a);               // gets Nan value
 console.log(typeof(a)); 


 console.log(typeof(21372467868748453255n));




 //string manipulations and methods ::

 //backslash ::
 \n //for next line
 \b //backspace
 '\'' //can be used in mid backticks to avoid error. 


 // string length
 var a = "hehehe";
 console.log(a.length);

 // string positioning
 var a = "hehehe";
 console.log(a.at(-2));

 // includes method
 var a = "hehehe";
 var b = a.includes("he");
 console.log(b);

 // string slicing, substring, substr
 var a = "hehehe";
 console.log(a.slice(2,5)); //heh

 console.log(a.substr(3,5)); // accourding to length


 // string split
 var a = "hehehe ok hehe ok he h";
 var b = a.split("o",2);   // (seperator , limit)
 console.log(b);


 // string replace
 var a = "hehehe ok hehe ok he h";
 var b = a.replace("ok","okok"); // replace the 1st ok.
 console.log(b);

 var a = "hehehe ok hehe ok he h";
 var b = a.replaceAll("ok","okok");
 console.log(b);



 






























