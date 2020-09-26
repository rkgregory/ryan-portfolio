import React from "react";
import { geoCentroid } from "d3-geo";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";

import allStates from "../../services/allstates.json";
import usStatesCities from "../../services/us-states-and-cities.json";
import statesHash from "../../services/states_titlecase.json";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const offsets = {
  VT: [50, -8],
  NH: [34, 2],
  MA: [30, -1],
  RI: [28, 2],
  CT: [35, 10],
  NJ: [34, 1],
  DE: [33, 0],
  MD: [47, 10],
  DC: [49, 21],
};

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};

const MapChart = ({ setTooltipContent, setTooltipCities }) => {
  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies
        geography={geoUrl}
        strokeWidth={0.5}
        stroke="#000000"
        fill="#D6D6DA"
      >
        {({ geographies }) => (
          <>
            {geographies.map((geo) => (
              <Geography key={geo.rsmKey} stroke="#FFF" geography={geo} />
            ))}

            {geographies.map((geo) => {
              const centroid = geoCentroid(geo);
              const cur = allStates.find((s) => s.val === geo.id);
              return (
                <g key={geo.rsmKey + "-name"}>
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      //   const { NAME, POP_EST } = geo.properties;
                      //   setTooltipContent(`${cur.id} — ${rounded(POP_EST)}`);
                    }}
                    onClick={() => {
                      // get state with abbreviation EX: "AK", "Alaska"
                      const usState = statesHash.find(
                        (s) => s.abbreviation == cur.id
                      );

                      // get array of cities based on current state name
                      const cities = usStatesCities[usState.name].slice(0, 8);

                      setTooltipContent(`${usState.name.toUpperCase()}`);
                      {
                        cities && setTooltipCities(cities);
                      }
                    }}
                    onMouseLeave={() => {
                      //   setTooltipContent("");
                    }}
                    style={{
                      default: {
                        fill: "#BDBDBD",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                        cursor: "pointer",
                      },
                    }}
                  />
                  {cur &&
                    centroid[0] > -160 &&
                    centroid[0] < -67 &&
                    (Object.keys(offsets).indexOf(cur.id) === -1 ? (
                      <Marker coordinates={centroid}>
                        <text y="2" fontSize={14} textAnchor="middle">
                          {/* {cur.id} */}
                        </text>
                      </Marker>
                    ) : (
                      <Annotation
                        subject={centroid}
                        dx={offsets[cur.id][0]}
                        dy={offsets[cur.id][1]}
                      >
                        <text x={4} fontSize={14} alignmentBaseline="middle">
                          {cur.id}
                        </text>
                      </Annotation>
                    ))}
                </g>
              );
            })}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};

export default MapChart;
