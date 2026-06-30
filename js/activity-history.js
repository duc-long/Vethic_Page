document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('activityTableBody');

    // Mocks for activities
    const activities = [
        {
            date: '12/06/2026',
            time: '14:20 PM',
            petName: 'Luna', // Trùng tên pet ở localStorage để lấy hình
            issue: 'Biếng ăn & nôn mửa nhẹ',
            severity: 'THEO DÕI',
            severityClass: 'warning'
        },
        {
            date: '08/10/2026',
            time: '09:15 AM',
            petName: 'Mimi', 
            issue: 'Khó thở đột ngột',
            severity: 'CẤP CỨU',
            severityClass: 'danger'
        },
        {
            date: '05/10/2026',
            time: '21:45 PM',
            petName: 'Luna',
            issue: 'Tư vấn tiêm chủng',
            severity: 'THƯỜNG QUY',
            severityClass: 'success'
        },
        {
            date: '28/09/2026',
            time: '11:00 AM',
            petName: 'Yumi',
            issue: 'Mẩn ngứa ngoài da',
            severity: 'THEO DÕI',
            severityClass: 'warning'
        }
    ];

    function renderTable() {
        const pets = typeof getPets === 'function' ? getPets() : [];
        
        tableBody.innerHTML = '';

        activities.forEach((activity, index) => {
            // Find pet to get avatar and breed
            const pet = pets.find(p => p.name.toLowerCase() === activity.petName.toLowerCase());
            
            const avatarHtml = pet && pet.image 
                ? `<img src="${pet.image}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover; flex-shrink: 0;" alt="${pet.name}">`
                : `<div style="width: 32px; height: 32px; border-radius: 50%; background: var(--background-light); color: var(--primary); display: flex; align-items: center; justify-content: center; flex-shrink: 0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"></path><path d="M8 14h.01"></path><path d="M16 14h.01"></path><path d="M12 18c-2 0-3-1-3-1s1 1 3 1 3-1 3-1-1 1-3 1z"></path></svg></div>`;
            
            const breedDisplay = pet && pet.breed ? pet.breed : (pet && pet.type === 'CAT' ? 'Mèo' : 'Chó');

            const getBadgeColor = (severityClass) => {
                switch(severityClass) {
                    case 'danger': return 'background-color: #FEEBEB; color: var(--danger);';
                    case 'warning': return 'background-color: #F4F2F1; color: var(--text-dark);';
                    case 'success': return 'background-color: #F4F2F1; color: var(--text-dark);';
                    default: return 'background-color: #F4F2F1; color: var(--text-dark);';
                }
            };

            const tr = document.createElement('tr');
            tr.style.borderBottom = '1px solid var(--border-light)';
            tr.innerHTML = `
                <td style="padding: 16px 24px; vertical-align: middle;">
                    <div style="font-weight: 600; color: var(--text-dark); font-size: 14px;">${activity.date}</div>
                    <div style="font-size: 12px; color: var(--text-body); margin-top: 4px;">${activity.time}</div>
                </td>
                <td style="padding: 16px 24px; vertical-align: middle;">
                    <div class="flex items-center gap-3">
                        ${avatarHtml}
                        <div>
                            <div style="font-weight: 600; color: var(--text-dark); font-size: 14px;">${activity.petName}</div>
                            <div style="font-size: 12px; color: var(--text-body); margin-top: 4px;">(${breedDisplay})</div>
                        </div>
                    </div>
                </td>
                <td style="padding: 16px 24px; vertical-align: middle; color: var(--text-body); font-size: 14px;">
                    ${activity.issue}
                </td>
                <td style="padding: 16px 24px; vertical-align: middle;">
                    <span style="padding: 6px 12px; border-radius: 6px; font-size: 11px; font-weight: 700; ${getBadgeColor(activity.severityClass)}">
                        ${activity.severity}
                    </span>
                </td>
                <td style="padding: 16px 24px; vertical-align: middle; text-align: right;">
                    <a href="chat-review.html?pet=${encodeURIComponent(activity.petName)}&issue=${encodeURIComponent(activity.issue)}&severity=${encodeURIComponent(activity.severityClass)}&date=${encodeURIComponent(activity.date)}" class="btn btn-outline flex items-center justify-center gap-2" style="border: 1px solid var(--primary); color: var(--primary); font-size: 13px; font-weight: 600; padding: 8px 16px; margin-left: auto; transition: all 0.2s; text-decoration: none; width: max-content;" onmouseover="this.style.backgroundColor='var(--primary)'; this.style.color='white';" onmouseout="this.style.backgroundColor='transparent'; this.style.color='var(--primary)';">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M2 10h20"></path></svg>
                        Xem lại cuộc chat
                    </a>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    renderTable();
});
