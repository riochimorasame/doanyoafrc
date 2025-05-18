<script>
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nom       = document.getElementById('nom').value.trim();
  const prenom    = document.getElementById('prenom').value.trim();
  const email     = document.getElementById('email').value.trim();
  const phone     = document.getElementById('phone').value.trim();
  const pays      = document.getElementById('pays').value.trim();
  const platform  = document.getElementById('platform').value.trim();
  const message   = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Demande de contact');
  const body =
    'Nom: '        + nom      + '%0A' +
    'Prénom: '     + prenom   + '%0A' +
    'Email: '      + email    + '%0A' +
    'Téléphone: '  + phone    + '%0A' +
    'Pays: '       + pays     + '%0A' +
    'Plateforme de réponse: ' + platform + '%0A%0A' +
    'Message: '    + message;

  window.location.href = `mailto:doanyoafrica@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
});
</script>
