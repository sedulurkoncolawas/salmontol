 window.addEventListener('load', function() {
          const loadingOverlay = document.getElementById('loading-overlay');
          loadingOverlay.style.display = 'none';
      });
     
window.onload = function() {
    Swal.fire({
        title: 'Woi Gembrot😹',
        text: 'Woi salma tolol gembrot negro yapit, debat sini anjg bawa aja semua temen lu sini😹',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Gas',
        cancelButtonText: 'Gak, Gue Cupu😭'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'https://chat.whatsapp.com/LDPvQRyl4ad40If8FLgunI';
        } else if (result.isDismissed) {
            Swal.fire({
                title: 'Gembrot Cupu😹',
                text: 'sal, lu kok tolol bet dah cupu amat😹',
                showConfirmButton: false,
                showCancelButton: true,
                cancelButtonText: 'Iyalah, gue emang tolol😭'
            }).then((result) => {
            });
        }
    });
};