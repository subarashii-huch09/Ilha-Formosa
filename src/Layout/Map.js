import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MdRestaurant } from "react-icons/md";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const center = [-41.290256837594484, 174.78863949319103];
const position = [-41.29203369751206, 174.7880674030105];
const Map =() => {
  
  return (
    <MapContainer
      center={center}
      zoom={15}
      style={{
        minWidth: "100vw",
        height: "55vh",
        padding: "1.25rem",
        margin: "0",
      }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=R8C6AR8WlPd7MPIzkPoA"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <Marker position={position}>
        <Popup>
          <MdRestaurant size={18} color={"green"} />
          <span
            style={{
              fontWeight: "bold",
              marginLeft: "0.75rem",
              fontSize: "1.2rem",
            }}
          >
            Ilha Formosa
          </span>
          <br />
          Authentic Taiwanese Restaurant
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
