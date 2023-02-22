import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = (props) => {

  console.log(props.type)

  return (
    <>
      <div className="card">
        <img
          src="https://picsum.photos/200/200"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{`${props.data?.name}`}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="card-button">
            <Link to={`/${props.type}/${props.data?.id}`} className="btn btn-primary">
              Ver mas
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
