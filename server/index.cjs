const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3000;


const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'users_db',
});


db.connect(err => {
    if (err) throw err;
    console.log('Connecté à la base de données MySQL');

    const query = `
      SELECT 
        trajets.id AS trajet_id, 
        trajets.date, 
        trajets.heure,
        trajets.depart, 
        trajets.destination, 
        trajets.nbr_places, 
        users.id AS user_id, 
        users.username, 
        users.email 
      FROM trajets 
      JOIN users ON trajets.user_id = users.id
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Erreur lors de la récupération des trajets:', err);
            return;
        }

        const trajetsData = JSON.stringify(results, null, 2);

        fs.writeFile('../server/data/trajets.json', trajetsData, (err) => {
            if (err) {
                console.error('Erreur lors de l\'écriture du fichier JSON des trajets:', err);
            } else {
                console.log('Les données des trajets ont été exportées avec succès dans trajets.json');
            }
        });
    });

    const queryUsers = `
    SELECT 
        id AS user_id, 
        username, 
        email
    FROM users
    `;

    db.query(queryUsers, (err, userResults) => {
        if (err) {
            console.error('Erreur lors de la récupération des utilisateurs:', err);
            return;
        }
        const usersData = userResults.map(user => ({
            user_id: user.user_id,
            username: user.username,
            email: user.email
        }));

        fs.writeFile('../server/data/users.json', JSON.stringify(usersData, null, 2), (err) => {
            if (err) {
                console.error('Erreur lors de l\'écriture du fichier JSON des utilisateurs:', err);
            } else {
                console.log('Les données des utilisateurs ont été exportées avec succès dans users.json');
            }
        });
    });
});




app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = { username, email, password: hashedPassword };

        db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', 
        [user.username, user.email, user.password], (err, result) => {
            if (err) {
                console.error('Erreur lors de la création de l\'utilisateur:', err);
                return res.status(500).json({ message: 'Erreur serveur lors de la création de l\'utilisateur' });
            }
            // Renvoyer l'ID nouvellement créé
            res.status(201).json({ 
                message: 'Utilisateur créé avec succès !', 
                userId: result.insertId // Ajout de l'ID dans la réponse
            });
        });
    } catch (err) {
        console.error('Erreur de hachage du mot de passe:', err);
        res.status(500).json({ message: 'Erreur lors de la création du mot de passe' });
    }
});




app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email et mot de passe requis' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Erreur lors de la requête MySQL:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        const user = results[0];

        try {
            const isMatch = await bcrypt.compare(password, user.password);
            
            if (isMatch) {
                res.json({ message: 'Connexion réussie', userId: user.id });
            } else {
                res.status(401).json({ message: 'Mot de passe incorrect' });
            }
        } catch (err) {
            console.error('Erreur lors de la comparaison des mots de passe:', err);
            res.status(500).json({ message: 'Erreur serveur' });
        }
    });



    app.get('/profile/:userId', (req, res) => {
        const userId = req.params.userId;
        const query = `SELECT * FROM users WHERE id = ?`;
      
        db.query(query, [userId], (err, results) => {
          if (err) {
            console.error('Erreur lors de la récupération des données utilisateur:', err);
            return res.status(500).json({ message: 'Erreur serveur' });
          }
          if (results.length === 0) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
          }
          res.json(results[0]);
        });
      });
});







/*
// Route POST pour mettre à jour les places disponibles et réservées
app.post('/update-places', (req, res) => {
    const { trajetId, placesAAjouter, nbr_places } = req.body;
  
    if (!trajetId || placesAAjouter === undefined || nbr_places === undefined) {
      return res.status(400).send('Données manquantes');
    }
  
    // Requête SQL pour mettre à jour les places dans la base de données
    const updateQuery = `
      UPDATE trajets
      SET nbr_places = ?, places_reservees = places_reservees + ?
      WHERE id = ?;
    `;
  
    // Exécution de la requête avec les valeurs envoyées
    db.query(updateQuery, [nbr_places, placesAAjouter, trajetId], (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour des places:', err);
        return res.status(500).send('Erreur serveur');
      }
      console.log(`Le trajet ${trajetId} a été mis à jour avec succès.`);
      return res.status(200).send('Mise à jour réussie');
    });
  });
*/




app.get('/trajets', (req, res) => {

    const filePath = path.join(__dirname, 'data', 'trajets.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Erreur de lecture du fichier JSON:', err);
            return res.status(500).json({ error: 'Erreur serveur' });
        }
        res.json(JSON.parse(data));
        });
    });
    
    
    
    app.put('/modifyTrip/:id', (req, res) => {
        const tripId = req.params.id; // L'identifiant du trajet à modifier
        const { date, heure, depart, destination, nbr_places } = req.body; // Les nouvelles données
        const query = `
            UPDATE trajets
            SET 
                date = ?, 
                heure = ?, 
                depart = ?, 
                destination = ?, 
                nbr_places = ?
            WHERE id = ?;
        `;
        const values = [date, heure, depart, destination, nbr_places, tripId];
        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Erreur lors de la mise à jour du trajet:', err);
                return res.status(500).json({ message: 'Erreur serveur lors de la mise à jour du trajet.' });
            }
    
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Trajet non trouvé.' });
            }
    
            res.status(200).json({ message: 'Trajet mis à jour avec succès.' });
        });
    });
    
    
    
    app.delete('/deleteTrip/:id', (req, res) => {
        const tripId = req.params.id;
        db.query('DELETE FROM trajets WHERE id = ?', [tripId], (err, result) => {
            if (err) {
                console.error('Erreur lors de la suppression du trajet :', err);
                return res.status(500).json({ message: 'Erreur serveur lors de la suppression du trajet.' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Trajet non trouvé.' });
            }
            res.status(200).json({ message: 'Trajet supprimé avec succès.' });
        });
    
        console.log("Le trajet "+tripId+" viens d'etre supprimé de la base de données")
    }),

app.listen(port, () => console.log(`Serveur lancé sur http://localhost:${port}`));