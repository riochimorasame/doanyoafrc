<!-- … contenu de la page … -->

<form id="contactForm">
  <!-- vos champs -->
</form>

<script>
window.addEventListener('DOMContentLoaded', () => {

  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const get = id => encodeURIComponent(document.getElementById(id).value.trim());

    const body =
      `Nom: ${get('nom')}`           + '%0A' +
      `Prénom: ${get('prenom')}`     + '%0A' +
      `Email: ${get('email')}`       + '%0A' +
      `Téléphone: ${get('phone')}`   + '%0A' +
      `Pays: ${get('pays')}`         + '%0A' +
      `Plateforme de réponse: ${get('platform')}` + '%0A%0A' +
      `Message: ${get('message')}`;

    const url =
      `mailto:doanyoafrica@gmail.com?subject=${encodeURIComponent('Demande de contact')}`
      + `&body=${body}`;

    window.location.href = url;
  });

});
</script>
</body>
