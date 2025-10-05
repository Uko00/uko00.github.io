window.onload = function() {
  let btnAdcioneArtigo = document.getElementById("btnAdcioneArtigo");
  let formAdcArtigo = document.getElementById("formAdcArtigo");
  let formularioAtivo = false;

  btnAdcioneArtigo.onclick = function() {
    formularioAtivo = !formularioAtivo;
    
    if (formularioAtivo) {
      formAdcArtigo["style"]["display"] = "flex";
      return;
    } else { formAdcArtigo["style"]["display"] = "none" };

  };
}


function mostrarFormularioAdcArtigo() {
  formularioAtivo = !formularioAtivo;
  console.log("formulário ativado");
  console.log(formularioAtivo);
}
