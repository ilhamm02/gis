import PlaceCard from "./PlaceCard";

import { GeoJSON } from "../constants";

function Sidebar() {
  return (
    <div className="absolute z-50 bottom-5 right-5 p-3 bg-zinc-950 text-white w-96 rounded-md">
      <h3 className="font-bold uppercase">Places</h3>

      {GeoJSON.map((place) => {
        return (
          <PlaceCard
            key={place.position}
            placeName={place.name}
            latitude={place.position[0]}
            longitude={place.position[1]}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
