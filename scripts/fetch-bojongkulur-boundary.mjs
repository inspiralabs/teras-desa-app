/**
 * Ambil ulang batas administratif Desa Bojong Kulur dari OpenStreetMap (Nominatim)
 * dan tulis ke src/lib/mock-data/bojongkulur-boundary.json
 *
 * Jalankan: node scripts/fetch-bojongkulur-boundary.mjs
 */
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(
  __dirname,
  "../src/lib/mock-data/bojongkulur-boundary.json"
);

const url =
  "https://nominatim.openstreetmap.org/search?q=Bojong+Kulur+Gunung+Putri+Bogor&format=json&polygon_geojson=1&limit=1";

const res = await fetch(url, {
  headers: { "User-Agent": "sigap-desa-app-boundary-fetch/1.0" },
});
const data = await res.json();
if (!data[0]?.geojson?.coordinates?.[0]) {
  console.error("Tidak ada poligon di respons Nominatim");
  process.exit(1);
}

const ring = data[0].geojson.coordinates[0];
const boundary = ring.map(([lng, lat]) => [
  Number(Number(lat).toFixed(6)),
  Number(Number(lng).toFixed(6)),
]);

const payload = {
  boundary,
  center: {
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  },
  boundingbox: data[0].boundingbox,
  source: `OpenStreetMap ${data[0].osm_type} ${data[0].osm_id}`,
  updated: new Date().toISOString().slice(0, 10),
};

writeFileSync(outPath, JSON.stringify(payload, null, 2));
console.log(`OK: ${boundary.length} titik → ${outPath}`);
