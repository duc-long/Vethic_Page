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

                    <div style="margin-bottom: 12px;">
                        <button class="btn btn-outline btn-full flex items-center justify-center" style="background-color: #F4F2F1; border: none; color: var(--text-dark);">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 8px;">
                                <path d="M6.75 13.5C5.025 13.5 3.52187 12.9281 2.24062 11.7844C0.959375 10.6406 0.225 9.2125 0.0375 7.5H1.575C1.75 8.8 2.32812 9.875 3.30938 10.725C4.29063 11.575 5.4375 12 6.75 12C8.2125 12 9.45312 11.4906 10.4719 10.4719C11.4906 9.45312 12 8.2125 12 6.75C12 5.2875 11.4906 4.04688 10.4719 3.02813C9.45312 2.00938 8.2125 1.5 6.75 1.5C5.8875 1.5 5.08125 1.7 4.33125 2.1C3.58125 2.5 2.95 3.05 2.4375 3.75H4.5V5.25H0V0.75H1.5V2.5125C2.1375 1.7125 2.91562 1.09375 3.83437 0.65625C4.75312 0.21875 5.725 0 6.75 0C7.6875 0 8.56562 0.178125 9.38437 0.534375C10.2031 0.890625 10.9156 1.37188 11.5219 1.97812C12.1281 2.58437 12.6094 3.29688 12.9656 4.11562C13.3219 4.93437 13.5 5.8125 13.5 6.75C13.5 7.6875 13.3219 8.56562 12.9656 9.38437C12.6094 10.2031 12.1281 10.9156 11.5219 11.5219C10.9156 12.1281 10.2031 12.6094 9.38437 12.9656C8.56562 13.3219 7.6875 13.5 6.75 13.5ZM8.85 9.9L6 7.05V3H7.5V6.45L9.9 8.85L8.85 9.9Z" fill="currentColor"/>
                            </svg>
                            Xem lịch sử
                        </button>
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
