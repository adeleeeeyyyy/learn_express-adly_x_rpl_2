// Import library Express
const express = require('express')

// Membuat instance aplikasi Express
const app = express()

// Menentukan port yang akan digunakan
const port = 3000

// Menanggapi permintaan GET ke rute utama ("/") dengan pesan "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Mendengarkan koneksi pada port yang ditentukan
app.listen(port, () => {
  console.log(`url: http://localhost:${port}`)
})

