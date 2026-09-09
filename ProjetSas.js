var prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];
let choix;
do {
    console.log("===== RAILWAY MANAGER=====");
    console.log("1. Afficher les trajets");
    console.log("2. Acheter un ticket");
    console.log("3. Afficher les tickets");
    console.log("4. Annuler un ticket");
    console.log("5. Rechercher un ticket");
    console.log("6. Filtrer les trajets");
    console.log("7. Trier les trajets");
    console.log("0. Quitter");

    choix = Number(prompt('Votre choix : '));
    switch (choix) {
        case 1:
            affichageTrajet(trips)
            break;

        case 2:
            let NomDuPassager = prompt('Nom du passager :  ');
            let trajetId = Number(prompt('Identifiant du trajet :   '));
            console.log(chercheTrajet(trajetId));
            console.log(verifierExistenceTrajet(trajetId));
            console.log(verifierExistencePlace(trajetId));
            console.log(createTicket(NomDuPassager, trajetId));
            break;

        case 3:

            break;

        case 4:

            break;

        case 5:

            break;
        case 6:

            break;
        case 7:

            break;

        case 0:
            console.log("Merci, a bientot!");
            break;

        default:
            console.log("Choix invalide, essayez encore");
    }

} while (choix != 0);

//3. Afficher les trajets
function affichageTrajet(trips) {
    if (trips.length === 0) {
        console.log("il n'y a aucun trajet pour le moment")
        return
    }
    console.log("=== TRAJETS DISPONIBLES ===");
    for (const trip of trips) {
        console.log("#" + trip.id + " " + trip.departure + " -> " + trip.destination);
        console.log("Départ : " + trip.departureTime);
        console.log("Arrivée : " + trip.arrivalTime);
        console.log("Prix : " + trip.price + "DH");
        console.log("Places disponibles : " + trip.availableSeats);
        console.log("");
    }

}

//4. Acheter un ticket
// rechercher le trajet correspondant
function chercheTrajet(trajetId) {
    for (let i = 0; i < trips.length; i++) {
        if (trips[i].id === trajetId) {
            return trips[i];
        }
    }
    return undefined;
}

// vérifier que le trajet existe
function verifierExistenceTrajet(trajetId) {
    const trajet = chercheTrajet(trajetId);
    if (trajet !== undefined) {
        return true;
    } else {
        return false;
    }
}

// vérifier qu'il reste au moins une place disponible
function verifierExistencePlace(trajetId) {
    const trajet = chercheTrajet(trajetId);
    if (!verifierExistenceTrajet(trajetId) || trajet.availableSeats <= 0) {
        return false;
    }
    return true;
}

//créer un ticket ;
function createTicket(NomDuPassager, trajetId) {
    if (!verifierExistencePlace(trajetId)) {
        return undefined;
    }
    const trajet = chercheTrajet(trajetId);
    const newTicket = {
        id: tickets.length + 1,
        passengerName: NomDuPassager,
        tripId: trajet.id,
        seatNumber: trips.availableSeats - trajet.availableSeats + 1,
        price: trajet.price
    };
    return newTicket;
}
