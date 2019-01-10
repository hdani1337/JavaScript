//PROGRAMOZÁS GYAKORLAT (MARANCSICS TAMÁS)
function vel(a,b){
  return Math.floor(Math.random() * (b-a+1)+a); //random szám a és b között
}

function kiir(temp){//létrehozunk egy kiír metódust, mert egyszerűbb így kiírni az üzenetet: kiir("valami"), mint így: document.getElementById("hazi").value += "valami"
	var x = document.getElementById("hazi"); //elkérjük a textareat, mert egyszerűbb az x-et beírni mint a document.getElementById-t, bár tökmindegy, mert csak itt kell leírnunk
	x.value += temp + "\n"; //hozzáadjuk az üzenetet a textareához és mindenki boldog
}

function helyiertek_1(){//adjuk össze egy random szám számjegyeit addig, amíg nem kapunk egyetlen számjegyet
	var n = vel(100,999);//100 és 999 között véletlenszerű szám
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
	var n = vel(100,999);//véletlenszerű szám 100 és 999 között

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
  var n = vel(1000,9999); //gondolom már egyértelmű
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

function tombok2(){
  var tomb2 = []; //Létrehozunk egy üres tömböt
  for(i=0;i<10;i++){
    tomb2.push(vel(1,1000));//feltöltjük 10 darab véletlen számmal 1 és 1000 között
  }
  kiir("Második tömb: " + tomb2 + "\n");
}

function tombok3(){
  var tomb3 = [];//Létrehozunk egy üres tömböt
  for(i=0;i<10;i++){
    tomb3.push(vel(1,100));//feltöltjük 10 darab véletlen számmal 1 és 100 között
  }
  kiir("Harmadik tömb: " + tomb3 + "\n");
}

function osszefesules(){
  var t = [];//ebbe a tömbbe fognak kerülni az első és második tömbből összefésült számok
  var index = 0;

  var t1 = [];//első tömb
  for(i=0;i<10;i++){
    t1.push(vel(1,1000));//10 darab 1 és 1000 közötti szám
  }
  var t2 = [];//második tömb
  for(i=0;i<10;i++){
    t2.push(vel(1,100));//10 darab 1 és 100 közötti szám
  }

  for(i=0;i<t1.length;i++){
    if(!t.includes(t1[i])){
      t[index++] = t1[i];//ha a t tömbben NINCS bent a t1 i-dik eleme, akkor adja hozzá
    }
  }

  for(i=0;i<t2.length;i++){
    if(!t.includes(t2[i])){
      t[index++] = t2[i];//ha a t tömbben NINCS bent a t2 i-dik eleme, akkor adja hozzá
    }
  }
  kiir("Összefésült tömb: " + t + "\n");
}

function metszetMagyarazas(){
  var t = [];//ebbe fogjuk belerakni a közös számokat
  var index = 0;

  var t1 = [];//első tömb
  for(i=0;i<10;i++){
    t1.push(vel(1,1000));//feltöltjük 10 darab véletlen számmal 1 és 1000 között
  }
  var t2 = [];//második tömb
  for(i=0;i<10;i++){
    t2.push(vel(1,100));//feltöltjük 10 darab véletlen számmal 1 és 100 között
  }

  for(i=0;i<t1.length;i++){
    if(!t.includes(t1[i]) && !t.includes(t2[i])){//ha mind a 2 tömbben bent van ugyanaz a szám
      t[index++] = t1[i];//akkor írjuk ki
    }
  }
  kiir("Metszet: " + t + "\n");
}

function metszet(t1,t2){//csak a lottó miatt definiáltam, hogy megtudjam ott is hívni
	var t = [];//üres tömb
	var index = 0;//érthető...
	for(var i=0;i<t1.length;i++){
		if (t2.includes(t1[i]) && !t.includes(t1[i])){//ha a második megadott tömbben bent van a t1 i-dik eleme, akkor...
			t[index++] = t1[i];// adja hozzá a t tömbhöz
		}		
	}
	return t;//adjuk vissza a t tömböt	
}

function lotto(){//5-ös lottó JavaScriptben, az első húzás géppel történik, a második őedig kézzel
	var szamok = document.getElementById("be").value;//elkérjük az input mezőnk értékét
	if (szamok.length > 0 && szamok.indexOf(",") > -1 && szamok.split(",").length == 5){
    //Ha az input mezőbe megadott érték hossza nagyobb 0-nál, a vessző indexe nagyobb -1-nél (tehát a vessző előtt van szám) és a tagolt számok hossza egyenlő öttel (mert ötös lottó), akkor...
		var valasztottSzamok = lottoSzamokPassed(szamok.split(","));//Széttagolja a számokat, majd megvizsgálja őket, hogy megfelelnek e az igényeinknek, ezek vannak leírva a lottoSzamokPassed metódusban
		if (valasztottSzamok.length != 5){//ha nem 5 szám van, akkor hibás számokat adott meg a felhasználó
			kiir("Hibás számokat adtál meg!" + "\n");
		}
		else{//ha pedig 5 számot adott meg, akkor...
			eredmeny = lottoSzamokGeneralasa(5);//5 lottószám generálása
			talalatok = metszet(valasztottSzamok,eredmeny);//az eltalált számok
      kiir("A gép által kihúzott számok: " + eredmeny);
      if(talalatok==""){//ha nincs találat, írja ki
        kiir("Sajnos nem találtál el egy számot sem." + "\n");
      }
      else{
        kiir("Gratulálok! " + talalatok.length + " számot találtál el.");
        kiir("Az eltalált számok: " + talalatok + "\n");
      }
			
		}
	}
	else
		kiir("Hibás számokat adtál meg!" + "\n");
		
}

    //GÉPI LOTTÓ METÓDUSAINAK ELEJE
    function lottoSzamokGeneralasa(tipus){//a típus az lehet ötös, hatos, vagy hatszázezerkilencvenkettes lottó is
      var t = [];//üres tömb, ebbe jönnek a számok
      var index = 0;//érthető..
      var n = 0;//ez lesz a véletéen számunk
      do{//hátultesztelős ciklussal futtatjuk le gyakorlásképpen, de elöltesztelőssel is tökéletesen megoldható
        n= vel(1,90);//létrehozunk egy véletlen számot 1 és 90 között (típus) alkalommal
        if(!t.includes(n)){
          t[index++] = n;//ha nincs benne a tömbben, hozzáadjuk
          
        }		
      }while(index<tipus);//addig csinálja a ciklust, amíg a típus (ez esetben 5) alatt van
      return t;//adjuk vissza a t tömböt, amit a következő metódusban szemügy alá veszünk
      //Tehát. Generáljunk 1 és 90 közötti számokat addig, amíg nem lesz 5 különböző számunk.
    }

    function lottoSzamokPassed(t){//a legenerált lottószámokat fogjuk megvizsgálni
      var n = 0;//kezdőértékünk legyen 0
      var tomb = [];//üres tömb
      var index = 0;//érthető..
      for(var i=0;i<t.length;i++){
        n = parseInt(t[i]);//számmá alakítjuk a tömb i-dik elemét
        if (n==NaN || n<=0 || n>90){//ha betű, 0-nál kisebb-egyenlő szám vagy 90-nél nagyobb szám szerepel benne, akkor adjon vissza null-t
          return null;
        }
        else if (!tomb.includes(n)){//ha a tömbben nincs benne az n, akkor
          tomb[index++] = n;//rakja bele a tömbbe
          //Fontos! változó++-t kell megadni indexnek, mert ha az i-t adjuk meg, akkor elfog csúszni és hülyeségeket fog kiadni
        }
      }	
      return tomb;//adja vissza a tömböt
      //Tehát. Mivel szöveg típusa van a tömb elemeinek, ezért számmá alakítjuk parseInt használatával. Ha a tömb egyik eleme szöveg, akkor NaN lesz belőle, és mivel ötös lóttóról beszélünk, ezért =>
      //a számok 0 és 90 között lehetnek. Ha a tömb i-dik eleme teljesül valamelyik feltételnek, tehát szöveg van az elemben vagy nem tartozik a 0<x<90 intervallumba, akkor hibás értékeket adott meg a felhasználó
      //Ha nem felel meg az egyik feltételnek sem, akkor adott meg helyes értékeket, mivel áttudtuk alakítani számmá és 0 és 90 között van.
    }
    //GÉPI LOTTÓ METÓDUSAINAK VÉGE

var tombForMennyiNulla = [2,36,7,8,9,123]; //Csinálunk még egy tömböt, mert miért ne

function tombRandom(){//rakunk még bele 15 random számot
  for(i=0;i<15;i++){
    tombForMennyiNulla.push(vel(1,100));
  }

  kiirTombNulla(tombForMennyiNulla, "A tömb elemei annyi számjeggyel, amennyi a legnagyobbnak van: ");//kiírjuk a tömbkiírrel, amit csak ehhez a feladathoz csinálunk
}

function tombBenneVan(){//benne van e a szám a tombForMennyiNulla tömbben, amit a textarea feletti input mezőbe írunk
  var keresendo = document.getElementById("beNulla").value;//elkérjük az inputot

  if(keresendo == "Adj meg egy számot..." || keresendo.length == 0){//ha az input mezőben az alap szöveg van, vagy üres, akkor adj meg egy számot
    kiir("Adj meg egy számot!" + "\n");
  }

  else{
    var benne = false;//legyen egy boolean hamis értékkel
    var szam = parseInt(keresendo);//legyen egy szám, ami az inpute parseIntje (input tartalma számmá alakítva, mivel alapból string van benne)

    for(i=0;i<tombForMennyiNulla.length;i++){//tombForMennyiNulla végigjárása
      if(tombForMennyiNulla[i] == szam){//ha az i-dik elem egyenlő a beírt számmal (ha benne van)
        benne = true;//akkor a boolean legyen igaz
        break;//álljon meg a ciklus
      }
    }
  }
      
  if(szam == undefined || isNaN(szam) == true){//ha a beírt érték nem szám
    if(keresendo != "Adj meg egy számot..." && keresendo.length !=0){//ha a beírt érték nem az alapszöveg és nem üres az input, akkor is helytelen érték
      kiir("Helytelen értéket adtál meg!" + "\n");
    }
  }
  
  else{
    if(benne){//ha a boolean igaz, akkor írjuk ki, hogy a szám benne van
      kiir(szam + " benne van!" + "\n");
    }

    if(!benne){//ha pedig a boolean nem igaz, akkor írjuk ki, hogy a szám nincs benne
      if(szam != NaN){
        kiir(szam + " nincs benne!" + "\n");
      }
    } 
  } 
}

function kiirTombNulla(temp, szoveg){
  var ki = document.getElementById("hazi");//elkérjük a textareat
  ki.value += szoveg + "\n";//kiírjuk a szöveget, majd sortörés
  var sortores = 0;//sortörés (vagy sörtörés, ahogy tetszik), ami legyen 1

  var maximum = max(temp);//a temp itt a tömb lesz, ez abból adja meg a legnagyobb számot
  var maximumHossz = maximum.toString().length;//nézzük meg, hogy milyen hosszú a legnagyobb szám (hány számjegyű)

  for(i=0;i<temp.length;i++){//járjuk végig a tömböt
    var nulla = "";//legyen egy üres nulla string
    for(k=0;k<(maximumHossz-temp[i].toString().length);k++){
      nulla += "0";//ha a (maximumHossz - tömb i-dik eleme hossza) kisebb, mint a k, akkor növelem a 0-k számát
    }

    ki.value += nulla + temp[i] + " ";//kiírom a nullákat, és a számot
    sortores++;

    if(sortores%16==0){
      ki.value += "\n";//16 számonként sortörés
    }
  }

  ki.value += "\n" + "\n";//két sortörés a végére

}

function max(temp){
  var max = 0;//kezdetben a maximum legyen 0

  for(i=0;i<temp[i];i++){//végigjárom a megadott tömböt
    if(max<temp[i]){//ha a maximum kisebb, mint a megadott tömb i-dik eleme, akkor
      max = temp[i]//a maximum legyen annyi (előbb utóbb nem lesz kisebb egy számnál sem, így ő lesz a legnagyobb)
    }
  }

  return max;//adjuk vissza a legnagyobb számot
}


//PROGRAMOZÁS ELMÉLET (BECK SÁNDOR)

var szamokT = [342,21,33,11,1,77,987,3,2]; //ezzel a tömbbel fogunk dolgozni
var megfelelt = []; //A kiválogatás két módszerénél és a szétválogatásnál lesz rá szükség. Ebbe a tömbbe kerülnek azok a számok, amik megfeleltek a feltételnek.
var nemMegfelelt = []; //A szétválogatásnál lesz rá szükség. Ebbe a tömbbe kerülnek azok a számok, amik nem feleltek meg a feltételnek.

function tombKiir(t){//kiírjuk a tömb elemeit
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
    kiir("Összegzés tétele: " + ki + "\n");
}

function elemSzam(T){//Tömb elemeinek darabszáma
	var ki = ""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
	var darab = 0; //gondolom egyértelmű
	for(var i = 0;i<T.length;i++){
		darab++; //ahányszor lefut a ciklus, annyiszor növeli a darabszámot 1-gyel

	}
	ki +=  darab;//a ki-hez hozzáadjuk a darabszámot
    kiir("Tömb elemeinek száma: " + ki + "\n");
}

function megszamlalas(T){
	var ki = ""; //Mivel lusták vagyunk, egyszerűbb az ideiglenes üzeneteket egy külön változóba eltárolni, mert ezt egyszerűbb lesz kiiratni
	var hatarertek = 50; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	var darab = 0; //gondolom egyértelmű
	ki += hatarertek + " alatti számok: ";
	for(var i = 0;i<T.length;i++){//Tömb elemeinek száma egy feltétel alapján
		if(T[i]<hatarertek){//ha a tömb i-dik eleme kisebb, mint a határárték, akkor...
			ki += T[i] + " "; //kiírom a feltételnek megfelelt számokat
			darab++; //növelem a darabszámot, ami majd a feltételnek megfelelt számok darabszámát fogja majd megadni
		}
	}
    kiir("Tömb elemei egy feltétel alapján: " + ki);
    kiir("Tömb elemeinek száma egy feltétel alapján: " + darab + "\n");
}

function eldontes(T){//megnézzük, hogy benne van e a tömbben vagy nincs
	var keresendo = 33; //33-at keressük
	var buli = false; //Ez azért kell, mert igaz vagy hamis lehet az értéke, és ezt könnyen megtudjuk majd vizsgálni
  var eredmeny; //egyszerűbb egy változóba beleírni hogy a számb bent van e a tömbben vagy nincs, minthogy mindenhova meghívnánk a kiír metódusunkat
	for (var i=0;i<T.length;i++){
		if(keresendo==T[i]){//ha a keresendő szám ugyanaz, mint a tömb i-dik eleme (bent van a tömbben), akkor...
			buli = true;//a buli igaz lesz

      if(buli==true){//Ha a buli igaz, akkor...
        eredmeny = "Benne van."; //írjuk ki, hogy "Benne van"
        break; //Álljon meg a ciklus
        }

      else{//Ha a buli nem igaz...
        eredmeny = "Nincs benne."; //akkor pedig "Nincs benne"
        break; //Álljon meg a ciklus
        }
		}
	}
	kiir("Eldöntés tétele: "+ keresendo + " benne van a tömbben? " + eredmeny + "\n");
}

function kivalasztas(T){//pozícionálás, keresés
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
	kiir("Kivalasztas tétele: "+ keresendo + " pozíciója: " + poz + "\n");
}

function kivalogatas(T){//kiválogatjuk a határérték alatti számokat
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	var index = 0; //index, amit növelni fogunk
	megfelelt.length = 0; //kiürítjük a megfelelt tömböt
	for(var i= 0; i<T.length; i++){//kiválogatjuk a 42 alatti számokat
		if(T[i]<hatarertek){//Ha a tömb i-dik eleme kisebb a határértéknél, akkor...
			megfelelt[index] = T[i]; //Számok beírása a megfelelt tömbbe
			index++; //Index növelése
		}
	}
	kiir("Kiválogatás első módszere: " + megfelelt + "\n");
}

function kivalogatas2(T){//ugyanazt csinálja, mint az első, csak egy másik módszerrel
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	megfelelt.length = 0; //kiürítjük a megfelelt tömböt
	for(var i= 0; i<T.length; i++){//kiválogatjuk a 42 alatti számokat
		if(T[i]<hatarertek){//Ha a tömb i-dik eleme kisebb a határértéknél, akkor...
			megfelelt.push(T[i]); //Számok beírása a megfelelt tömbbe
		}
	}
	kiir("Kiválogatás második módszere: " + megfelelt + "\n");
}

function szetvalogatas(T){//külön elrakjuk a megfelelt és a nem megfelelt számokat 
	var hatarertek = 42; //a számunk határértéke, ezt később a ciklusban adjuk meg, hogy ennél kisebbnek kell lennie
	megfelelt.length = 0; //kiürítjük a megfelelt tömböt
	nemMegfelelt.length = 0; //kiürítjük a nemMegfelelt tömböt
	for(var i= 0; i<T.length;i++){//kiválogatjuk a 42 alatti számokat és külön elrakjuk a nem 42 alatti számokat is
		if(T[i]<hatarertek){//Ha a tömb i-dik eleme kisebb a határértéknél, akkor...
			megfelelt.push(T[i]); //Számok beírása a megfelelt tömbbe
    }
    else{
			nemMegfelelt.push(T[i]); //Számok beírása a nemMegfelelt tömbbe
		}
	}
	kiir("Szétválogatás tétele: ");
	kiir("Megfelelt számok: " + megfelelt);
	kiir("Nem megfelelt számok: " + nemMegfelelt + "\n");
}
//Igyekszem mindenhez hozzászólást fűzni, hogy a kevésbé hozzáértők is viszonylag könnyen tudják értelmezni a kódot
//Horváth Dániel 2018