/* eslint-disable no-unused-vars */
// https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=82519cea572c4603b5c543ba2f281208
import React, { useState } from 'react';

const CariResep = () => {
  const [query, setQuery] = useState("");
  const [resep, setResep] = useState([]);

  const fetchResep = async () => {
    const API_KEY = "82519cea572c4603b5c543ba2f281208";
    const API_URL = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`);
    const response = await API_URL.json();
    setResep(response.results);
  }
}