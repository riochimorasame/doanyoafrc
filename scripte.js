document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var pays = document.getElementById('pays').value;
    var platform = document.getElementById('platform').value;
    var message = document.getElementById('message').value;

    var mailtoLink = 'mailto:doanyoafrica@gmail.com 
                    + '?subject=Demande de contact'
                    + '&body=Nom: ' + nom
                    + '%0APrénom: ' + prenom
                    + '%0AEmail: ' + email
                    + '%0ATéléphone: ' + phone
                    + '%0APays: ' + pays
                    + '%0APlateforme de réponse: ' + platform
                    + '%0A%0AMessage: ' + message;
    
    window.location.href = mailtoLink;
});
