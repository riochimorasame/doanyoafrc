window.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', e => {
    e.preventDefault();

    // Récupération et encodage
    const val = id => encodeURIComponent(document.getElementById(id).value.trim());

    const body =
      `Nom: ${val('nom')}`           + '%0A' +
      `Prénom: ${val('prenom')}`     + '%0A' +
      `Email: ${val('email')}`       + '%0A' +
      `Téléphone: ${val('phone')}`   + '%0A' +
      `Pays: ${val('pays')}`         + '%0A' +
      `Plateforme de réponse: ${val('platform')}` + '%0A%0A' +
      `Message: ${val('message')}`;

    const url = `mailto:doanyoafrica@gmail.com?subject=${encodeURIComponent('Demande de contact')}&body=${body}`;

    console.log('Ouverture de :', url);   // pour vérifier
    window.location.href = url;
  });

});
