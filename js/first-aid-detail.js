document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || '1';

    const guides = {
        '1': {
            title: 'Sơ cứu khi thú cưng bị ngộ độc',
            breadcrumb: 'Ngộ độc',
            tag: 'CẤP CỨU',
            tagColor: '#B91C1C', // Red
            intro: 'Ngộ độc là một tình trạng cấp cứu y tế nghiêm trọng. Hành động nhanh chóng và chính xác trong vài phút đầu tiên có thể cứu sống thú cưng của bạn.',
            signs: [
                'Nôn mửa hoặc tiêu chảy (có thể có máu)',
                'Chảy nước dãi quá mức',
                'Co giật hoặc run rẩy',
                'Lờ đờ, hôn mê hoặc mất phương hướng',
                'Nướu răng nhợt nhạt hoặc tím tái',
                'Khó thở'
            ],
            steps: [
                {
                    title: 'Xác định chất gây độc',
                    desc: 'Nếu có thể, hãy tìm bao bì sản phẩm hoặc mẫu chất mà thú cưng đã ăn phải. Điều này cực kỳ quan trọng để bác sĩ thú y đưa ra phác đồ điều trị.'
                },
                {
                    title: 'Liên hệ bác sĩ thú y ngay lập tức',
                    desc: 'Gọi cho phòng khám gần nhất hoặc đường dây nóng cấp cứu. Đừng chờ đợi các triệu chứng xuất hiện nặng hơn.'
                },
                {
                    title: 'KHÔNG tự ý gây nôn',
                    desc: 'Chỉ gây nôn nếu có chỉ dẫn trực tiếp từ bác sĩ thú y. Một số chất ăn mòn có thể gây tổn thương nghiêm trọng hơn khi nôn ra.'
                }
            ],
            alerts: [
                'Không cho thú cưng uống sữa, nước muối hoặc dầu ăn trừ khi có chỉ định.',
                'Giữ thú cưng bình tĩnh và ấm áp trong khi di chuyển đến phòng khám.',
                'Mang theo mẫu chất độc hoặc bao bì đến phòng khám.'
            ],
            related: [
                { id: '2', title: 'Xử lý hóc dị vật' },
                { id: '5', title: 'Cầm máu vết thương' },
                { id: '4', title: 'Sốc nhiệt & Say nắng' }
            ]
        },
        '2': {
            title: 'Xử lý hóc dị vật ở chó mèo',
            breadcrumb: 'Hô hấp',
            tag: 'HÔ HẤP',
            tagColor: '#1976D2', // Blue
            intro: 'Hóc dị vật làm tắc nghẽn đường thở, khiến thú cưng nghẹt thở. Cần can thiệp loại bỏ dị vật ngay lập tức bằng nghiệm pháp Heimlich cho động vật.',
            signs: [
                'Ho khạc liên tục, vuốt cổ, cố nôn ọe',
                'Thở khò khè, thở dốc',
                'Nướu và lưỡi chuyển màu xanh/tím tái',
                'Hoảng loạn, dùng chân cào vào miệng',
                'Mất ý thức nếu nghẹt thở kéo dài'
            ],
            steps: [
                {
                    title: 'Kiểm tra miệng',
                    desc: 'Cẩn thận mở miệng thú cưng. Nếu nhìn thấy dị vật và dễ lấy, hãy dùng tay lấy ra. Cẩn thận không đẩy nó vào sâu hơn.'
                },
                {
                    title: 'Vỗ lưng (Đối với thú cưng nhỏ)',
                    desc: 'Giữ hông thú cưng lên cao để đầu hướng xuống. Vỗ mạnh 4-5 lần vào giữa hai bả vai.'
                },
                {
                    title: 'Nghiệm pháp Heimlich',
                    desc: 'Đặt hai tay ôm quanh bụng ngay dưới lồng ngực. Ép mạnh và dứt khoát về phía trước và lên trên 3-5 lần.'
                }
            ],
            alerts: [
                'Tuyệt đối không thọc ngón tay mù quáng vào sâu trong cổ họng nếu không nhìn thấy dị vật.',
                'Nếu thú cưng bất tỉnh, hãy mở miệng kéo lưỡi ra ngoài để thông đường thở và hô hấp nhân tạo.',
                'Ngay cả khi đã lấy được dị vật, vẫn cần đi khám để kiểm tra tổn thương thực quản.'
            ],
            related: [
                { id: '1', title: 'Sơ cứu ngộ độc' },
                { id: '3', title: 'Sơ cứu gãy xương' },
                { id: '5', title: 'Cầm máu vết thương' }
            ]
        },
        '3': {
            title: 'Sơ cứu gãy xương chi',
            breadcrumb: 'Chấn thương',
            tag: 'CHẤN THƯƠNG',
            tagColor: '#F57C00', // Orange
            intro: 'Gãy xương thường xảy ra do tai nạn giao thông hoặc ngã từ trên cao. Cần hạn chế di chuyển và cố định vết gãy đúng cách trước khi tới thú y.',
            signs: [
                'Không thể đứng hoặc đi lại trên chi bị đau',
                'Chân cong gập ở vị trí bất thường',
                'Sưng tấy, bầm tím quanh vùng chấn thương',
                'Rên rỉ, kêu la khi chạm vào',
                'Có thể xương đâm xuyên qua da (gãy xương hở)'
            ],
            steps: [
                {
                    title: 'Kiểm soát chảy máu (Nếu có)',
                    desc: 'Dùng gạc sạch ép nhẹ lên vết thương hở để cầm máu. Tránh đè mạnh vào chỗ xương gãy.'
                },
                {
                    title: 'Cố định chi bị gãy',
                    desc: 'Dùng một thanh nẹp cứng (bìa các-tông, que gỗ) cuộn quanh bằng băng gạc. Phải cố định cả khớp trên và khớp dưới ổ gãy.'
                },
                {
                    title: 'Vận chuyển cẩn thận',
                    desc: 'Đặt thú cưng lên một mặt phẳng cứng (ván gỗ, khay) để làm cáng. Giữ thú cưng nằm yên tĩnh.'
                }
            ],
            alerts: [
                'Tuyệt đối không cố gắng nắn hoặc kéo thẳng xương lại.',
                'Thú cưng bị đau có thể hoảng loạn và cắn, nên dùng rọ mõm hoặc khăn bọc cẩn thận.',
                'Không tự ý cho thú cưng uống thuốc giảm đau của người (Paracetamol/Ibuprofen rất độc với chó mèo).'
            ],
            related: [
                { id: '5', title: 'Cầm máu vết thương' },
                { id: '2', title: 'Xử lý hóc dị vật' },
                { id: '4', title: 'Sốc nhiệt & Say nắng' }
            ]
        },
        '4': {
            title: 'Sốc nhiệt và say nắng',
            breadcrumb: 'Thời tiết',
            tag: 'THỜI TIẾT',
            tagColor: '#7B1FA2', // Purple
            intro: 'Sốc nhiệt xảy ra khi nhiệt độ cơ thể thú cưng vượt quá 41°C. Đây là tình trạng nguy hiểm đến tính mạng cần phải hạ thân nhiệt từ từ ngay lập tức.',
            signs: [
                'Thở hổn hển dữ dội, tim đập nhanh',
                'Lưỡi và nướu đỏ sẫm hoặc nhợt nhạt',
                'Nước dãi đặc và dính',
                'Mệt mỏi, lờ đờ, đi lảo đảo',
                'Nôn mửa, tiêu chảy (có thể ra máu)'
            ],
            steps: [
                {
                    title: 'Di chuyển đến nơi mát mẻ',
                    desc: 'Ngay lập tức đưa thú cưng vào khu vực có bóng râm hoặc phòng có máy lạnh, quạt.'
                },
                {
                    title: 'Làm mát cơ thể từ từ',
                    desc: 'Đắp khăn nhúng nước mát (KHÔNG dùng nước đá) lên cổ, nách và bẹn. Vẩy nước mát lên người.'
                },
                {
                    title: 'Cung cấp nước uống',
                    desc: 'Cho thú cưng liếm một ít nước mát hoặc đá viên nhỏ. Không ép uống nhiều nước cùng lúc.'
                }
            ],
            alerts: [
                'TUYỆT ĐỐI KHÔNG ngâm thú cưng vào thau nước đá lạnh. Việc hạ nhiệt đột ngột sẽ gây sốc mạch máu.',
                'Ngừng làm mát khi nhiệt độ cơ thể hạ xuống 39.5°C để tránh bị hạ thân nhiệt ngược.',
                'Đến bác sĩ thú y ngay cả khi thú cưng có vẻ đã hồi phục để kiểm tra tổn thương nội tạng.'
            ],
            related: [
                { id: '1', title: 'Sơ cứu ngộ độc' },
                { id: '2', title: 'Xử lý hóc dị vật' },
                { id: '5', title: 'Cầm máu vết thương' }
            ]
        },
        '5': {
            title: 'Cầm máu vết thương hở',
            breadcrumb: 'Chấn thương',
            tag: 'CHẢY MÁU',
            tagColor: '#B91C1C', // Red
            intro: 'Chảy máu nhiều có thể dẫn đến sốc giảm thể tích máu. Áp dụng lực ép trực tiếp là kỹ thuật quan trọng nhất để cầm máu vết thương ngoài da.',
            signs: [
                'Máu chảy thành tia (động mạch) hoặc nhỏ giọt liên tục (tĩnh mạch)',
                'Thú cưng có biểu hiện yếu ớt, lờ đờ',
                'Nhịp tim nhanh nhưng mạch yếu',
                'Nướu răng nhợt nhạt trắng bệch'
            ],
            steps: [
                {
                    title: 'Áp lực ép trực tiếp',
                    desc: 'Dùng một miếng gạc hoặc khăn sạch đè chặt trực tiếp lên vết thương trong ít nhất 5-10 phút liên tục. Không nhấc lên để kiểm tra.'
                },
                {
                    title: 'Băng ép',
                    desc: 'Dùng cuộn băng y tế hoặc vải xé nhỏ quấn quanh miếng gạc. Quấn đủ chặt để cầm máu nhưng không làm tím tái phần chi bên dưới.'
                },
                {
                    title: 'Kê cao vùng bị thương',
                    desc: 'Nếu vết thương ở chân, hãy cố gắng nâng chân lên cao hơn mức tim để giảm lưu lượng máu bơm tới.'
                }
            ],
            alerts: [
                'Nếu máu thấm qua gạc, ĐỪNG tháo miếng gạc cũ ra. Hãy đắp thêm miếng gạc mới lên trên và tiếp tục đè chặt.',
                'Chỉ sử dụng ga-rô (garrot) như biện pháp cuối cùng khi máu chảy thành tia không cầm được, và phải nới lỏng mỗi 10 phút.',
                'Sau khi cầm máu tạm thời, đưa thú cưng đến trạm thú y gần nhất để khâu và vệ sinh chống nhiễm trùng.'
            ],
            related: [
                { id: '3', title: 'Sơ cứu gãy xương' },
                { id: '1', title: 'Sơ cứu ngộ độc' },
                { id: '2', title: 'Xử lý hóc dị vật' }
            ]
        }
    };

    const data = guides[id] || guides['1'];

    document.getElementById('bcTitle').textContent = data.breadcrumb;
    
    const badge = document.getElementById('metaBadge');
    badge.textContent = data.tag;
    badge.style.backgroundColor = data.tagColor;
    
    document.getElementById('artTitle').textContent = data.title;
    document.getElementById('artIntro').textContent = data.intro;

    const signsGrid = document.getElementById('signsGrid');
    signsGrid.innerHTML = data.signs.map(sign => `
        <div class="sign-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
            ${sign}
        </div>
    `).join('');

    const stepList = document.getElementById('stepList');
    stepList.innerHTML = data.steps.map((step, index) => `
        <div class="step-card">
            <div class="step-number">${index + 1}</div>
            <div>
                <h4 class="step-title">${step.title}</h4>
                <p class="step-desc">${step.desc}</p>
            </div>
        </div>
    `).join('');

    const alertList = document.getElementById('alertList');
    alertList.innerHTML = data.alerts.map(alert => `<li>${alert}</li>`).join('');

    const relatedList = document.getElementById('relatedList');
    relatedList.innerHTML = data.related.map(rel => `
        <a href="first-aid-detail.html?id=${rel.id}" class="related-item">
            ${rel.title}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </a>
    `).join('');

    document.getElementById('renderContainer').classList.add('active');
});
