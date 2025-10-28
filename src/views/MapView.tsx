"use client";

import React from "react";
import Link from "next/link";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaMapMarkedAlt } from "react-icons/fa";


const MapView: React.FC = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

  return (
    <div className="grid grid-cols-2 w-4xl h-auto mt-8">
      <div>
        <div className="w-96 h-80 rounded-lg">
          <Map
            initialViewState={{
              longitude: -60.5761448,
              latitude: -33.9038557,
              zoom: 14,
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={mapboxToken}
          >
          <Marker longitude={-60.5761448} latitude={-33.9038557} color="orange"/>
        </Map>
        </div>
      </div>
      <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 bg-(--card) p-5 rounded-2xl border-[1px] border-slate-400">
            <div className="flex justify-start items-center p-2">
              <FaMapMarkedAlt width={100} height={100} color="orange"/>
              <div className="ml-3">
                <p className="text-xl font-semibold">Dirección</p>
                <span className="text-(--muted-foreground) font-light">Intendente Biscayart Sur 452</span>
              </div>
            </div>
            <div className="flex justify-start items-center p-2">
              <FaMapMarkedAlt width={100} height={100} color="orange"/>
              <div className="ml-3">
                <p className="text-xl font-semibold
                ">Telefono</p>
                <span className="text-(--muted-foreground) font-light ">+1 234 567 890</span>
              </div></div>
            <div className="flex justify-start items-center p-2">
              <FaMapMarkedAlt width={100} height={100} color="orange"/>
              <div className="grid grid-cols-1 justify-center items-center ml-3">
                <p className="text-xl font-semibold
                ">Horarios</p>
                <span className="text-(--muted-foreground) font-light ">Lun - Vie: 6:00 AM - 10:00 PM</span>
                <span className="text-(--muted-foreground) font-light ">Sáb - Dom: 8:00 AM - 8:00 PM</span>
              </div></div>
          </div>
          <Link href="https://www.google.com/maps/dir//Club+N%C3%A1utico+Pergamino,+Int.+Biscayart+sur+452,+B2700+Pergamino,+Provincia+de+Buenos+Aires/@-33.9038557,-60.5761448,176m/data=!3m1!1e3!4m17!1m7!3m6!1s0x95b9b5fdb5968f3b:0x6a50115ae9c8ec5a!2sClub+N%C3%A1utico+Pergamino!8m2!3d-33.9039177!4d-60.5760481!16s%2Fg%2F11sq54yg_4!4m8!1m0!1m5!1m1!1s0x95b9b5fdb5968f3b:0x6a50115ae9c8ec5a!2m2!1d-60.576032!2d-33.9038816!3e1?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
          className="bg-(--primary)/70 hover:bg-(--primary) hover:shadow-xl hover:shadow-(--primary) py-2 px-12 rounded-lg mt-5">
            <button
            className="text-xl font-bold text-black">Como llegar</button>
          </Link>
      </div>
    </div>
  );
};

export default MapView;