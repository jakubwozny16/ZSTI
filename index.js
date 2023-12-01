const express = require("express");
const mysql = require("mysql2");
const app = express();

const connection = mysql.createConnection({
  host: "109.196.50.236:10000",
  user: "zsti",
  password: "EciePecie666!",
  database: "osoby",
});

function dodaj(obj, tab) {
  const query = `INSERT INTO ${tab} SET ?`;
  connection.query(query, obj, (error, results, fields) => {
    if (error) throw error;
  });
}
function aktaualizuj(id, obj, tab) {
  const query = `UPDATE ${tab} SET ? WHERE id = ?`;
  connection.query(query, [obj, id], (error, results, fields) => {
    if (error) throw error;
  });
}
function usun(id, tab) {
  const query = `DELETE FROM ${tab} WHERE id = ?`;
  connection.query(query, [id], (error, results, fields) => {
    if (error) throw error;
  });
}

function pobierz(parametr, tab) {
  if (parametr) {
    parametr = 'WHERE `name` = "Page" AND `age` > 45';
  }

  let query = "SELECT * FROM " + tab + "parametr";
  connection.query();
  query,
    function (err, results, fields) {
      console.log(results);
      console.log(fields);
      return fields;
    };
}

app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);

function usun(id) {}

function pobierz(parametr) {}

app.get("/", (req, res) => {
  res.send(data());
});

app.listen(8080);
