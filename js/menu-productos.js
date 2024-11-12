document.addEventListener("DOMContentLoaded", function () {
    const familyItems = document.querySelectorAll(".daterium-brand-menu-list-item");

    //recorre los elementos del menu->familias y subfamilias
    familyItems.forEach((item, index) => {
        const subfamilyList = item.querySelector(".daterium-subfamilia-list");
        const toggleButton = item.querySelector(".daterium-toggle-button");
        const familyId = `#mf${index}`;
        const familyContainer = document.querySelector(familyId);

        // Pulsar en la familia -> mostrar todos los productos de la familia
        item.addEventListener("click", function (e) {
            if (e.target !== toggleButton && !subfamilyList.contains(e.target)) {
                // reinicia al pulsar una family nuev
                document.querySelectorAll(".daterium-subfamilia-list.active").forEach(list => {
                    list.classList.remove("active");
                });

                // ocultar otras family
                document.querySelectorAll(".daterium-brand-family").forEach(fam => {
                    fam.style.display = "none";
                });

                // family seleccionada se ven productos
                familyContainer.style.display = "block";
                familyContainer.querySelectorAll(".daterium-brand-subfamily").forEach(sub => {
                    sub.style.display = "block";
                });

                toggleButton.innerHTML = "&#9660;"; 
            }
        });

        // Flecha -> subfamilias del menú
        toggleButton.addEventListener("click", function (e) {
            e.stopPropagation();
            subfamilyList.classList.toggle("active");
            toggleButton.innerHTML = subfamilyList.classList.contains("active") ? "&#9650;" : "&#9660;";

            //ocultar subfamilis si hay otras abiertas
            document.querySelectorAll(".daterium-subfamilia-list.active").forEach(list => {
                if (list !== subfamilyList) {
                    list.classList.remove("active");
                }
            });

            //resetea la flecha cuando se pulsa otra
            document.querySelectorAll(".daterium-toggle-button").forEach(button => {
                if (button !== toggleButton) {
                    button.innerHTML = "&#9660;"; 
                }
            });
        });

        // Subfamilia -> mostrar solo esos productos
        const subfamilyItems = subfamilyList.querySelectorAll(".daterium-brand-menu-subitem");
        subfamilyItems.forEach((subItem, subIndex) => {
            const subfamilyId = `#mf${index}sf${subIndex}`;
            const subfamilyContainer = document.querySelector(subfamilyId);

            subItem.addEventListener("click", function (e) {
                e.stopPropagation();

                document.querySelectorAll(".daterium-brand-family").forEach(fam => {
                    fam.style.display = "none";
                });

                // solo se ven productos de esa subcategoria
                familyContainer.querySelectorAll(".daterium-brand-subfamily").forEach(sub => {
                    sub.style.display = "none";
                });

                familyContainer.style.display = "block";
                subfamilyContainer.style.display = "block";
            });
        });
    });
});
