// import L from 'leaflet';
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup } from 'react-leaflet';

const OpenTopoMap = () => {
  const route: [number, number][] = [
    [43.6532, 40.3743], // примерные координаты
    [43.6540, 40.3750],
    [43.6545, 40.3760],
    [43.6555, 40.3775],
    [43.6565, 40.3778],
  ];


  const pointsOfInterest = [
    { pos: route[1], desc: 'Первая точка' },
    { pos: route[2], desc: 'Вторая точка' },
    { pos: route[3], desc: 'Третья точка' },
];

  return (
    <MapContainer center={route[2]} zoom={15} style={{ height: '600px', width: '600px', borderRadius: '40px', margin: 'auto'}}>
      <TileLayer
        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
        attribution='Map data: &copy; <a href="https://opentopomap.org">OpenTopoMap</a>'
      />
      <Polyline positions={route} color="black" /> 

      {pointsOfInterest.map((p, i) => (
        <CircleMarker center={p.pos} radius={6} color="blue" key={i}>
          <Popup>{p.desc}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};
export default OpenTopoMap