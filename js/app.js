/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tayTay = document.getElementById("name1");
console.log(tayTay);
tayTay.innerHTML="Taylor";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var projMan = document.getElementById("position2");
console.log(projMan);
projMan.innerHTML="Project Manager";

/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var pineapplePen = document.getElementById("alias3");
console.log(pineapplePen);
pineapplePen.innerHTML="Concatenation";

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var purpleRain = document.getElementsByClassName("profile");
console.log(purpleRain);
purpleRain[0].innerHTML='"Thank you for a freaky time.  Call me up whenever you want to grind."';

/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var jeetKundo = document.getElementsByClassName("profile");
console.log(jeetKundo);
jeetKundo[1].innerHTML='"Empty your mind, be formless, shapeless — like water."';

/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var ezekiel2517 = document.getElementsByClassName("alias");
console.log(ezekiel2517);
ezekiel2517[2].innerHTML="Ray Arnold";

/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".

Append this div element to the nameParent div*/

var familyGuy = document.getElementById("name7");
console.log(familyGuy);
familyGuy.innerHTML="Peter Griffin";
 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var sanAntoniospur=document.getElementById("alias8");
console.log(sanAntoniospur);
sanAntoniospur.innerHTML="Old Man Riverwalk";

//Final Boss
/*9. Create your own profile.*/

var motoFlyer = document.getElementById("name9");
console.log(motoFlyer);
motoFlyer.innerHTML="Dster D";

var motoFlyer2 = document.getElementById("position9");
console.log(motoFlyer2);
motoFlyer2.innerHTML="MotoGP 8";

var motoFlyer3 = document.getElementById("alias9");
console.log(motoFlyer3);
motoFlyer3.innerHTML="MistaDobalina";

var motoFlyer4 = document.getElementById("bio9");
console.log(motoFlyer4);
motoFlyer4.innerHTML="Holy $#!+, I'm on the internets!"