const connection = require('./connection');

const recipes = async () => connection()
  .then((db) => db.collection('recipes'));

const create = async (name, ingredients, preparation, userId) => recipes()
  .then((col) => col.insertOne({ name, ingredients, preparation, userId }));

module.exports = { create };
