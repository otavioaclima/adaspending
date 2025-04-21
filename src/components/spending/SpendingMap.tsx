
import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

interface SpendingMapProps {
  height?: string;
}

const MAPBOX_DEFAULT_TOKEN = ""; // (fallback vazio se não achar a env variable)

const SpendingMap: React.FC<SpendingMapProps> = ({ height = "100%" }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(MAPBOX_DEFAULT_TOKEN);

  useEffect(() => {
    // Buscar token de env do Supabase se houver, ou fallback para MAPBOX_DEFAULT_TOKEN
    const supabaseToken = import.meta.env.VITE_MAPBOX_PUBLIC_TOKEN || MAPBOX_DEFAULT_TOKEN;
    setToken(supabaseToken);
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !token) return;

    mapboxgl.accessToken = token;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      projection: 'globe',
      zoom: 1.5,
      center: [30, 15],
      pitch: 45
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      "top-right"
    );
    map.current.scrollZoom.disable();
    map.current.on("style.load", () => {
      map.current?.setFog({
        color: "rgb(255, 255, 255)",
        "high-color": "rgb(200, 200, 225)",
        "horizon-blend": 0.2,
      });
    });

    // Efeito de rotação automática do globo
    const secondsPerRevolution = 240;
    const maxSpinZoom = 5;
    const slowSpinZoom = 3;
    let userInteracting = false;
    let spinEnabled = true;

    function spinGlobe() {
      if (!map.current) return;
      const zoom = map.current.getZoom();
      if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
        let distancePerSecond = 360 / secondsPerRevolution;
        if (zoom > slowSpinZoom) {
          const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
          distancePerSecond *= zoomDif;
        }
        const center = map.current.getCenter();
        center.lng -= distancePerSecond;
        map.current.easeTo({ center, duration: 1000, easing: (n: number) => n });
      }
    }

    map.current.on("mousedown", () => { userInteracting = true; });
    map.current.on("dragstart", () => { userInteracting = true; });
    map.current.on("mouseup", () => { userInteracting = false; spinGlobe(); });
    map.current.on("touchend", () => { userInteracting = false; spinGlobe(); });
    map.current.on("moveend", () => { spinGlobe(); });
    spinGlobe();

    // Limpeza ao desmontar
    return () => {
      map.current?.remove();
    };
  }, [token]);

  return (
    <div style={{ width: "100%", height, minHeight: 340, borderRadius: 12, overflow: "hidden", position: "relative" }}>
      {!token && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
          <div className="text-center">
            <p className="text-gray-700 text-sm mb-1 font-semibold">Mapbox token not set</p>
            <p className="text-xs text-gray-500">
              Please set <code>VITE_MAPBOX_PUBLIC_TOKEN</code> in your environment variables.<br/>
              See Lovable docs for details.
            </p>
          </div>
        </div>
      )}
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
    </div>
  );
};

export default SpendingMap;
