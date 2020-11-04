const registerSW = () => {
  if ('serviceWorker' in navigator) {
    register();
  } else {
    console.log('ServiceWorker belum didukung browser ini.')
  }
}

const register = async () => {
  try {
    await navigator.serviceWorker.register('./sw.js')
    console.log('Pendaftaran ServiceWorker berhasil')
  } catch(e) {
    console.log('Pendaftaran ServiceWorker gagal')
  }
}

export default registerSW;