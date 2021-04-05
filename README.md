# Justify_txt

Pour utiliser cette API, il est nécessaire d’avoir les logiciels :
  - MongoDB
  - POSTMAN
 
 Vous auriez aussi besoin des packages suivants :
 
  - express
  - mongoose
  - jsonwebtoken
  - body-parser
  
 Pour créer un utilisateur vous devez faire une requete Post avec l'url : POST localhost:3000/api/signup
 
 Ici nous allons créer un utilisateur qui a une adresse mail : foo@bar.com
 
<img width="1254" alt="Capture d’écran 2021-04-05 à 20 21 47" src="https://user-images.githubusercontent.com/80544586/113609892-b4cdd000-964c-11eb-9cda-f2c4e30c0350.png">


L'endpoint localhost:3000/api/justify permet de récuperer du texte de longeur 80 caractères de retourner un texte justifié.
Cette methode contient un mécanisme d’authentification.Si on essaie de l'executer sans avoir entrer le token cela nous envoie une erreur.
Exemple:

<img width="1254" alt="Capture d’écran 2021-04-05 à 16 53 41" src="https://user-images.githubusercontent.com/80544586/113606212-fc059200-9647-11eb-84c5-b640ac129ec4.png">

Pour avoir son token, il faut aller à l'url : POST localhost:3000/api/token

Dans la partie "Body", cochez le format "x-www-form-urlencoded", puis renseignez la key:value. Par exemple ici email : foo@bar.com
Appuyez sur SEND.

Si l'utilisateur est bien existant POSTMAN vous retourne une reponse en JSON avec un token.
<img width="1254" alt="Capture d’écran 2021-04-05 à 16 29 36" src="https://user-images.githubusercontent.com/80544586/113606757-b8f7ee80-9648-11eb-9183-3aeb9f716318.png">

Il faudra copier le token 
Allez ensuite a l'url : POST localhost:3000/api/justify
 
Dans la partie "Authorization", sélectionner le type : "Bearer token" et puis coller votre token.

<img width="1254" alt="Capture d’écran 2021-04-05 à 17 35 22" src="https://user-images.githubusercontent.com/80544586/113607264-4d625100-9649-11eb-8486-ad30fe412c83.png">

Il ne reste plus qu'à rentrer dans la partie "Body" votre texte :

<img width="1254" alt="Capture d’écran 2021-04-05 à 16 40 41" src="https://user-images.githubusercontent.com/80544586/113607487-8ac6de80-9649-11eb-8a42-598e072804ce.png">




