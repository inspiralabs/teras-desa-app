/**
 * =============================================================================
 * BATAS WILAYAH DESA BOJONG KULUR — PETA LEAFLET
 * =============================================================================
 *
 * File ini dipakai oleh:
 *   - `src/components/desa-kami/DesaKamiMap.tsx`  → komponen `<Polygon>`
 *   - `src/lib/mock-data/bestie-prodeskel.ts`     → re-export `BOJONGKULUR_BOUNDARY`
 *
 * Data koordinat disimpan di:
 *   → `src/lib/mock-data/bojongkulur-boundary.json`  (array titik [lat, lng])
 *
 * ---------------------------------------------------------------------------
 * CARA GANTI BENTUK POLIGON SENDIRI
 * ---------------------------------------------------------------------------
 *
 * 1) Edit JSON (paling mudah)
 *    Buka `bojongkulur-boundary.json`, ubah array `boundary`:
 *      "boundary": [
 *        [-6.33159, 106.96021],   // [latitude, longitude] — urutan Leaflet
 *        [-6.33211, 106.96040],
 *        ...
 *        [-6.33159, 106.96021]    // titik terakhir = sama dengan titik pertama (menutup poligon)
 *      ]
 *    Simpan → refresh halaman /desa-kami (Profil Desa).
 *
 * 2) Dari Google Maps (link tempat, BUKAN otomatis jadi poligon desa)
 *    Link seperti https://maps.app.goo.gl/caM2yqrXHX57BzVa7 hanya memberi SATU titik.
 *    Untuk batas desa penuh:
 *    - Buat peta di Google My Maps → gambar poligon → ekspor KML/GeoJSON, ATAU
 *    - Pakai batas resmi GeoJSON dari desa/kabupaten, ATAU
 *    - Trace di geojson.io / openstreetmap.org (relation desa).
 *    Konversi GeoJSON [lng,lat] → Leaflet [lat,lng] (balik urutan tiap pasangan).
 *
 * 3) Dari OpenStreetMap (batas administratif — yang dipakai sekarang)
 *    Jalankan di folder `sigap-desa-app`:
 *      node scripts/fetch-bojongkulur-boundary.mjs
 *    (script mengambil ulang poligon OSM dan menimpa JSON.)
 *
 * 4) Pusat peta & marker POI
 *    - Pusat: `center` di JSON atau `BOJONGKULUR_CENTER` di bestie-prodeskel.ts (baris ~30)
 *    - Marker: `DESA_POI_MARKERS` di bestie-prodeskel.ts (baris ~80+)
 *
 * Format: SELALU [latitude, longitude] — contoh Bojong Kulur sekitar -6.32, 106.97
 * =============================================================================
 */

import boundaryData from "./bojongkulur-boundary.json";

export type LatLngTuple = [number, number];

export const BOJONGKULUR_BOUNDARY = boundaryData.boundary as LatLngTuple[];

export const BOJONGKULUR_CENTER = {
  lat: boundaryData.center.lat,
  lng: boundaryData.center.lng,
  zoom: 14,
} as const;

export const BOJONGKULUR_BOUNDARY_META = {
  source: boundaryData.source,
  updated: boundaryData.updated,
  pointCount: BOJONGKULUR_BOUNDARY.length,
} as const;
