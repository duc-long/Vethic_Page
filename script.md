# Kịch bản Thuyết trình 15 Phút: Phương pháp Storytelling
*Tối ưu hóa bài báo cáo trước Hội đồng Học thuật và Doanh nghiệp*

Thay vì đi theo lối mòn báo cáo lý thuyết khô khan, kịch bản này sử dụng **phương pháp Storytelling (Kể chuyện)** thông qua hành trình của một nhân vật giả lập, đan xen trực tiếp các bước **Live Demo**. Cấu trúc được chia thời gian nghiêm ngặt để đảm bảo gói gọn trong **15 phút**.

---

## Phân bổ Thời gian (Tổng cộng: 15 phút)
1. **Đặt vấn đề qua Storytelling (3 phút):** Giới thiệu nhân vật, nỗi đau (Pain points), Dung lượng thị trường (TAM/SAM/SOM).
2. **Live Demo: Giải pháp VETHIC (7 phút):** Hóa thân vào nhân vật để trải nghiệm luồng User và Luồng Admin của hệ thống.
3. **Khả năng thành công & Công nghệ (3 phút):** YOLOv8, RAG, LLM, Google Maps API và tính khả thi tài chính/thời gian.
4. **Q&A & Kết luận (2 phút):** Nhận xét ưu/nhược điểm và định hướng tương lai.

---

## KỊCH BẢN CHI TIẾT

### PHẦN 1: MỞ ĐẦU BẰNG CÂU CHUYỆN (0:00 - 3:00)

* **Trình chiếu Slide:** Hình ảnh một bạn trẻ chăm sóc cún cưng tại Cần Thơ.
* **Người thuyết trình nói:**
  > *"Kính thưa Hội đồng và quý Doanh nghiệp, tôi muốn bắt đầu buổi thuyết trình hôm nay bằng câu chuyện của **Minh** - một sinh viên 21 tuổi đang học tập tại Cần Thơ. Minh nuôi một chú cún Golden Retriever tên là **Milo**, và coi Milo như một người em út trong gia đình.
  >
  > Vào một tối thứ Bảy lúc 11 giờ đêm, Milo đột nhiên có biểu hiện lờ đờ, ngứa ngáy dữ dội, cắn chân gãi tai và da nổi mẩn đỏ rỉ dịch như trong ảnh. Minh vô cùng luống cuống. Bạn ấy lên Google gõ triệu chứng thì nhận về hàng trăm kết quả trái chiều: người bảo chỉ là dị ứng thời tiết, kẻ bảo bệnh Care nguy hiểm. Minh không biết có nên đưa Milo đi cấp cứu ngay trong đêm hay không, và kỹ năng sơ cứu lúc này là gì?
  >
  > Câu chuyện của Minh không phải cá biệt. Khảo sát của nhóm chúng tôi trên hơn 100 người nuôi thú cưng tại Cần Thơ cho thấy: **80%** chủ nuôi lúng túng khi thú cưng có dấu hiệu lạ, và **75%** hoàn toàn thiếu kiến thức sơ cứu trong 'thời điểm vàng'. Đó chính là lý do chúng tôi xây dựng **VETHIC - Trợ lý y tế thú y ứng dụng AI**."*

* **Chuyển tải Market Size:**
  > *"Để giải quyết nỗi đau này cho hàng ngàn bạn trẻ như Minh tại Cần Thơ (Thị trường mục tiêu - SAM) và hướng tới toàn Việt Nam (TAM), VETHIC được định vị là người đồng hành y tế 24/7 trực quan, giúp chủ nuôi nhận diện nguy cơ nhanh nhất."*

---

### PHẦN 2: LIVE DEMO THỰC TẾ (3:00 - 10:00)
*(Người thuyết trình chuyển sang tab màn hình chạy Web Demo)*

#### Bước 1: Đăng nhập & Tiếp cận hệ thống (Thời gian: 30 giây)
* **Thao tác:** Mở [`index.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/index.html). Click **"Đăng nhập"** -> [`pages/login.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/login.html). Chọn **"Đăng nhập bằng Google"** -> Click tài khoản **Nguyen Van A** (`pages/google-login.html`).
* **Lời thoại:**
  > *"Hãy cùng Minh trải nghiệm Vethic. Chỉ với một cú click đăng nhập bằng Google cực kỳ nhanh chóng, Minh đã tiếp cận ngay Bảng điều khiển cá nhân."*

