import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Vehicles } from "../component/vehicles";
import { Planets } from "../component/planets";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.personajes();
    actions.planetas();
    actions.vehiculos();
  }, []);

  return (
    <>
      <div>
        {" "}
        <h1 className=" text-danger p-3">Characteres</h1>
      </div>
      <div
        className="row d-flex flex-column"
        style={{ height: "32rem", overflowX: "auto" }}
      >
        {store.people.map((value, index, uid) => {
          return (
            <Card
              style={{ margin: "5rem" }}
              key={index}
              name={value.name}
              link={`/character/${value.uid}`}
              uid={value.uid}
            />
          );
        })}
      </div>

      <div>
        <h1 className=" text-danger p-3">Planets</h1>
      </div>
      <div
        className="row d-flex flex-column"
        style={{ height: "32rem", overflowX: "auto" }}
      >
        {store.planets.map((value, index, uid) => {
          return (
            <Card
              style={{ margin: "5rem" }}
              key={index}
              name={value.name}
              uid={value.uid}
              link={`/character/${value.uid}`}
            />
          );
        })}
      </div>
      <div>
      <h1 className=" text-danger p-3">Vehicles</h1>
      </div>
      <div
        className="row d-flex flex-column"
        style={{ height: "32rem", overflowX: "auto" }}
      >
        {store.vehicles.map((value, index, uid) => {
          return (
            <Card
              style={{ margin: "5rem" }}
              key={index}
              name={value.name}
              link={`/character/${value.uid}`}
            />
          );
        })}
      </div>
    </>
  );
};
