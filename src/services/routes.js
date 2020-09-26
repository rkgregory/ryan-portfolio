import React from "react";
import About from "../components/About/About";
import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import Shows from "../components/Shows/Shows";
import Map from "../components/Map/Map";
import Stems from "../components/Stems/Stems";
import TheDullBlade from "../components/TheDullBlade/TheDullBlade";
import Join from "../components/Join/Join";
import RequestedShows from "../components/Map/RequestedShows";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/contact": () => <Contact />,
  "/shows": () => <Shows />,
  "/map": () => <Map />,
  "/stems": () => <Stems />,
  "/thedullblade": () => <TheDullBlade />,
  "/join": () => <Join />,
  "/requested-shows": () => <RequestedShows />,
};
export default routes;
