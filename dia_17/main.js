/* let btn = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
let contador = 0;

btn.addEventListener("click", function (evento) {
  console.log(evento);
});
 */

let btn = document.querySelector("#btn");
let img = document.querySelector("#imagen");
let dia = true;

// btn.addEventListener("click", function () {
//   dia = !dia;
//   if (dia) {
//     btn.textContent = "Dia";
//     img.setAttribute(
//       "src",
//       "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png"
//     );
//   } else {
//     btn.textContent = "noche";
//     img.setAttribute(
//       "src",
//       "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Princess_Fiona.png/130px-Princess_Fiona.png"
//     );
//   }
// });

let estado = 0; // Variable para rastrear el estado (0, 1, 2, 3)

btn.addEventListener("click", function () {
  estado = (estado + 1) % 4; // Cicla entre 0, 1, 2, 3

  switch (estado) {
    case 0:
      btn.textContent = "Anakin Padawan";
      img.setAttribute(
        "src",
        "https://starwars7eradeplatino.fandom.com/pt-br/wiki/Anakin_Skywalker?file=AniPadawan.jpg"
      );
      break;
    case 1:
      btn.textContent = "Segundo";
      img.setAttribute(
        "src",
        "https://starwars7eradeplatino.fandom.com/pt-br/wiki/Anakin_Skywalker"
      );
      break;
    case 2:
      btn.textContent = "Tercero";
      img.setAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/en/d/d0/Fiona_standing_human.png"
      );
      break;
    case 3:
      btn.textContent = "Cuarto";
      img.setAttribute(
        "src",
        "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Princess_Fiona.png/130px-Princess_Fiona.png"
      );
      break;
  }
});