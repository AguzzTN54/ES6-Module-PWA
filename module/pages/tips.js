import '../components/recent-stories.js';

class Tips extends HTMLElement {
  connectedCallback() {
    document.title = 'Beberapa Tips Liburan Untukmu'
    this.render();
    M.Parallax.init(this.querySelectorAll('.parallax'))
  }

  render() {
    this.innerHTML = `
    <section class="tips">
      <div class="container">
        <h3>Beberapa Tips Liburan Untukmu</h3>
        <ul class="collection" style="border: 0;">
          <li class="collection-item avatar">
            <a href="#about" class="link black-text">
            <img loading='lazy' src="./images/author.jpeg" alt="Author" class="circle" />
              <span class="title">Agustinus Yohannes</span>
            </a>
            <p class="grey-text text-darken-1">Jun 22, 2019</p>
          </li>
        </ul>
      </div>
      <article class="container">
        <div class="parallax-container" style="height:400px">
          <div class="parallax">
            <img loading='lazy' src="./images/ugc9.webp" alt="Bandung">
          </div>
        </div>
        <p>
          Liburan sudah menjadi kebutuhan bagi manusia. banyak sekali manfaat yang didapat dari berlibur di sela penatnya pekerjaan. Tapi untuk destinasi yang cukup jauh perlu ada persiapan dan perencanaan yang matang. Untuk itu di di bawah ada beberapa tips untuk kamu yang ingin berlibur agar Liburanmu makin berkesan.
        </p>
        <p>
          <h4>1. Tentukan Jadwal Packing</h4>
          Jangan Mepet Liburan yang nyaman dimulai dari packing yang sempurna. Jika sudah menentukan tanggal keberangkatan, segera tentukan waktu untuk packing. Jangan terlalu mepet dengan jadwal keberangkatan. Butuh cukup waktu untuk packing yang benar, agar bisa lebih santai dan tak ada barang penting yang terlewat untuk dibawa. Tentunya tidak asyik jika sudah tiba di tempat tujuan, kemudian baru menyadari ada barang yang tertinggal karena packing terburu-buru.
        </p>
        <p>
          <h4>2. Buat Daftar Barang Bawaan</h4>
          Saat packing, buatlah daftar barang apa saja yang akan dibawa. Tulis di buku atau notes di ponsel agar tak mudah hilang. Kalau bingung, kamu bisa mencari contoh barang apa saja yang harus dibawa di internet. Kamu bisa juga bertanya kepada teman yang sudah pernah pergi ke detinasi tujuan yang sama. Mintalah saran apa saja yang perlu dan tidak perlu dibawa.
        </p>
        <p>
          <h4>3. Bawa Obat-Obatan</h4>
          Ada pepatah, sedia payung sebelum hujan. Bawalah obat-obatan pribadi saat packing untuk traveling. Kita tidak pernah tahu apakah akan sakit atau tidak saat liburan. Oleh sebab itu, bawalah obat-obatan yang sering kamu pakai untuk jaga-jaga. Di tempat yang kita datangi, belum tentu obat-obatan yang kita butuhkan tersedia. Akan jauh lebih baik untuk membawa obat-obatan dari rumah. Ya, tidak ada salahnya untuk jaga-jaga.
        </p>
        <p>
          <h4>4. Tukar Uang Sebelum ke Luar Negeri</h4>
          Demi kenyamanan saat traveling ke luar negeri, sangat disarankan untuk menukarkan rupiah sebelum keberangkatan. Walau sudah ada kartu kredit, namun uang tunai lokal tetap penting untuk pegangan. Tidak disarankan membawa rupiah ke luar negeri karena nilai tukarnya kecil. Bawalah dollar AS atau mata uang negara tujuan kamu. Lagipula jika menukarkan uang di dalam negeri, traveler bisa mendapat harga yang lebih kompetitif.
        </p>
        <p>
          <h4>5. Taruh Sumber Uang di Tempat yang Berbeda</h4>
          Jika akan travelling, jangan menaruh semua uang, kartu kredit dan kartu ATM dalam dompet atau tas. Baiknya, pisahkan beberapa hal tersebut di tempat yang berbeda agar tidak menyulitkan Anda saat salah satu dari benda tersebut hilang.
        </p>
        <p>
          <h4>6. Web Check-in Lebih Praktis</h4>
          Jika traveling menggunakan pesawat, jika dimungkinkan pastikan kamu melakukan web check-in terlebih dulu. Biasanya hampir setiap maskapai besar memiliki jasa web check-in yang memudahkan traveler. Jika sudah check-in, tentunya traveler akan lebih santai.
          Namun perlu diingat, kadang ada maskapai yang mengharuskan traveler untuk melakukan web check-in dua hari sebelum hari H. Traveler pun harus mengerti aturan web check-in dari tiap maskapai yang berbeda-beda.
        </p>
      </article>
      <div class="parallax-container" style="height:200px">
        <div class="parallax">
          <img loading='lazy' src="./images/covid19_banner_web.webp" alt="Kelimutu">
        </div>
      </div>
      <article class="container">
        <p>
          <h4>7. Buat Daftar Belanja</h4>
          Kalau berencana membeli oleh-oleh, coba disusun daftarnya. Suvenir dan makanan apa yang mau dibeli dan buat siapa. Mungkin terdengar sepele, namun penting untuk traveler yang cukup pelupa. Selain untuk pengingat, daftar belanjaan juga berguna untuk mengecek ulang kesesuaian barang yang kita beli dengan daftar yang ada. Jika kurang atau lebih, pun bisa tercatat. Apalagi jika disertai dengan harganya, tentu itu akan makin baik karena bisa juga untuk menghitung pengeluaran belanja saat traveling.
        </p>
        <p>
          <h4>8. Jangan Malu Bertanya</h4>
          Malu bertanya sesat di jalan, kalimat tersebut benar adanya. Kadang kita malu untuk bertanya lokasi atau tempat tujuan kepada orang lain, entah merasa takut atau merasa tidak enak saat traveling. Akibatnya, siap-siap tersesat di jalan dan banyak waktu terbuang. Jangan malu untuk bertanya ketika kita sedang kesusahan. Pilih bahasa yang sopan dan jangan lupa untuk ucapkan terimakasih saat bertanya. Manusia itu mahluk sosial, pasti membutuhkan manusia lain. Jadi, jangan malu bertanya ya!
        </p>
        <p>
          <h4>9. Cari Makanan Khas</h4>
          Traveling ke sebuah destinasi tak lengkap tanpa mencicipi makanan khas yang ada di sana. Baik dalam maupun luar negeri, coba cari informasi terlebih dahulu makanan khas apa saja yang bisa Anda temukan di destinasi tujuan. Meski negaranya sama, makanan khas di tiap kota biasanya berbeda. Blusukan ke Jawa Tengah misalnya, kamu bisa mencicipi gudeg serta oseng-oseng mercon di Yogyakarta kemudian saat melipir ke Solo, bisa mencicipi tengkleng legendaris di dekat Pasar Triwindu.
        </p>
        <p>
          <h4>10. Tanya Harga Sebelum Beli Makanan</h4>
          Sebelum berwisata kuliner pastikan kamu menanyakan harga makanan sebelum membeli. Hal ini untuk mencegah supaya kamu tidak dibohongi penjual makanan. Maklum saja, terkadang turis digetok harga lebih mahal dari pada warga lokal. Jadi, ketika kamu berminat dengan suatu makanan atau restoran, jangan langsung duduk dan memesan. Tanya dulu berapa harganya, kalau dimahalkan, jangan ragu untuk pergi ke tempat lain. Jangan sampai kita ditipu gara-gara makanan. Rasanya tidak seberapa, uang kita malah habis. Waspada ya!
        </p>
        <p> 
          <h4>11. Istirahat Cukup di Hari Terakhir</h4>
          Karena euforia liburan, kita kadang sampai begadang justru di hari terakhir liburan. Tidak ada salahnya bersuka ria, namun pertimbangkan jadwal kepulangan, belum lagi urusan packing yang makan waktu. Jika pulang pagi, artinya di hari terakhir kita tidak bisa jalan-jalan sampai larut malam. Jangan sampai juga kita melewatkan waktu tidur karena sibuk packing sampai tengah malam. Akibatnya kita pulang dengan kondisi kelelahan. Atau paling gawat, ketiduran dan bangun terlambat di hari kepulangan. Bisa kacau deh!
        </p>
        <p>
          <h4>12. Carilah Asuransi Perjalanan</h4>
          Yang terakhir dan paling penting adalah carilah asuransi perjalanan. Hal ini untuk mengcover biaya kesehatan jika Anda sakit atau terluka sementara di luar negeri. Biaya rumah sakit dapat dengan cepat masuk ke menguras kantong Anda, bahkan untuk luka ringan. Jadi, jika Anda senang travelling, memiliki asuransi perjalanan sangatlah penting.
        </p>
      </article>
      <recent-item></recent-item>
    </section>  
    `;
  }
}

customElements.define('tips-page', Tips);
