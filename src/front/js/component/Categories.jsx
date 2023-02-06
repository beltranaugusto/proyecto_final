import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card.jsx";

export const Categories = () => {
  return (
    <>
      <div className="home">
        <div className="container container-categories">
          <h1>Categoria</h1>
          <div className="home-card-list">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};