#### Bước 2: Số hóa Hồ sơ thú cưng (Thời gian: 1 phút)
* **Thao tác:** Màn hình chuyển vào dashboard chứa mặc định [`pages/pet-profile.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/pet-profile.html).
* **Lời thoại:**
  > *"Tại đây, Minh dễ dàng quản lý thông tin của Milo. Toàn bộ thông số như cân nặng, độ tuổi, lịch sử tiêm phòng của Milo đều được số hóa, giải quyết triệt để vấn đề quên tiền sử bệnh án mà chủ nuôi thường gặp phải."*

#### Bước 3: Chẩn đoán AI qua Hình ảnh (Thời gian: 2 phút)
* **Thao tác:** Click tab **"Chẩn đoán AI"** trên sidebar để tải trang [`pages/ai-chat.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/ai-chat.html).
  1. Click biểu tượng **Kẹp giấy** (Đính kèm ảnh).
  2. Click vào ô nhập tin nhắn, nhấn **phím 'B'** trên bàn phím (để tự điền câu hỏi về rụng lông, mẩn đỏ kèm ảnh).
  3. Nhấn **Gửi** và đợi 1.5 giây giả lập AI xử lý.
* **Lời thoại:**
  > *"Ngay bây giờ, Minh chụp ảnh vùng da bị mẩn đỏ của Milo, tải lên hệ thống Vethic và mô tả triệu chứng. AI của chúng tôi sử dụng mô hình nhận diện ảnh tổn thương da, kết hợp với Symptom Checker để chấm điểm nguy cơ.
  >
  > Kết quả trả về ngay lập tức: **Cảnh báo Vàng - Nguy cơ viêm da do ký sinh trùng (Ghẻ)**. Vethic đưa ra 3 khuyến nghị rất rõ ràng: Cách ly bé để tránh lây chéo, đeo loa chống liếm để tránh nhiễm trùng vết thương, và khuyên đưa đi khám thú y để soi nang lông dưới kính hiển vi."*

