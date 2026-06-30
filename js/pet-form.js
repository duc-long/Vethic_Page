document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const petId = urlParams.get('id');

    const formTitle = document.getElementById('formTitle');
    const formSubtitle = document.getElementById('formSubtitle');
    
    const petForm = document.getElementById('petForm');
    const petIdInput = document.getElementById('petId');
    const petNameInput = document.getElementById('petName');
    const petAgeInput = document.getElementById('petAge');
    const petWeightInput = document.getElementById('petWeight');
    const petBreedInput = document.getElementById('petBreed');
    const avatarInput = document.getElementById('avatarInput');
    const avatarPreview = document.getElementById('avatarPreview');
    const avatarUploadBox = document.getElementById('avatarUploadBox');

    let currentAvatarDataUrl = '';

    // Initialize Edit Mode
    if (petId) {
        const pet = getPetById(petId);
        if (pet) {
            formTitle.innerText = 'Cập nhật hồ sơ';
            formSubtitle.innerText = 'Chỉnh sửa thông tin thú cưng của bạn.';
            
            petIdInput.value = pet.id;
            petNameInput.value = pet.name;
            petAgeInput.value = pet.age;
            if(pet.weight && pet.weight !== '--') {
                petWeightInput.value = parseFloat(pet.weight.replace('kg', ''));
            }
            petBreedInput.value = pet.breed || '';
            
            // Set radio button
            const typeRadios = document.getElementsByName('petType');
            typeRadios.forEach(radio => {
                if (radio.value === pet.type) {
                    radio.checked = true;
                    updateRadioCards(radio);
                }
            });

            if (pet.image) {
                currentAvatarDataUrl = pet.image;
                avatarPreview.src = currentAvatarDataUrl;
                avatarPreview.style.display = 'block';
            }
        }
    }

    // Avatar Upload and Compression
    avatarUploadBox.addEventListener('click', () => {
        avatarInput.click();
    });

    avatarInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check if file size > 5MB
        if (file.size > 5 * 1024 * 1024) {
            alert('Vui lòng chọn ảnh có dung lượng nhỏ hơn 5MB.');
            return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                // Compress Image
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 400;
                const MAX_HEIGHT = 400;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);

                // Convert to WebP for better compression
                const compressedDataUrl = canvas.toDataURL('image/webp', 0.7);
                currentAvatarDataUrl = compressedDataUrl;
                avatarPreview.src = compressedDataUrl;
                avatarPreview.style.display = 'block';
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    // Radio Card Selection UI Update
    const radioInputs = document.querySelectorAll('input[name="petType"]');
    radioInputs.forEach(radio => {
        radio.addEventListener('change', () => updateRadioCards(radio));
    });

    function updateRadioCards(selectedRadio) {
        document.querySelectorAll('.radio-card').forEach(card => card.classList.remove('active'));
        document.querySelectorAll('.radio-card svg:last-child, .radio-card div:last-child').forEach(indicator => {
            indicator.outerHTML = '<div style="margin-left: auto; width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--border-light);"></div>';
        });

        const activeCard = selectedRadio.closest('.radio-card');
        activeCard.classList.add('active');
        activeCard.querySelector('div:last-child').outerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="margin-left: auto; color: var(--primary);"><circle cx="12" cy="12" r="10"></circle><path d="M9 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
    }

    // Breed suggestions function
    window.setBreed = function(breed) {
        petBreedInput.value = breed;
        alert(`Đã chọn giống: ${breed}`);
    };

    // Form Submission
    petForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const petType = document.querySelector('input[name="petType"]:checked').value;
        const petData = {
            name: petNameInput.value.trim(),
            age: parseInt(petAgeInput.value),
            type: petType,
            breed: petBreedInput.value.trim() || (petType === 'DOG' ? 'Chó lai' : 'Mèo lai'),
            image: currentAvatarDataUrl,
            weight: petWeightInput.value ? `${petWeightInput.value}kg` : '--'
        };

        if (petIdInput.value) {
            petData.id = petIdInput.value;
            const success = updatePet(petData);
            if (success) {
                window.location.href = 'pet-profile.html';
            }
        } else {
            const success = addPet(petData);
            if (success) {
                window.location.href = 'pet-profile.html';
            }
        }
    });
});
