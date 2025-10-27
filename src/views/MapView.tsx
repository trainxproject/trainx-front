// // "use client";

// // import React, { useState } from "react";
// // import Map, { Marker, ViewState } from "react-map-gl";

// // const MapView: React.FC = () => {
// //   const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

// //   const [viewState, setViewState] = useState<ViewState>({
// //     longitude: -58.5802, // Longitud de tu negocio
// //     latitude: -34.1167,  // Latitud de tu negocio
// //     zoom: 15,
// //   });

// //   return (
// //     <div className="w-full h-96">
// //       <Map
// //         {...viewState}
// //         onViewStateChange={({ viewState }) => setViewState(viewState)}
// //         width="100%"
// //         height="100%"
// //         mapStyle="mapbox://styles/mapbox/streets-v11"
// //         mapboxApiAccessToken={mapboxToken}
// //       >
// //         <Marker longitude={-58.5802} latitude={-34.1167} />
// //       </Map>
// //     </div>
// //   );
// // };

// // export default MapView;

// "use client";

// import React from "react";
// import Map, { Marker } from "react-map-gl";
// import "mapbox-gl/dist/mapbox-gl.css";

// const MapView: React.FC = () => {
//   const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

//   return (
//     <div className="w-full h-96">
//       <Map
//         initialViewState={{
//           longitude: -58.5802,
//           latitude: -34.1167,
//           zoom: 15,
//         }}
//         mapStyle="mapbox://styles/mapbox/streets-v11"
//         mapboxAccessToken={mapboxToken}
//       >
//         <Marker longitude={-58.5802} latitude={-34.1167} />
//       </Map>
//     </div>
//   );
// };

// export default MapView;



