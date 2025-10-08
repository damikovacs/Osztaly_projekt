$(document).ready(function() {
    let selectedId = sessionStorage.getItem('selectedId');
    if(!selectedId) return;

const contentLists = {
    Magyar: {
        header: "Magyar nyelv és irodalom",
        main: "Nyelvtan, helyesírás, szövegértés, fogalmazás, irodalmi elemzés. Évfolyamspecifikusan Petőfi, József Attila, Ady művek részletes elemzése.",
        footer: "Tanár: Szerencsés Tímea <br>Elérhetőség: szerencsestimea@turr.hu"
    },
    Matek: {
        header: "Matematika",
        main: "Algebra, egyenletek, függvények, geometria, trigonometria, kombinatorika, statisztika és valószínűségszámítás. Év során gyakorló feladatok és problémamegoldó gyakorlatok.",
        footer: "Tanár: Huzsvay Edit <br>Elérhetőség: huzsvayedit@turr.hu"
    },
    Tortenelem: {
        header: "Történelem",
        main: "Magyar és világ történelem, fontos események, évszámok, személyek. Részletes áttekintés a 20. század eseményeiről és történelmi összefüggésekről.",
        footer: "Tanár: Pakainé Estók Júlia <br>Elérhetőség: pakainestokjulia@turr.hu"
    },
    Fizika: {
        header: "Fizika",
        main: "Mechanika, hőtan, elektromosságtan, mágnesesség, optika. Gyakorlati kísérletek és problémamegoldó feladatok az éves tananyaghoz.",
        footer: "Tanár: Kollányi Miklós György <br>Elérhetőség: kollanyimiklosgyorgy@turr.hu"
    },
    Testneveles: {
        header: "Testnevelés",
        main: "Állóképesség, ügyesség, sportágak gyakorlata, torna, mozgáskoordináció. Évközi és gyakorlati feladatok a fizikai állóképesség fejlesztésére.",
        footer: "Tanár: Dancsa Bálint <br>Elérhetőség: dancsabalint@turr.hu"
    },
    IKT: {
        header: "Informatika (Szoftveres csoport)",
        main: "Programozás alapjai (JavaScript, Python), webfejlesztés (HTML, CSS, JS), adatbázis-kezelés, gyakorlati IT-projektek.",
        footer: "Tanár: Szőcs Gábor <br>Elérhetőség: szocsgabor@turr.hu"
    },
    IKTNI: {
        header: "Informatika (Hálózatos csoport)",
        main: "Hálózati alapok, protokollok, konfigurálás, IP-címzés, hálózati problémamegoldás, szerverek és routerek gyakorlati beállítása.",
        footer: "Tanár: Németh Ildikó <br>Elérhetőség: nemethildiko@turr.hu"
    },
    Adatbazis: {
        header: "Adatbázis-kezelés",
        main: "Relációs adatbázisok, SQL lekérdezések, adatmodellezés, tervezés, adatbázis-kezelő rendszerek gyakorlati felhasználása.",
        footer: "Tanár: Posgay Erzsébet <br>Elérhetőség: posgayerzsebet@turr.hu"
    },
    AdatbazisTP: {
        header: "Adatbázis-kezelés (Hálózatos)",
        main: "Hálózati adatbázisok kezelése, SQL, adatbázis-tervezés, adatbiztonság, szerveroldali konfigurációk és hálózati kapcsolatok gyakorlata.",
        footer: "Tanár: Taskovics Péter <br>Elérhetőség: taskovicspeter@turr.hu"
    },
    Asztali: {
        header: "Asztali alkalmazások fejlesztése",
        main: "GUI alkalmazások készítése, programozási logika, felhasználói felületek tervezése, gyakorlati példák évközi projektekhez.",
        footer: "Tanár: Posgay Erzsébet <br>Elérhetőség: posgayerzsebet@turr.hu"
    },
    webprog: {
        header: "Webprogramozás",
        main: "HTML, CSS, JavaScript, dinamikus weboldalak készítése, DOM manipuláció, gyakorlati webprojektek.",
        footer: "Tanár: Foki Zoltán <br>Elérhetőség: fokizoltan@turr.hu"
    },
    Halozat: {
        header: "Hálózati ismeretek",
        main: "Számítógépes hálózatok, protokollok, IP-címzés, routerek és switch-ek konfigurálása, hálózati biztonság, gyakorlati hálózati gyakorlatok.",
        footer: "Tanár: Varga József <br>Elérhetőség: varga.jozsef@turr.hu"
    },
    SzakmaiAngol: {
        header: "Szakmai angol (Szoftveres)",
        main: "Programozási és informatikai kifejezések angolul, dokumentációk, szövegértés és beszédgyakorlatok.",
        footer: "Tanár: Bencze Balázs <br>Elérhetőség: benczebalazs@turr.hu"
    },
    SzakmaiAngolKIK: {
        header: "Szakmai angol (Hálózatos)",
        main: "Szakmai terminológia, angol nyelvű hálózati dokumentációk, kommunikáció és olvasott szöveg feldolgozás.",
        footer: "Tanár: Kics Klára <br>Elérhetőség: kik@turr.hu"
    },
    An1: { header: "Angol csoport 1", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Szőcs Krisztina <br>Elérhetőség: szocskrisztina@turr.hu" },
    An2: { header: "Angol csoport 2", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Balykó Gyöngyvér Barbara <br>Elérhetőség: balykogyongyverbarbara@turr.hu" },
    An3: { header: "Angol csoport 3", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Bata Mónika <br>Elérhetőség: batamonika@turr.hu" },
    An4: { header: "Angol csoport 4", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Rácz Előd <br>Elérhetőség: raczelod@turr.hu" },
    An5: { header: "Angol csoport 5", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Lakner Mónika <br>Elérhetőség: laknermonika@turr.hu" },
    An6: { header: "Angol csoport 6", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Nemes Anikó <br>Elérhetőség: nemesanikó@turr.hu" },
    An7: { header: "Angol csoport 7", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Kiss Klára <br>Elérhetőség: kissklara@turr.hu" },
    An8: { header: "Angol csoport 8", main: "Angol nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Bencze Balázs <br>Elérhetőség: benczebalazs@turr.hu" },
    Ne1: { header: "Német csoport 1", main: "Német nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Pumpné Bíró Ágnes <br>Elérhetőség: pumpnebiroagnes@turr.hu" },
    Ne2: { header: "Német csoport 2", main: "Német nyelvi készségek fejlesztése, szókincs és nyelvtan.", footer: "Tanár: Debela-Hegyi Éva <br>Elérhetőség: debela-hegyieva@turr.hu" },
    of: { header: "Osztályfőnöki", main: "Közösségépítés, pályaorientáció, iskolai szabályok és szociális készségek fejlesztése.", footer: "Tanár: Németh Ildikó <br>Elérhetőség: nemethildiko@turr.hu" }
};



    if(contentLists[selectedId]) {
        $('#header').text(contentLists[selectedId].header);
        $('#main').text(contentLists[selectedId].main);
        $('#footer').html(contentLists[selectedId].footer);
    }
});
