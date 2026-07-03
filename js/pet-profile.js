document.addEventListener('DOMContentLoaded', () => {
    const petGrid = document.getElementById('pet-grid');

    function renderPets() {
        const pets = getPets();
        petGrid.innerHTML = '';

        pets.forEach(pet => {
            const petCard = document.createElement('div');
            petCard.className = 'pet-card';
            
            const ageDisplay = formatAge(pet.age);
            
            petCard.innerHTML = `
                <div class="pet-image-wrapper">
                    <img src="${pet.image || '../assets/logo/logo_ten.png'}" alt="${pet.name}" class="pet-image">
                    <div class="pet-type-badge">${pet.type}</div>
                </div>
                <div class="pet-info">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="pet-name">${pet.name}</h3>
                            <p class="pet-breed">${pet.breed || 'Chưa cập nhật'}</p>
                        </div>
                    </div>
                    
                    <div class="pet-stats flex gap-4">
                        <div class="stat-item flex-1">
                            <span class="stat-label">Tuổi</span>
                            <span class="stat-value">${ageDisplay}</span>
                        </div>
                        <div class="stat-item flex-1">
                            <span class="stat-label">Cân nặng</span>
                            <span class="stat-value">${pet.weight || '--'}</span>
                        </div>
                    </div>

                    <div class="pet-actions flex gap-4">
                        <a href="pet-form.html?id=${pet.id}" class="btn btn-outline flex items-center justify-center" style="flex: 1; text-decoration: none;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                            Sửa
                        </a>
                        <button class="btn btn-outline flex items-center justify-center delete-btn" data-id="${pet.id}" style="flex: 1; border-color: #FEEBEB; color: var(--danger);">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                            Xóa
                        </button>
                    </div>
                </div>
            `;
            petGrid.appendChild(petCard);
        });

        // // Add the "Thêm thú cưng mới" placeholder card
        // const addCard = document.createElement('a');
        // addCard.href = 'pet-form.html';
        // addCard.className = 'pet-card add-new-card flex flex-col items-center justify-center';
        // addCard.style.textDecoration = 'none';
        // addCard.innerHTML = `
        //     <div class="add-icon-wrapper">
        //         <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        //     </div>
        //     <p class="font-medium" style="color: var(--text-dark);">Thêm Thú Cưng Mới</p>
        //     <p style="color: var(--text-body); font-size: 14px; text-align: center; margin-top: 8px; padding: 0 24px;">Lưu trữ và quản lý sức khỏe cho người bạn nhỏ của bạn.</p>
        // `;
        // petGrid.appendChild(addCard);

        // Bind delete events
        const deleteBtns = document.querySelectorAll('.delete-btn');
        deleteBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const id = btn.getAttribute('data-id');
                const petName = btn.closest('.pet-info').querySelector('.pet-name').innerText;
                if (confirm(`Bạn có chắc chắn muốn xóa hồ sơ của ${petName}?`)) {
                    if (deletePet(id)) {
                        renderPets();
                    }
                }
            });
        });
    }

    renderPets();
});
