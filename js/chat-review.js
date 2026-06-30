document.addEventListener('DOMContentLoaded', () => {
    // Get pet name from URL
    const urlParams = new URLSearchParams(window.location.search);
    const petNameParam = urlParams.get('pet');

    const petNameLabel = document.getElementById('petNameLabel');
    const petBreedLabel = document.getElementById('petBreedLabel');
    const petAvatarContainer = document.getElementById('petAvatarContainer');
    const petAgeValue = document.getElementById('petAgeValue');
    const petWeightValue = document.getElementById('petWeightValue');
    const petClinicalNotes = document.getElementById('petClinicalNotes');

    const formatAge = (months) => {
        if (!months) return '--';
        if (months < 12) return `${months} tháng`;
        const years = Math.floor(months / 12);
        const remain = months % 12;
        if (remain === 0) return `${years} tuổi`;
        return `${years} năm ${remain} tháng`;
    };

    if (petNameParam) {
        const pets = typeof getPets === 'function' ? getPets() : [];
        const pet = pets.find(p => p.name.toLowerCase() === petNameParam.toLowerCase());

        if (pet) {
            petNameLabel.textContent = pet.name;
            const breedDisplay = pet.breed ? pet.breed : (pet.type === 'CAT' ? 'Mèo' : 'Chó');
            petBreedLabel.textContent = breedDisplay;
            
            if (pet.image) {
                petAvatarContainer.innerHTML = `<img src="${pet.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${pet.name}">`;
            }

            petAgeValue.textContent = formatAge(pet.age);
            petWeightValue.textContent = pet.weight ? pet.weight : '--';

            // Fake clinical notes based on pet name to make it look dynamic
            if (pet.name.toLowerCase() === 'mochi') {
                petClinicalNotes.innerHTML = '"Mochi có tiền sử nhạy cảm với thức ăn khô. Cần theo dõi độ ẩm trong khẩu phần ăn."';
            } else if (pet.name.toLowerCase() === 'luna') {
                petClinicalNotes.innerHTML = '"Luna từng bị viêm dạ dày nhẹ hồi nhỏ. Hệ tiêu hóa nhạy cảm."';
            } else if (pet.name.toLowerCase() === 'mimi') {
                petClinicalNotes.innerHTML = '"Mimi hay bị búi lông. Khuyến cáo chải lông thường xuyên."';
            } else {
                petClinicalNotes.innerHTML = `"${pet.name} hiện tại có sức khỏe ổn định. Chưa ghi nhận dị ứng thuốc nào."`;
            }

        } else {
            // Pet not found in localStorage, use generic fallback
            petNameLabel.textContent = petNameParam;
            petBreedLabel.textContent = "Chưa rõ";
            petClinicalNotes.innerHTML = '"Không tìm thấy hồ sơ chi tiết."';
        }

        // Generate dynamic chat content based on parameters
        const issueParam = urlParams.get('issue') || 'Biểu hiện bất thường';
        const severityParam = urlParams.get('severity') || 'warning';
        const dateParam = urlParams.get('date') || '12/10/2026';
        
        const breedDisplay = pet ? (pet.breed || (pet.type === 'CAT' ? 'Mèo' : 'Chó')) : 'Chưa rõ';
        
        let alertHtml = '';
        let instructionsHtml = '';

        if (severityParam === 'danger') {
            alertHtml = `
                <div style="background-color: #FEEBEB; border: 1px solid rgba(220, 38, 38, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; gap: 12px; align-items: flex-start;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <div>
                        <div style="color: var(--danger); font-weight: 700; font-size: 13px; margin-bottom: 4px;">NGUY HIỂM - CẦN ĐI KHÁM NGAY</div>
                        <div style="color: var(--text-dark); font-size: 13px;">Tình trạng này có thể đe dọa tính mạng. Vui lòng can thiệp thú y lập tức.</div>
                    </div>
                </div>
            `;
            instructionsHtml = `
                <div style="border: 1px solid var(--border-light); border-radius: 8px; padding: 16px; display: flex; gap: 16px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #E6F3F0; color: var(--primary); font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
                    <div>
                        <div style="font-weight: 700; font-size: 14px; color: var(--text-dark); margin-bottom: 4px;">Giữ thú cưng an toàn</div>
                        <div style="font-size: 13px; color: var(--text-body); line-height: 1.5;">Hạn chế di chuyển, giữ ấm và đưa ngay đến phòng khám gần nhất.</div>
                    </div>
                </div>
            `;
        } else if (severityParam === 'warning') {
            alertHtml = `
                <div style="background-color: #FFF8E1; border: 1px solid rgba(255, 193, 7, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; gap: 12px; align-items: flex-start;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    <div>
                        <div style="color: #F57C00; font-weight: 700; font-size: 13px; margin-bottom: 4px;">CẦN THEO DÕI THÊM</div>
                        <div style="color: var(--text-dark); font-size: 13px;">Triệu chứng này cần quan sát kỹ trong 24h tới để đánh giá diễn biến.</div>
                    </div>
                </div>
            `;
            instructionsHtml = `
                <div style="border: 1px solid var(--border-light); border-radius: 8px; padding: 16px; display: flex; gap: 16px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #E6F3F0; color: var(--primary); font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
                    <div>
                        <div style="font-weight: 700; font-size: 14px; color: var(--text-dark); margin-bottom: 4px;">Kiểm soát chế độ ăn uống</div>
                        <div style="font-size: 13px; color: var(--text-body); line-height: 1.5;">Chia nhỏ bữa ăn, cung cấp đủ nước sạch và quan sát phản ứng.</div>
                    </div>
                </div>
            `;
        } else {
            alertHtml = `
                <div style="background-color: #E6F3F0; border: 1px solid rgba(0, 105, 80, 0.2); border-radius: 8px; padding: 16px; margin-bottom: 24px; display: flex; gap: 12px; align-items: flex-start;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                    <div>
                        <div style="color: var(--primary); font-weight: 700; font-size: 13px; margin-bottom: 4px;">TÌNH TRẠNG BÌNH THƯỜNG</div>
                        <div style="color: var(--text-dark); font-size: 13px;">Không có dấu hiệu đáng lo ngại. Bạn có thể yên tâm.</div>
                    </div>
                </div>
            `;
            instructionsHtml = `
                <div style="border: 1px solid var(--border-light); border-radius: 8px; padding: 16px; display: flex; gap: 16px;">
                    <div style="width: 24px; height: 24px; border-radius: 50%; background: #E6F3F0; color: var(--primary); font-weight: 700; font-size: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">1</div>
                    <div>
                        <div style="font-weight: 700; font-size: 14px; color: var(--text-dark); margin-bottom: 4px;">Chăm sóc cơ bản</div>
                        <div style="font-size: 13px; color: var(--text-body); line-height: 1.5;">Duy trì lịch sinh hoạt và dinh dưỡng hiện tại để đảm bảo sức khỏe.</div>
                    </div>
                </div>
            `;
        }

        const chatHtml = `
            <div style="text-align: center;">
                <div class="session-badge" id="sessionBadge">Session: ${dateParam} • Bệnh nhân: ${pet ? pet.name : petNameParam} (${breedDisplay})</div>
            </div>
            
            <div class="chat-message user" style="display: flex; flex-direction: column; align-items: flex-end; margin-bottom: 24px;">
                <div class="chat-bubble" style="background-color: #F8F9FA; color: var(--text-dark); border-radius: 16px 16px 0 16px; border: 1px solid var(--border-light); padding: 16px 20px; font-size: 14px;">
                    Bé nhà tôi có dấu hiệu: <strong>${issueParam}</strong>, tôi nên làm gì?
                </div>
                <div style="font-size: 11px; color: var(--text-body); margin-top: 8px;">08:42 AM</div>
            </div>

            <div class="chat-message ai" style="display: flex; gap: 16px; margin-bottom: 32px; align-items: flex-start;">
                <div class="chat-avatar" style="width: 32px; height: 32px; background-color: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div style="flex: 1;">
                    <div style="background-color: white; border: 1px solid var(--border-light); border-radius: 0 16px 16px 16px; padding: 24px;">
                        ${alertHtml}
                        <p style="font-size: 14px; color: var(--text-dark); margin-bottom: 16px;">Dựa trên triệu chứng <strong>"${issueParam}"</strong> bạn mô tả, đây là các hướng dẫn xử lý:</p>
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            ${instructionsHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('chatHistoryContainer').innerHTML = chatHtml;

    } else {
        petNameLabel.textContent = "Chưa chọn thú cưng";
    }
});
