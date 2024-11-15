

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

     menu_familia_nombre = '#menu-familia-' + toString(familyContainer);

    familyActive = familyContainer;  
    
} else {
    document.querySelectorAll(".daterium-brand-family").forEach((fam)  => {
        fam.style.display = "block";
      });
    familyActive = 0;
    }
}

