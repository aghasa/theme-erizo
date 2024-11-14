// document.addEventListener("DOMContentLoaded", function () {

//     //recorre los elementos del menu->familias y subfamilias
//     familyItems.forEach((item, index) => {
//         const subfamilyList = item.querySelector(".daterium-subfamilia-list");
//         const toggleButton = item.querySelector(".daterium-toggle-button");
//         const familyId = `#mf${index}`;

        
//         // Flecha -> subfamilias del menú
//         toggleButton.addEventListener("click", function (e) {
//             e.stopPropagation();
//             subfamilyList.classList.toggle("active");
//             toggleButton.innerHTML = subfamilyList.classList.contains("active") ? "-" : "+";

//             //ocultar subfamilis si hay otras abiertas
//             document.querySelectorAll(".daterium-subfamilia-list.active").forEach(list => {
//                 if (list !== subfamilyList) {
//                     list.classList.remove("active");
//                 }
//             });

//             //resetea la flecha cuando se pulsa otra
//             document.querySelectorAll(".daterium-toggle-button").forEach(button => {
//                 if (button !== toggleButton) {
//                     button.innerHTML = "+"; 
//                 }
//             });
//         });

//         // Subfamilia -> mostrar solo esos productos
//         const subfamilyItems = subfamilyList.querySelectorAll(".daterium-brand-menu-subitem");
        
//     });
// });


function mostrarFamilia(familyContainer) {
  if(familyContainer != familyActive){
    document.querySelectorAll(".daterium-brand-family").forEach((fam) => {
    fam.style.display = "none";
  });
  familyContainer.style.display = "block";
  familyContainer
    .querySelectorAll(".daterium-brand-subfamily")
    .forEach((sub) => {
      sub.style.display = "block";
    });

     menu_familia_nombre = '#menu-familia-' + toString(id_familia);

    familyActive = id_familia;  
    
} else {
    document.querySelectorAll(".daterium-brand-family").forEach((fam)  => {
        fam.style.display = "block";
      });
    familyActive = 0;
    }
}
/*
function mostrarProdSubfamilia(familyContainer, subfamilyContainer) {
  //ocultar familias
  document.querySelectorAll(".daterium-brand-family").forEach((fam) => {
    fam.style.display = "none";
  });
  //ocultar las demas subfamilias
  familyContainer
    .querySelectorAll(".daterium-brand-subfamily")
    .forEach((sub) => {
      sub.style.display = "none";
    });

  familyContainer.style.display = "block";
  subfamilyContainer.style.display = "block";
}*/