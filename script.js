<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Style-Type" content="text/css">
  <title></title>
  <meta name="Generator" content="Cocoa HTML Writer">
  <meta name="CocoaVersion" content="2022.7">
  <style type="text/css">
    p.p1 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica}
    p.p2 {margin: 0.0px 0.0px 0.0px 0.0px; font: 12.0px Helvetica; min-height: 14.0px}
  </style>
</head>
<body>
<p class="p1">function validerOrdonnance() {</p>
<p class="p1"><span class="Apple-converted-space">  </span>// Code pour valider l'ordonnance et effectuer les actions nécessaires</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Calcul de la durée du traitement et du nombre de boîtes</p>
<p class="p1"><span class="Apple-converted-space">  </span>var posologie = document.getElementById('posologie').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>var dureeTraitement = document.getElementById('duree-traitement').value;</p>
<p class="p1"><span class="Apple-converted-space">  </span>var nombreBoites = Math.ceil(dureeTraitement / posologie);</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('duree-traitement-result').textContent = dureeTraitement + " jours";</p>
<p class="p1"><span class="Apple-converted-space">  </span>document.getElementById('nombre-boites-result').textContent = nombreBoites;</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>// Vérification de la durée du traitement écoulée</p>
<p class="p1"><span class="Apple-converted-space">  </span>var dateFinTraitement = new Date();</p>
<p class="p1"><span class="Apple-converted-space">  </span>dateFinTraitement.setDate(dateFinTraitement.getDate() + parseInt(dureeTraitement));</p>
<p class="p1"><span class="Apple-converted-space">  </span>var maintenant = new Date();</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>if (maintenant &gt; dateFinTraitement) {</p>
<p class="p1"><span class="Apple-converted-space">    </span>var notification = document.getElementById('notification');</p>
<p class="p1"><span class="Apple-converted-space">    </span>notification.textContent = "La durée du traitement est écoulée.";</p>
<p class="p1"><span class="Apple-converted-space">    </span>notification.classList.add('notification-error');</p>
<p class="p1"><span class="Apple-converted-space">  </span>}</p>
<p class="p2"><span class="Apple-converted-space">  </span></p>
<p class="p1"><span class="Apple-converted-space">  </span>return false;</p>
<p class="p1">}</p>
</body>
</html>
