
function mostrarSubfamilias(familiaId) {
  var subfamiliaId = 's'+familiaId;
  var subfamiliaShow = document.getElementById(subfamiliaId);

  var subfamiliasList = document.querySelectorAll(".daterium-subfamilia-list");

  subfamiliasList.forEach((x) => {
    x.style.display = "none";
  });
  
  subfamiliaShow.style.display = "flex";
};

function cambiarColorActivo(familiaMenu) {

  var familiaIdActive = 'b'+ familiaMenu;
  var familiaActive = document.getElementById(familiaIdActive);

  var familyContainersMenu = document.querySelectorAll(".daterium-brand-menu-list-item");

  familyContainersMenu.forEach((x) => {
    x.classList.remove('colorActivo');
  });

  familiaActive.classList.add('colorActivo');

}

function mostrarFamilia(familyContainer) {
  if (familyContainer != familyActive) {
    mostrarSubfamilias(familyContainer);
    cambiarColorActivo(familyContainer);
    familyContainerDiv =  document.getElementById(familyContainer);
    document.querySelectorAll(".daterium-brand-family").forEach((fam) => {
      fam.style.display = "none";
    });
    familyContainerDiv.style.display = "block";
    familyContainerDiv
      .querySelectorAll(".daterium-brand-subfamily")
      .forEach((sub) => {
        sub.style.display = "block";
      });
    familyActive = familyContainer;
  } else {
    document.querySelectorAll(".daterium-brand-family").forEach((fam) => {
      fam.style.display = "block";
    });
    document.querySelectorAll(".daterium-brand-menu-list-item").forEach((item) => {
      item.classList.remove('colorActivo');
    });
    document
      .querySelectorAll(".daterium-subfamilia-list")
      .forEach((sub) => {
        sub.style.display = "none";
      });
    familyActive = 0;
  }
};