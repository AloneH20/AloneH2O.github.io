// Almacenamiento de la imagen de fondo
function saveBackground(url) {
    localStorage.setItem('bgImage', url);
}

// Obtener la imagen de fondo guardada
function getSavedBackground() {
    return localStorage.getItem('bgImage');
}

// Cambiar la imagen de fondo
function changeBackground() {
    const url = document.getElementById('bgImageUrl').value;
    if (url) {
        const img = new Image();
        img.onload = function() {
            document.body.style.backgroundImage = `url('${url}')`;
            saveBackground(url);
        };
        img.onerror = function() {
            alert('Error: La URL no parece ser una imagen válida. Por favor, verifica el enlace.');
        };
        img.src = url;
    } else {
        alert('Por favor, ingresa una URL válida.');
    }
}

// Establecer fondo predeterminado
function setDefaultBackground() {
    const defaultImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb';
    document.body.style.backgroundImage = `url('${defaultImage}')`;
    document.getElementById('bgImageUrl').value = defaultImage;
    saveBackground(defaultImage);
}

// Restablecer a la imagen inicial
function resetBackground() {
    localStorage.removeItem('bgImage');
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')";
    document.getElementById('bgImageUrl').value = '';
}

// Configurar event listeners cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Asignar eventos a los botones
    document.getElementById('changeBgBtn').addEventListener('click', changeBackground);
    document.getElementById('defaultBgBtn').addEventListener('click', setDefaultBackground);
    document.getElementById('resetBgBtn').addEventListener('click', resetBackground);
    
    // Verificar si hay una imagen guardada al cargar la página
    const savedBgImage = getSavedBackground();
    if (savedBgImage) {
        document.body.style.backgroundImage = `url('${savedBgImage}')`;
        document.getElementById('bgImageUrl').value = savedBgImage;
    }
});