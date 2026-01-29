import { useEffect, useRef, useState } from 'react';
// @ts-ignore
import Globe from 'react-globe.gl';

export default function Globe3D() {
    const globeEl = useRef<any>(null);
    const [arcs, setArcs] = useState<any[]>([]);

    useEffect(() => {
        // Generate random arcs to Canada (approx lat: 43.65, lng: -79.38)
        const N = 20;
        const canadaLat = 43.6532; // Toronto
        const canadaLng = -79.3832;

        const newArcs = [...Array(N).keys()].map(() => ({
            startLat: (Math.random() - 0.5) * 180,
            startLng: (Math.random() - 0.5) * 360,
            endLat: canadaLat,
            endLng: canadaLng,
            color: [['#C92C37', '#CEA028'][Math.round(Math.random())]], // Red or Gold
        }));
        setArcs(newArcs);

        if (globeEl.current) {
            // Auto-rotate
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.5;
            // Disable Zoom to keep it tidy
            globeEl.current.controls().enableZoom = false;
        }
    }, []);

    return (
        <div className="cursor-move flex items-center justify-center">
            <Globe
                ref={globeEl}
                globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="https://unpkg.com/three-globe/example/img/earth-topology.png"
                backgroundColor="rgba(0,0,0,0)"
                arcsData={arcs}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={2}
                arcDashInitialGap={() => Math.random()}
                arcDashAnimateTime={2000}
                width={500}
                height={500}
            />
        </div>
    );
}
