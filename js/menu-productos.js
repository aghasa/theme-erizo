function mostrarFamilia(familyContainer) {
  if (familyContainer != familyActive) {

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
    familyActive = 0;
  }
}

function mostrarSubfamilias(button, familiaId) {
  console.log(familiaId);
  var subfamiliaShow = document.getElementById(familiaId);

  var subfamiliasList = document.querySelectorAll(".daterium-subfamilia-list");

  subfamiliasList.forEach((x) => {
    x.style.display = "none";
  });
  
  subfamiliaShow.style.display = "flex";
/*
  if (
    subfamiliasList.style.display === "none" ||
    subfamiliasList.style.display === ""
  ) {
    subfamiliasList.style.display = "block";
    button.textContent = "-";
  } else {
    subfamiliasList.style.display = "none";
    button.textContent = "+";
  }*/
}
