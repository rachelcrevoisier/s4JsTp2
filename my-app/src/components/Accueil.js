const Accueil = () => {
    return (
        <div>
            <h4>
                Création d’un site web à l’aide de la librairie React.js
            </h4>
            <p>
                Félicitations, vous avez reçu un mandat pour créer un site monopage (SPA) pour
                un site e-commerce. La première partie de ce projet consiste à insérer, mettre à
                jour, supprimer et répertorier les produits. Le client n'a pas de base de données,
                donc pour tester ce projet, vous utiliserez un objet JSON dans 2 scénarios
                différents.<br />
                Le premier scénario vous permettra de gérer tous les produits comme une
                variable côté client. Le deuxième scénario consiste à utiliser un serveur JSON
                pour tester le REST avec un serveur externe (simulé).<br />
                Les informations sur le produit qui doivent être enregistrées sont :
                • Le nom, la description, le prix et la catégorie.<br />
                Une fois enregistré, le produit doit apparaître en bas de page avec un bouton pour
                le mettre à jour et un bouton pour le supprimer. Toutes les opérations doivent être
                exécutés sans recharger la page (Requête HTTP).<br />
                Le client vous a demandé de créer une page de présentation de l'entreprise. Cette
                page doit être accessible depuis un menu de navigation et/ou directement depuis
                le navigateur web avec le nom de la page (route).<br />
                Votre projet doit répondre aux critères suivants.<br />
                • Créer un projet React.js CLI<br />
                • Un menu de navigation entre les pages (Accueil / produits)<br />
                • Pour la conception (CSS), vous pouvez utiliser le framework bootstrap
                (vanilla, aucun modèle autorisé) ou développer votre propre css.<br />
                Deux Livraisons :<br />
                • Premier scénario - Créez une version de production avec le premier
                scénario et la publiez sur WebDev.<br />
                • Deuxième scénario - Maintenez le même projet et les mêmes
                fonctionnalités mais maintenant vous allez le tester avec un serveur JSON
                (simulé), cette dernière version doit être publiée sur GitHub. Enregistrez
                une courte vidéo de votre écran (max 3 min) avec le projet en cours
                d'exécution sur votre environnement local. Présentez toutes les pages et
                fonctions au fur et à mesure que le côté serveur change. Envoyez la vidéo
                avec le projet</p>
           
        </div>
    )
}
export default Accueil