const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Caminho para o arquivo do banco de dados SQLite
const dbPath = path.resolve(__dirname, 'mydatabase.db');

// Conectar ao banco de dados (criará o arquivo se não existir)
const db = new sqlite3.Database(dbPath);

// Criar a tabela de pets (se não existir)
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS pets (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, breed TEXT, age INTEGER)');
});

// Função para adicionar um novo animal de estimação
const addPet = (name, breed, age) => {
  return new Promise((resolve, reject) => {
    db.run('INSERT INTO pets (name, breed, age) VALUES (?, ?, ?)', [name, breed, age], function(err) {
      if (err) {
        reject(err);
      } else {
        resolve(this.lastID); // Retorna o ID do animal de estimação inserido
      }
    });
  });
};

// Função para buscar todos os animais de estimação
const getAllPets = () => {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM pets', (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

module.exports = { addPet, getAllPets };
