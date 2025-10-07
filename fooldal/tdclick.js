$(document).ready(function() {
    let selectedId = sessionStorage.getItem('selectedId');
    if(!selectedId) return;

    let contentLists = {
        Magyar: {
            header: "Magyar nyelv és irodalom",
            main: "Nyelvtan, helyesírás, irodalmi elemzések és fogalmazásgyakorlat.",
            footer: "© 2025 Magyar Tanszék"
        },
        Matek: {
            header: "Matematika",
            main: "Algebra, geometria, függvények, statisztika és logikai feladatok.",
            footer: "© 2025 Matek Osztály"
        },
        Halozat: {
            header: "Hálózatok",
            main: "IP-címzés, DHCP, DNS, router-konfiguráció, topológiák és hálózati modellek.",
            footer: "© 2025 Hálózati Labor"
        },
        Adatbazis: {
            header: "Adatbázis-kezelés",
            main: "Relációs adatmodellek, SQL-lekérdezések, adatkezelés és optimalizálás.",
            footer: "© 2025 Adatbázis Tanszék"
        },
        Fizika: {
            header: "Fizika",
            main: "Mechanika, elektromosság, optika, hőtan és gyakorlati kísérletek.",
            footer: "© 2025 Fizika Osztály"
        },
        Testneveles: {
            header: "Testnevelés",
            main: "Sportágak, erőnléti gyakorlatok és az egészséges életmód alapjai.",
            footer: "© 2025 Testnevelés Osztály"
        },
        IKTNI: {
            header: "IKT – Nem Informatikai csoport",
            main: "Alapvető számítógép-használat, szövegszerkesztés, prezentációk és digitális kompetenciák.",
            footer: "© 2025 IKTNI Osztály"
        },
        IKT: {
            header: "IKT – Informatikai alapismeretek",
            main: "Operációs rendszerek, szoftverhasználat és informatikai alapismeretek.",
            footer: "© 2025 IKT Osztály"
        },
        Asztali: {
            header: "Asztali alkalmazásfejlesztés",
            main: "C# programozás, WinForms, adatbázis-kapcsolat és szoftvertervezés.",
            footer: "© 2025 Fejlesztői Tanszék"
        },
        Tortenelem: {
            header: "Történelem",
            main: "Fontos események, korszakok, évszámok és történelmi személyiségek.",
            footer: "© 2025 Történelem Osztály"
        },
        SzakmaiAngolKIK: {
            header: "Szakmai angol (KIK csoport)",
            main: "Informatikai szaknyelv, kommunikációs készségek és dokumentációk fordítása.",
            footer: "© 2025 Nyelvi Központ"
        },
        AdatbazisTP: {
            header: "Adatbázis-tervezés és programozás",
            main: "Relációs modellek, kulcsok, táblakapcsolatok és SQL-programozás.",
            footer: "© 2025 Adatbázis Labor"
        },
        webprog: {
            header: "Webprogramozás",
            main: "HTML, CSS, Bootstrap, JavaScript, jQuery és reszponzív design.",
            footer: "© 2025 Webfejlesztő Tanszék"
        },
        An1: { header: "Angol 1. csoport", main: "Alapfokú nyelvtan és szókincsfejlesztés.", footer: "© 2025 Angol Osztály" },
        An2: { header: "Angol 2. csoport", main: "Beszédgyakorlat, olvasás és nyelvtani ismétlés.", footer: "© 2025 Angol Osztály" },
        An3: { header: "Angol 3. csoport", main: "Kommunikációs helyzetek és szövegértési feladatok.", footer: "© 2025 Angol Osztály" },
        An4: { header: "Angol 4. csoport", main: "Középszintű nyelvtani szerkezetek és szóhasználat.", footer: "© 2025 Angol Osztály" },
        An5: { header: "Angol 5. csoport", main: "Hallás utáni értés és szóhasználati gyakorlat.", footer: "© 2025 Angol Osztály" },
        An6: { header: "Angol 6. csoport", main: "Haladó nyelvhasználat, levelezés és prezentációk.", footer: "© 2025 Angol Osztály" },
        An7: { header: "Angol 7. csoport", main: "Társalgási és nyelvvizsga-előkészítő gyakorlatok.", footer: "© 2025 Angol Osztály" },
        An8: { header: "Angol 8. csoport", main: "Komplex kommunikációs és írásgyakorlat.", footer: "© 2025 Angol Osztály" },
        Ne1: { header: "Német 1. csoport", main: "Német nyelv alapjai, szókincs és nyelvtan.", footer: "© 2025 Német Osztály" },
        Ne2: { header: "Német 2. csoport", main: "Középfokú nyelvgyakorlat, párbeszédek és olvasás.", footer: "© 2025 Német Osztály" },
        Matematika: {
            header: "Matematika (bővített)",
            main: "Haladó algebra, geometria és kombinatorika témakörök.",
            footer: "© 2025 Matek Osztály"
        },
        SzakmaiAngol: {
            header: "Szakmai angol",
            main: "Technikai és informatikai kifejezések, dokumentációk és beszédkészség fejlesztése.",
            footer: "© 2025 Nyelvi Központ"
        },
        of: {
            header: "Osztályfőnöki óra",
            main: "Közösségi tevékenységek, osztályügyek megbeszélése és iskolai programok.",
            footer: "© 2025 Osztályfőnöki Óra"
        }
    };

    if(contentLists[selectedId]) {
        $('#header').text(contentLists[selectedId].header);
        $('#main').text(contentLists[selectedId].main);
        $('#footer').text(contentLists[selectedId].footer);
    }
});
