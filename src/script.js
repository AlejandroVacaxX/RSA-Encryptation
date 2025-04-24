document.addEventListener('DOMContentLoaded', () => {
    const cardNip = document.getElementById('cardNip');
    const cardStatus = document.getElementById('cardStatus');
    const rsaKeysElement = document.getElementById('rsaKeys');
    const encryptedNipElement = document.getElementById('encryptedNip');
    const decryptedNipElement = document.getElementById('decryptedNip');
    const keys = document.querySelectorAll('.key[data-number]');
    const clearBtn = document.getElementById('clearBtn');
    const enterBtn = document.getElementById('enterBtn');
    
    let nip = '';
    const MAX_NIP_LENGTH = 4;

    // Teclado interactivo
    keys.forEach(key => {
        key.addEventListener('click', () => {
            if (nip.length < MAX_NIP_LENGTH) {
                nip += key.getAttribute('data-number');
                updateNipDisplay();
            }
        });
    });

    // Botón de limpiar
    clearBtn.addEventListener('click', () => {
        nip = '';
        updateNipDisplay();
        cardStatus.textContent = 'Cancelado';
        setTimeout(() => cardStatus.textContent = 'Listo', 1500);
    });

    // Botón de confirmar
    enterBtn.addEventListener('click', () => {
        if (nip.length === MAX_NIP_LENGTH) {
            processNip();
        } else {
            cardStatus.textContent = 'NIP incompleto';
            setTimeout(() => cardStatus.textContent = 'Listo', 1500);
        }
    });

    function updateNipDisplay() {
        const maskedNip = '🔒'.repeat(nip.length) + '🔓'.repeat(MAX_NIP_LENGTH - nip.length);
        cardNip.textContent = `NIP: ${maskedNip}`;
    }

    function processNip() {
        cardStatus.textContent = 'Procesando...';
        
        // Simular delay para efecto visual
        setTimeout(() => {
            // Generar llaves RSA
            const encrypt = new JSEncrypt({ default_key_size: 2048 });
            const publicKey = encrypt.getPublicKey();
            const privateKey = encrypt.getPrivateKey();

            // Cifrar NIP
            encrypt.setPublicKey(publicKey);
            const encrypted = encrypt.encrypt(nip);

            // Descifrar NIP (simulado para demo)
            const decrypt = new JSEncrypt();
            decrypt.setPrivateKey(privateKey);
            const decrypted = decrypt.decrypt(encrypted) || "Error al descifrar";

            // Mostrar resultados
            rsaKeysElement.innerHTML = `<strong>Llave Pública:</strong> ${publicKey.substring(0, 50)}...\n<strong>Llave Privada:</strong> ${privateKey.substring(0, 50)}...`;
            encryptedNipElement.textContent = `NIP cifrado: ${encrypted.substring(encrypt)}...`;
            decryptedNipElement.textContent = `NIP descifrado: ${decrypted}`;

            cardStatus.textContent = 'NIP Protegido ✓';
            nip = ''; // Resetear NIP después de procesar
            updateNipDisplay();
        }, 1500);
    }
});