const form = document.querySelector("form");
const notifAtas = document.getElementById("notif-atas");
const notifBawah = document.getElementById("notif-bawah");

form.addEventListener("submit", function(e){

    e.preventDefault();

    // ambil data form
    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const hobi = document.getElementById("hobi").value;

    if(nama === ""){
        return;
    }

    // POP UP
    alert("✅ Data telah dikirim!");

    // setelah klik OKE → tampil data
    notifBawah.innerHTML += `
        <div class="notif">
            <h3>Data Pengirim</h3>

            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Alamat:</strong> ${alamat}</p>
            <p><strong>Hobi:</strong> ${hobi}</p>
        </div>
    `;

    form.reset();

});

window.onload = function(){
    notifAtas.innerHTML="";
};