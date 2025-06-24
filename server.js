const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Подключение к базе данных SQLite
const db = new sqlite3.Database('./db/procurement.db', (err) => {
  if (err) {
    console.error('Ошибка подключения к базе:', err.message);
  }
  console.log('Подключено к базе данных закупок.');
});

// Создание таблицы закупок, если она не существует
db.run(`CREATE TABLE IF NOT EXISTS procurements (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  subject TEXT NOT NULL,
  registry_number TEXT NOT NULL,
  date TEXT NOT NULL,
  start_price REAL NOT NULL
)`);

// Получение всех закупок (GET)
app.get('/procurements', (req, res) => {
  db.all('SELECT * FROM procurements', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Добавление новой закупки (POST)
app.post('/procurements', (req, res) => {
  const { subject, registry_number, date, start_price } = req.body;
  if (!subject || !registry_number || !date || !start_price) {
    res.status(400).json({ error: 'Все поля обязательны' });
    return;
  }
  db.run(`INSERT INTO procurements (subject, registry_number, date, start_price) VALUES (?, ?, ?, ?)`, 
    [subject, registry_number, date, start_price], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
});

// Обновление закупки (PUT)
app.put('/procurements/:id', (req, res) => {
  const { subject, registry_number, date, start_price } = req.body;
  const id = req.params.id;
  if (!subject || !registry_number || !date || !start_price) {
    res.status(400).json({ error: 'Все поля обязательны' });
    return;
  }
  db.run(`UPDATE procurements SET subject = ?, registry_number = ?, date = ?, start_price = ? WHERE id = ?`, 
    [subject, registry_number, date, start_price, id], function(err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ changes: this.changes });
    });
});

// Удаление закупки (DELETE)
app.delete('/procurements/:id', (req, res) => {
  const id = req.params.id;
  db.run(`DELETE FROM procurements WHERE id = ?`, id, function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ deleted: this.changes });
  });
});

// Запуск сервера
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});