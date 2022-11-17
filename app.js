    //Házifeladat 11.17: hozz létre egy könyvkezelő alkalmazást, használj javascriptet!

    
    //Eltárolom azokat az elemeket változókba, amiket használni szeretnék a feladat megoldásához
    //1. módszer (html dokumentumon belül az id alapján keresi az elemet)
    var title = document.getElementById("title");
    var author = document.getElementById("author");
    var number = document.getElementById("number");


    //2.módszer, nem #id, .class, html elem alapján, bármi alapján jolly joker = querySelector!
    var table = document.querySelector("#table");
    var form  = document.querySelector("form");

    //Ha a form submitolódik(submit esemény)
    //Hozzáadok a gombhoz egy submit eseményt, nem szeretném, hogy automatikusan submitolódjon gombnyomásra a formom ezért letiltom (preventDefault())
    form.addEventListener("submit", function(e) {
    
    //Tiltom a form(esemény működését -> ne frissítsen rá az oldalra submit esemény után)
    e.preventDefault();
    
    //Ide hívom meg a saját függvényem ami a könyvek hozzáadásáért felelős
    addBook();
})
    //Könyvek hozzáadásáért felelős függvény létrehozása
    function addBook() {

    //Miután rányomok a könyv hozzáadása gombra, létre kell hoznom 1 tr-t és 3 td-t

    //Létrehozok javascripttel néhány html elemet
    var tr = document.createElement("tr");
    var column1 = document.createElement("td");
    var column2 = document.createElement("td");
    var column3 = document.createElement("td");
    //Megvannak a html elemeim amiket megszeretnék jeleníteni, de nincs még tartalma
    
    //Az elöbb létrehozott html oszlopokba (td) beletöltöm az input mezők értékét!
    column1.innerText = title.value;
    column2.innerText = author.value;
    column3.innerText = number.value;

    //Beszúrjuk a létrehozott oszlopokat (td) az általunk létrehozott sorba (tr)
    //hozzáadja az elemeket egymás után nem pedig össze-vissza és a gyermekelemhez az appendChild()
    tr.appendChild(column1);
    tr.appendChild(column2);
    tr.appendChild(column3);

    //Beszúrjuk a létrehozott sort (oszlopokkal együtt) a táblázatomba
    document.querySelector("tbody").appendChild(tr);

    //Miután beszúrtunk mindent a megfelelő helyre, töröljük az input mezők értékét
    title.value = "";
    author.value = "";
    number.value = "";
}


    //Adjunk az egész oldalunkhoz automatikus téma váltást attól függően, hogy hány óra van - 16:00- elött világos téma, 16:00- után sötét téma
    //El kell tárolnunk az időt
    
    //Az aktuális dátumból eltárolom az órát
    var time = new Date().getHours();
    
    //Ha az óra > 16...mi történjen
    if(time > 16) {
      document.body.style.backgroundColor = "#2e2e2d";
    
      form.classList.add("bg-dark", "text-light");
      table.classList.add("text-light");
    } else {
        
        //Amint az óra < 16, leveszi a bootstrapes classokat!
        form.classList.remove("bg-dark", "text-light");
    }
    
