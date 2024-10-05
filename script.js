function cekKhodam() {
    const nameInput = document.getElementById("nameInput").value;
    if (!nameInput) {
        Swal.fire({
            title: "YANG ISI KOSONG OSHI NYA GRAD",
            icon: "error",
            confirmButtonText: "OK",
        });
        return;
    }

    document.getElementById("loading").style.display = "block"; // Tampilkan spinner
    setTimeout(() => {
        const khodams = [
            { name: "KOSONG", meaning: "YHAHAHAHA OSHI NYA GRAD.", image: "img/wkwkwk.jpg" },
            { name: "Amanda Sukma", meaning: "Aku akan membuat hatimu berdebar kencang, seperti lagu dengan 1000bpm.", image: "img/amanda.jpg" },
            { name: "Angelina Christy", meaning: "Peduli dan berbaik hati siapakah dia? Christy.", image: "img/christy.jpg" },
            { name: "Aurellia", meaning: "Si social butterfly yang energik dan periang!.", image: "img/lia.jpg" },
            { name: "Callista Alifia", meaning: "Si beruang madu penyuka madu!", image: "img/keli.jpg" },
            { name: "Cornelia Vanisa", meaning: "Seperti teka teki yang akan membuat kalian penasaran denganku!.", image: "img/oniel.jpg" },
            { name: "Febriola Sinambela", meaning: "Dengan keajaibanku, akun akan membuat kalian penasaran denganku. Halo aku Olla si Mechanic girl", image: "img/olla.jpg" },
            { name: "Feni Fitriyanti", meaning: "Matahari yang indah, yang akan memberikan kehangatan disetiap harinya.", image: "img/feni.jpg" },
            { name: "Fiony Alveria", meaning: "Seperti simfoni yang menenagkan hati. Halo aku Fiony.", image: "img/fiony.jpg" },
            { name: "Flora Shafiq", meaning: "Ada yang mau ikut aku? Ayo ikut ke dunia Flora simsalabim akan ku buat kamu jadi berbunga-bunga.", image: "img/flora.jpg" },
            { name: "Freya Jayawardana", meaning: "Gadis koleris yang suka berimajinasi terangi harimu dengan senyum karamel ku.", image: "img/freya.jpg" },
            { name: "Gabriela Abigail", meaning: "Ohayo! Konnichiwa! Oyasumi! Aku ingin ada di setiap waktumu.", image: "img/ella.jpg" },
            { name: "Gita Sekar Andarini", meaning: "Diam bukan berarti tidak memperhatikanmu.", image: "img/gita.jpg" },
            { name: "Grace Octaviani", meaning: "Manis seperti gulali, imut seperti kelinci.", image: "img/gracie.jpg" },
            { name: "Greesella Adhalia", meaning: "Pandangan mataku akan menyinari hatimu bagaikan kunang-kunang di malam hari.", image: "img/greesell.jpg" },
            { name: "Helisma Putri", meaning: "Aprikot aprikot aprikot aprikot pang! Dengan energi kegembiraanku akan menghangatkan suasana.", image: "img/eli.jpg" },
            { name: "Indah Cahya", meaning: "Tak banyak bicara bercerita lewat tulisan.", image: "img/indah.jpg" },
            { name: "Indira Seruni", meaning: "Senyuman dalam mataku menatap lurus kepadamu, smiley eyes Indira!", image: "img/indira.jpg" },
            { name: "Jessica Chandra", meaning: "Suka menari dan akan berusaha menjadi sumber energimu.", image: "img/jessi.jpg" },
            { name: "Jesslyn Elly", meaning: "Seperti ombak laut yang tenang, tiba-tiba aku akan menyapumu dengan banyak cinta!", image: "img/lyn.jpg" },
            { name: "Kathrina Irene", meaning: "Never miss a change to be a star!.", image: "img/atin.jpg" },
            { name: "Lulu Salsabila", meaning: "Seperti kerang ajaib yang indah suara semangatku akan mengiringi hidupmu.", image: "img/lulu.jpg" },
            { name: "Marsha Lenathea", meaning: "Seperti pizza yang selalu dinanti nantikan semua orang, selalu nantikan aku ya!", image: "img/marsha.jpg" },
            { name: "Mutiara Azzahra", meaning: "Dengan kelincahanku, aku akan menari setiap hari, panggil aku Mu Mu Mu Muthe!", image: "img/muthe.jpg" },
            { name: "Raisha Syifa", meaning: "Kalau sakura itu kembang, Aku itu kembanggaanmu!", image: "img/raisha.jpg" },
            { name: "Reva Fidela", meaning: "Bagai kucing yang kalem, tapi selalu memikat hati kamu.", image: "img/adel.jpg" },
            { name: "Shani Gracia", meaning: "Senyumku akan terekam jelas dalam ingatanmu seperti foto dengan sejuta warna. Namaku Gracia, Always Smile", image: "img/gracia.jpg" },
            { name: "Abigail Rachel", meaning: "Seperti bunga yang mekar, aku akan membuat kamu..kamu..dan kamu terbayang-bayang..Aku Ara..Aralie!", image: "img/aralie.jpg" },
            { name: "Adeline Wijaya", meaning: "Nyemangatin dan ngangenin..siapa yang kamu pikirkan..Delynn.", image: "img/delynn.jpg" },
            { name: "Alya Amanda", meaning: "Jika hatimu sedang menangis, aku akan datang sebagai pelangi.", image: "img/alya.jpg" },
            { name: "Anindya Ramadhani", meaning: "Si mungil hadir, semanis mangga.", image: "img/anin.jpg" },
            { name: "Aurhel Alana", meaning: "Dengan kekuatan bulan aku akan menyihirmu dengan pesonaku!", image: "img/lana.jpg" },
            { name: "Catherina Vallencia", meaning: "Hadir dengan seribu kejutan..Checkmate! Siap memenangkan hatimu!", image: "img/erine.jpg" },
            { name: "Cathleen Nixie", meaning: "Cring... Si peri cantik jelita, itulah aku.", image: "img/keti.jpg" },
            { name: "Celine Thefani", meaning: "Semanis permen kapas dan seindah bunga lavender.", image: "img/elin.jpg" },
            { name: "Chelsea Davina", meaning: "As bright as the shooting stars in the starry night sky.", image: "img/celsi.jpg" },
            { name: "Cynthia Yaputera", meaning: "Semangatku terus menerus meluap, pop pop.", image: "img/cynthia.jpg" },
            { name: "Dena Natalia", meaning: "Tok tok! Siapa? Si penari yang akan menarikmu ke duniaku.", image: "img/dena.jpg" },
            { name: "Desy Natalia", meaning: "Seperti bunga daisy, aku akan memancarkan kesegaran dan kebahagiaan.", image: "img/desy.jpg" },
            { name: "Fritzy Rosmerian", meaning: "Abracadabra..si pesulap yang siap membuat..hatimu terpikat!", image: "img/fritzy.jpg" },
            { name: "Gendis Mayrannisa", meaning: "Bonjour, periang dan pencair suasana itulah aku.", image: "img/gendis.jpg" },
            { name: "Hillary Abigail", meaning: "Papipapipu aku akan mengejutkanmu dengan kehebatan ku.", image: "img/lily.jpg" },
            { name: "Jazzlyn Trisha", meaning: "Pelukis yang hadir di mimpi-mimpi indahmu. One, two, Tri... sha!", image: "img/trisha.jpg" },
            { name: "Letycia Moreen", meaning: "Sweet as bubble gum, graceful as a princess. Siapakah itu? One and only, Moreen!", image: "img/moreen.jpg" },
            { name: "Michelle Alexandra", meaning: "All is your number one. To infinity and beyond.", image: "img/michie.jpg" },
            { name: "Michelle Levia", meaning: "Are you ready? Jalani hari ini dengan menari bersama ku! Yuhu..Aku Levi!", image: "img/levi.jpg" },
            { name: "Nayla Suji", meaning: "Moshi..Mosh! Welcome Nyala Land! Halo semuanya, bakyu-n nama aku Nayla!", image: "img/nayla.jpg" },
            { name: "Nina Tutachia", meaning: "Si Panda Unyu yang selalu ceria! Hai aku Nachia..bikin kamu bahagia!", image: "img/nina.jpg" },
            { name: "Oline Manuel", meaning: "Semangatku full terus! Gass..gass..gass..Oline!", image: "img/oline.jpg" },
            { name: "Regina Willian", meaning: "Bagi kalium yang bereaksi dengan air, aku akan meledak dengan semangat ku! Boom! Aku Regie!", image: "img/regi.jpg" },
            { name: "Ribka Budiman", meaning: "Mirror..Mirror on the wall..who the sweetest in here..It's me Ribka!", image: "img/ribka.jpg" },
            { name: "Shabilqis Naila", meaning: "Roar! Si Singa pemberani yang siap menyemangati harimu!", image: "img/nala.jpg" },
            { name: "Victoria Kimberly", meaning: "Bagi hamster yang lincah, aku akan berlari-lari di pikiranmu..Halo Haa katakan Kimmy!", image: "img/kimmy.jpg" }
        ];

        const khodam = khodams[Math.floor(Math.random() * khodams.length)];
        document.getElementById("khodamName").innerText = `Oshi Kamu: ${khodam.name}`;
        document.getElementById("khodamMeaning").innerText = khodam.meaning;

        // Tambahkan gambar khodam
        document.getElementById("khodamImage").src = khodam.image;
        document.getElementById("khodamImage").style.display = "block"; // Tampilkan gambar

        // Tampilkan hasil dan sembunyikan spinner
        document.getElementById("result").style.display = "block";
        document.getElementById("loading").style.display = "none";

    }, 2000);
}