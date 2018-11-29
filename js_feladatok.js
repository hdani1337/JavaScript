//PROGRAMOZÁS GYAKORLAT (MARANCSICS TAMÁS)
function vel(a,b){
  return Math.floor(Math.random() * (b-a+1)+a); //random szám a és b között
}

function kiir(u){
	var x = document.getElementById("hazi"); //elkérjük a textareat, mert egyszerűbb az x-et beírni mint a document.getElementById-t
	if(u==""){
		x.value += "\n"; //ha üres, akkor csak egy sortörést ad a textareanak
	}

	else{
		x.value += u + "\n"; //ha nem üres, akkor hozzáadja az üzenetet a textareahoz, majd sortörés
	}
}

function helyiertek_1(){//adjuk össze egy random szám számjegyeit addig, amíg nem kapunk egyetlen számjegyet
	var n = vel(100,999);
	var n_temp = Math.floor(n); //kerekítjük a véletlenszerű számot
	kiir("A háromjegyű szám: " + n_temp);

  var szazas = Math.floor(n/100); //százaas helyi érték

  var tizes = Math.floor(n/10); //tízes helyi érték
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1); //egyes helyi érték
  egyes = Math.floor(egyes%10);

			kiir("Helyi értékek külön: " + szazas + " " + tizes + " " + egyes); //Helyi értékek külön

		var m = szazas+tizes+egyes;
			kiir("Helyi értékek összeadva: " + m); //Helyi értékek összeadva

		//Mivel ez a számunk biztosan kétjegyű lesz (999->27), ezért ezt is felbontjuk egy tízes és egy egyes értékre, aminek szintén összeadjuk a számjegyeit

		var mtizes = Math.floor(m/10); //második számnak a tizes helyi értéke

		var megyes = m%10; //második számnak az egyes helyi értéke
		m = m/10;
		m = m-megyes/10;
		
		var o = mtizes+megyes; //a második szám jegyeit is összeadom, ez biztos hogy egy jegyű lesz (999->27->9)
			kiir("Második szám helyi értékeinek összeadva: " + o + "\n");
		}

function helyiertek_2(){//háromjegyű számból négyjegyűt úgy, hogy a középső számjegyet megduplázzuk
	var n = vel(100,999);

	var szazas = Math.floor(n/100); //n-nek a százas helyi értéke

  var tizes = Math.floor(n/10); //n-nek a tízes helyi értéke
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1); //n-nek az egyes helyi értéke
  egyes = Math.floor(egyes%10);

		kiir("Az eredeti háromjegyű szám: " + szazas + "" + tizes + "" + egyes);
		kiir("A megduplázott tízes helyiértékű szám: " + szazas + "" + tizes + "" + tizes + ""+ egyes + "\n");
}

function elso(){//ötre végződő számok
	var ottel = []; //csinálunk egy tömböt az öttel osztható számoknak
  for(i=100;i<999;i++){
    if(i%5==0){//nézze meg, hogy osztható e 5-tel
      if(i%2==1){//nézze meg, hogy páratlan e, mert nekünk az 5-re végződő számok kellenek, de ezt egy if-be is befűzhetjük
        ottel.push(" " + i);//azért push, hogy ne kelljen a vesszőkre figyelni
      }
    }
  }
  kiir("Ötre végződő háromjegyű számok:" + ottel + "\n");
}

function helyiertek_3(){
  var n = vel(1000,9999) //gondolom egyértelmű
  kiir("A négyjegyű szám: " + n);

  var ezres = Math.floor(n/1000); //ezeket már korábban lejegyeztem

  var szazas = Math.floor(n/100); //ezeket már korábban lejegyeztem
  szazas = Math.floor(szazas%10);

  var tizes = Math.floor(n/10); //ezeket már korábban lejegyeztem
  tizes = Math.floor(tizes%10);

  var egyes = Math.floor(n/1); //ezeket már korábban lejegyeztem
  egyes = Math.floor(egyes%10);

  var osszeg = ezres+szazas+tizes+egyes; //egy változóba eltároljuk a számjegyek összegét

  kiir("A számjegyek külön: " + ezres + " " + szazas + " " + tizes + " " + egyes);
  kiir("A számjegyek összege: " + osszeg + "\n");
}

//PROGRAMOZÁS ELMÉLET (BECK SÁNDOR)

var szamokT = [342,21,33,11,1,77,987,3,2]; //ezzel a tömbbel fogunk dolgozni
var megfelelt = []; //A kiválogatás két módszerénél és a szétválogatásnál lesz rá szükség. Ebbe a tömbbe kerülnek azok a számok, amik megfeleltek a feltételnek.
var nemMegfelelt = []; //A szétválogatásnál lesz rá szükség. Ebbe a tömbbe kerülnek azok a számok, amik nem feleltek meg a feltételnek.

function tombKiir (t){//kiírjuk a tömb elemeit
    var ki=""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
    for(var i =0;i<t.length;i++){
			if(i<(t.length-1)){
				ki += t[i] + ", "; //vesszővel tagolja el a tömb elemeit
			}
			else{
				ki += t[i]; //az utolsó szám után ne legyen vessző
			}
    }
    kiir("Tömb elemei: " + ki + "\n");
}

