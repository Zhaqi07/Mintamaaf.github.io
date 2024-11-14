// script.js

// Menunggu sampai seluruh halaman dan konten dimuat
window.onload = function() {
    const whatsappButton = document.getElementById('whatsapp-button');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    // Menambahkan event listener pada tombol
    whatsappButton.addEventListener('click', function() {
        // Menyembunyikan tombol
        whatsappButton.style.display = 'none';
        
        // Menampilkan pesan terima kasih
        thankYouMessage.style.display = 'block';
        
        // Mengarahkan pengguna ke WhatsApp setelah beberapa detik
        setTimeout(function() {
            window.location.href = 'https://wa.me/yourphonenumber'; // Ganti dengan nomor WhatsApp Anda
        }, 2000); // Mengarahkan setelah 2 detik
    });
};
