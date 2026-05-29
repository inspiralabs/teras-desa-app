/**
 * Pengaturan splash screen — ubah nilai di sini.
 *
 * SPLASH_MIN_DURATION_MS: durasi minimum splash tampil (ms)
 * SPLASH_FADE_OUT_MS: durasi animasi fade-out saat splash hilang (ms)
 * SPLASH_MAX_WAIT_MS: batas tunggu jika event `load` tidak terpicu (ms)
 */
export const SPLASH_STORAGE_KEY = "sigap-desa-splash-done";

/** Durasi minimum splash — default 1,8 detik */
export const SPLASH_MIN_DURATION_MS = 5000;

/** Durasi fade-out overlay */
export const SPLASH_FADE_OUT_MS = 500;

/** Fallback maksimal menunggu halaman selesai load */
export const SPLASH_MAX_WAIT_MS = SPLASH_MIN_DURATION_MS + 800;

/** Skrip inline di layout: sembunyikan konten sebelum React hydrate (mutasi body, bukan html) */
export const SPLASH_BLOCKING_SCRIPT = `(function(){try{var b=document.body;if(b&&sessionStorage.getItem("${SPLASH_STORAGE_KEY}")!=="1"){b.classList.add("splash-active")}}catch(e){}})();`;