function osszegzes(T){//Összeadjuk a tömb számait
	var ki = ""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
	var osszeg = 0; //egyszerűbb létrehozni egy összeg változót, ebbe összeadni a számokat és kiiratni, minthogy a kiir metódusunkban számolgatni
	for(var i = 0;i<T.length;i++){
		osszeg += T[i]; //összeadjuk a számjegyeket

	}
	ki +=  osszeg; //az ideiglenes változónkba berakjuk az összeget, bár itt ennek még nincs sok értelme, ez csak szemléltetés
    kiir("Összegzés tétele: " + ki + "\n")
}
function elemSzam(T){//Tömb elemeinek darabszáma
	var ki = ""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
	var darab = 0; //gondolom egyértelmű
	for(var i = 0;i<T.length;i++){
		darab++; //ahányszor lefut a ciklus, annyiszor növeli a darabszámot 1-gyel

	}
	ki +=  darab;
    kiir("Tömb elemeinek száma: " + ki + "\n")
}
function megszamlalas(T){
	var ki = ""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
	var hatarertek = 50; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	var darab = 0; //gondolom egyértelmű
	ki += hatarertek + " alatti számok: ";
	for(var i = 0;i<T.length;i++){//Tömb elemeinek száma egy feltétel alapján
		if(T[i]<hatarertek){
			ki += T[i] + " "; //kiírom a feltételnek megfelelt számokat
			darab++; //növelem a darabszámot, ami majd a feltételnek megfelelt számok darabszámát fogja majd megadni
		}
	}
    kiir("Tömb elemei egy feltétel alapján: " + ki)
    kiir("Tömb elemeinek száma egy feltétel alapján: " + darab + "\n")
}
function eldontes(T){
	var keresendo = 33; //33-at keressük
	var buli = false; //Ez azért kell, mert igaz vagy hamis lehet az értéke, és ezt könnyen megtudjuk majd vizsgálni
  var eredmeny; //egyszerűbb egy változóba beleírni hogy a számb bent van e a tömbben vagy nincs, minthogy mindenhova meghívnánk a kiír metódusunkat
	for (var i=0;i<T.length;i++){
		if(keresendo==T[i]){
			buli = true;
				//Keresünk egy számot a tömbben. Ha a szám bent van a tömbben, akkor buli igaz lesz.

      if(buli==true){
        eredmeny = "Benne van."; //Ha a buli igaz, akkor azt írjuk ki, hogy "Benne van"
        break; //Álljon meg a ciklus
        }

      else{
        eredmeny = "Nincs benne."; //Ha nem igaz, akkor pedig "Nincs benne"
        break; //Álljon meg a ciklus
        }
		}
	}
	kiir("Eldöntés tétele: "+ keresendo + " benne van a tömbben? " + eredmeny + "\n")

}
function kivalasztas(T){
	var keresendo = 23; //23-at keressük
	var poz = -1; //a 0-dik pozíció az a -1, mivel az első számnak 0 a pozíciója
	for (var i=0;i<T.length;i++){
		if(keresendo==T[i]){//Megnézzünk, hogy a keresendő számnak mekkora a pozíciója
			poz = i; //Visszaadjuk a szám pozícióját
			break; //Megállítjuk a ciklust, hiszen minek fusson tovább, ha benne van a szám. Minket csak az érdekel, hogy benne van e a keresett szám.
		}
    else{
      poz = "A keresendő szám nincs benne a tömbben." //Lehet, hogy a szám nincs benne a tömbben
    }
	}
	kiir("Kivalasztas tétele: "+ keresendo + " pozíciója: " + poz + "\n")
}

function kivalogatas(T){
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	var index = 0;
	megfelelt.length= 0; //kiürítjük a megfelelt tömböt
	for(var i= 0; i<T.length; i++){//kiválogatjuk a 42 alatti számokat
		if(T[i]<hatarertek){
			megfelelt[index]= T[i]; //Számok beírása a megfelelt tömbbe
			index++; //Index növelése
		}
	}
	kiir("Kiválogatás első módszere: " + megfelelt + "\n");
}
function kivalogatas2(T){ //ugyanazt csinálja, mint az első, csak egy másik módszerrel
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	megfelelt.length= 0; //kiürítjük a megfelelt tömböt
	for(var i= 0; i<T.length; i++){
		if(T[i]<hatarertek){
			megfelelt.push(T[i]); //Számok beírása a megfelelt tömbbe
		}
	}
	kiir("Kiválogatás második módszere: " + megfelelt + "\n");
}
function szetvalogatas(T){
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	megfelelt.length= 0; //kiürítjük a megfelelt tömböt
	nemMegfelelt.length= 0; //kiürítjük a nemMegfelelt tömböt
	for(var i= 0; i<T.length;i++){//kiválogatjuk a 42 alatti számokat és külön elrakjuk a nem 42 alatti számokat is
		if(T[i]<hatarertek){
			megfelelt.push(T[i]); //Számok beírása a megfelelt tömbbe
		}else{
			nemMegfelelt.push(T[i]); //Számok beírása a nemMegfelelt tömbbe
		}
		
	}
	kiir("Szétválogatás tétele: ");
	kiir("Megfelelt számok: " + megfelelt);
	kiir("Nem megfelelt számok: " + nemMegfelelt + "\n");
}
//Igyekszem mindenhez hozzászólást fűzni, hogy a kevésbé hozzáértők is viszonylag könnyen tudják értelmezni a kódot
//Horváth Dániel 2018