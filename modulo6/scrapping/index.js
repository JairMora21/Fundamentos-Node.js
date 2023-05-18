/* 
Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web.
Usualmente, estos programas simulan la navegación de un humano en la World Wide Web ya sea utilizando el 
protocolo HTTP manualmente, o incrustando un navegador en una aplicación.

modulo de node 

 npm  i puppeteer
*/


const pupeteer = require("puppeteer");

(async () => {
  //Nuestro codigo
  console.log("Lanzamos navegador");
  //const browser = await pupeteer.launch();
  const browser = await pupeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://es.wikipedia.org/wiki/Node.js"); // lugar donde va a extraer informacion


  var titulo1 = await page.evaluate (() => { // este fragmento del codigo extrae el titulo 
    const h1 = document.querySelector('h1');
    console.log(h1.in);
    return h1.innerHTML;
  })

  console.log(titulo1); // <span class="mw-page-title-main">Node.js</span>

  console.log("Cerramos navegador");
  //browser.close();
  console.log("Navegador cerrado");
})();