#### Bước 4: Định vị Phòng khám khẩn cấp (Thời gian: 1.5 phút)
* **Thao tác:** Click nút **"Tìm bác sĩ gần nhất"** hiển thị trong chat hoặc tab **"Tìm phòng khám"** trên sidebar để mở [`pages/find-clinic.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/find-clinic.html).
  1. Giới thiệu bản đồ Google Maps bên phải.
  2. Click filter **"Đang mở cửa"** bên trái.
* **Lời thoại:**
  > *"Vì lúc này đã là đêm muộn, Minh lo lắng không biết phòng khám nào còn làm việc. Chỉ với một thao tác chọn lọc 'Đang mở cửa', Vethic lập tức hiển thị phòng khám mở cửa 24/7 gần nhất tại Cần Thơ có hỗ trợ cấp cứu. Minh chỉ cần click 'Chỉ đường' để Google Maps dẫn đường trực tiếp tới phòng khám y tế."*

#### Bước 5: Xem lại Lịch sử (Thời gian: 1 phút)
* **Thao tác:** Chọn tab **"Lịch sử hoạt động"** [`pages/activity-history.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/activity-history.html) -> Click **"Xem lại cuộc chat"** -> Mở [`pages/chat-review.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/chat-review.html).
* **Lời thoại:**
  > *"Vài tuần sau khi Milo đã khỏi bệnh, Minh vẫn có thể xem lại toàn bộ cuộc hội thoại cũ được lưu trữ dưới dạng bệnh án số hóa, giúp bác sĩ thú y nắm bắt tiến trình điều trị một cách mạch lạc nhất."*

#### Bước 6: Luồng Quản trị kiến thức y khoa của Bác sĩ (Thời gian: 1 phút)
* **Thao tác:** Đăng xuất -> Tại trang Google Login chọn **Vethic_Admin** -> Vào [`pages/admin-dashboard.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/admin-dashboard.html) -> Chọn tab **"Quản lý kiến thức bệnh"** [`pages/admin-knowledge.html`](file:///c:/Users/nguye/Videos/Material/KTPM/Kỳ%207%20-%20KTPM/EXE101/UI_2/pages/admin-knowledge.html).
* **Lời thoại:**
  > *"Để đảm bảo thông tin AI cung cấp luôn chuẩn xác, chúng tôi xây dựng phân hệ Admin dành riêng cho các bác sĩ thú y đối tác. Họ có quyền chỉnh sửa, phê duyệt và cập nhật các kiến thức bệnh án chuẩn y học vào hệ thống RAG của Vethic, ngăn chặn hoàn toàn việc AI phản hồi sai lệch gây nguy hiểm cho vật nuôi."*

---

### PHẦN 3: ĐIỂM KHÁC BIỆT, NGUỒN THU & KHÁCH HÀNG ĐẦU TIÊN (10:00 - 13:00)

* **Trình chiếu Slide:** So sánh USP, Mô hình doanh thu và Kế hoạch Go-to-Market.
* **Người thuyết trình nói:**
  > *"Để thuyết phục các nhà đầu tư và doanh nghiệp về tính thực tiễn của VETHIC, chúng tôi xin làm rõ 3 yếu tố cốt lõi:
  >
  > **1. Điểm khác biệt vượt trội (USP) so với đối thủ:**
  > Khác với việc tìm kiếm thủ công mơ hồ trên Google hay các ứng dụng nước ngoài đắt đỏ như Pawp hay Vetster, VETHIC mang lại giá trị độc quyền:
  > * Tích hợp **AI YOLOv8 phân tích ảnh da liễu** và **Symptom Checker** đưa ra kết quả phân loại nguy cơ theo màu (Green, Yellow, Red) chỉ trong 30 giây.
  > * Hướng dẫn sơ cứu y tế trực quan ngay trong **'thời điểm vàng'** trước khi chủ nuôi kịp tiếp cận bác sĩ.
  > * Liên kết chặt chẽ với các phòng khám thực tế tại Cần Thơ dựa trên Google Maps API, hiển thị trạng thái mở cửa 24/7 và chỉ đường lập tức.
  >
  > **2. Chứng minh nguồn thu nhập thực tế (Mô hình doanh thu):**
  > VETHIC vận hành theo mô hình B2B2C bền vững:
  > * **B2C - Freemium & Subscriptions:** Miễn phí chẩn đoán cơ bản. Thu phí gói Premium (29.000đ/tháng) để mở khóa các tính năng nâng cao như lưu hồ sơ trọn đời cho nhiều thú cưng, đặt lịch hẹn bác sĩ ưu tiên và nhận cảnh báo nhắc lịch tiêm phòng tự động.
  > * **B2B - Phí hoa hồng đối tác (Affiliate & Lead Generation):** Nhận chiết khấu 5-10% trên mỗi lượt khách hàng đặt lịch khám thành công hoặc mua sắm phụ kiện, dịch vụ spa, grooming thông qua đề xuất của Vethic.
  >
  > **3. Kế hoạch tìm kiếm những khách hàng đầu tiên (Go-to-market):**
  > Nhóm tập trung triển khai 3 kênh tiếp cận ít chi phí nhưng hiệu quả cao:
  > * **Kênh Cộng đồng (Pet Communities):** Tiếp cận trực tiếp các hội nhóm yêu chó mèo lớn tại Cần Thơ (Cần Thơ Pet Club, Hội Yêu Mèo miền Tây) để chia sẻ các infographic sơ cứu hữu ích và tặng mã dùng thử Vethic Premium.
  > * **Kênh trường học:** Tận dụng mạng lưới sinh viên tại các trường Đại học lớn ở Cần Thơ (ĐH Cần Thơ, ĐH Nam Cần Thơ, ĐH FPT...) - nơi tập trung đông đảo tệp khách hàng mục tiêu 18-24 tuổi.
  > * **Kênh liên kết phòng khám:** Tặng QR Code quản lý hồ sơ thú cưng miễn phí cho các phòng khám tại địa phương để họ đặt tại quầy lễ tân. Khi chủ nuôi quét mã đăng ký tiêm phòng, họ nghiễm nhiên trở thành khách hàng đầu tiên của Vethic."*

---

### PHẦN 4: KẾT LUẬN & Q&A (13:00 - 15:00)

* **Người thuyết trình nói:**
  > *"Tóm lại, VETHIC giải quyết trọn vẹn nhu cầu thực tế của người nuôi thú cưng nhờ khả năng chẩn đoán 24/7 trực quan và đồng bộ bệnh án thông minh. Mặc dù hệ thống không thay thế hoàn toàn bác sĩ thú y, nhưng nó là 'lá chắn' đầu tiên giúp bảo vệ vật nuôi trong thời điểm vàng. 
  >
  > Trong giai đoạn tiếp theo, nhóm sẽ tập trung huấn luyện mô hình YOLO trên tập dữ liệu rộng hơn và liên kết với các phòng khám thú y lớn tại TP. Cần Thơ để hoàn thiện mạng lưới locator.
  >
  > Cảm ơn Hội đồng và quý Doanh nghiệp đã chú ý lắng nghe. Chúng tôi rất mong nhận được câu hỏi và ý kiến đóng góp."*

---

## 4. Tóm tắt checklist chuẩn bị trước khi báo cáo:
* [ ] Chạy sẵn ứng dụng cục bộ bằng cách mở `index.html` trong trình duyệt.
* [ ] Kiểm tra tính năng phím tắt: nhấn **phím 'A'** và **'B'** trong ô chat của trang `ai-chat.html` để đảm bảo mock câu hỏi hoạt động mượt mà.
* [ ] Chuẩn bị sẵn file ảnh `mangy_dog_chat.jpeg` trong thư mục `assets/picture/` để khi click nút Kẹp giấy, ảnh được hiển thị chính xác.
