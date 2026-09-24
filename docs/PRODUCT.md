# WebCare Solutions: Giải pháp vận hành website

## 0. Quyết định sản phẩm hiện tại

Sản phẩm được triển khai trước là một website công khai có mục tiêu giới thiệu
và bán giải pháp. Đây chưa phải web app, SaaS hoặc hệ thống để khách hàng tự đăng
ký.

Website giúp khách hàng:

- Nhận biết vấn đề họ đang gặp.
- Hiểu ba nhóm giải pháp: monitoring, backup và server care.
- Xem quy trình triển khai và phạm vi hỗ trợ.
- Gửi yêu cầu tư vấn hoặc liên hệ hotline.

WebCare Solutions không bán danh sách công cụ rời rạc. Dịch vụ bán kết quả triển
khai, cấu hình, tích hợp, hướng dẫn và hỗ trợ. Công cụ mã nguồn mở hoặc thương
mại chỉ là thành phần của từng giải pháp.

Repository hiện tại là `webcare-site`, chứa website marketing. Hệ thống vận
hành nội bộ sau này thuộc repository riêng `webcare-ops`.

## 1. Tóm tắt dự án

**WebCare Solutions** giúp freelancer, agency và doanh nghiệp nhỏ triển khai
giải pháp theo dõi, backup và vận hành website mà không cần tuyển nhân sự DevOps
riêng.

Dịch vụ ban đầu tập trung vào ba nhóm nhu cầu:

- **Website Monitoring**: uptime, SSL, domain và cảnh báo sự cố.
- **Backup and Recovery**: backup ngoài máy chủ và kiểm tra khôi phục.
- **Server Care**: theo dõi tài nguyên, hardening và bảo trì cơ bản.

Giai đoạn đầu, đây là một **dịch vụ được hỗ trợ bằng automation**, chưa phải một
nền tảng SaaS hoàn chỉnh. Mục tiêu là dùng website để tìm khách hàng trả tiền,
sau đó mới phát triển sản phẩm dựa trên các công việc thực tế thường xuyên lặp
lại.

## 2. Vấn đề cần giải quyết

Nhiều freelancer và agency có thể xây dựng website nhưng không muốn hoặc không đủ nguồn lực để theo dõi chúng liên tục sau khi bàn giao.

Các vấn đề phổ biến gồm:

- Website bị lỗi nhưng chỉ biết khi khách hàng phản ánh.
- SSL hoặc tên miền hết hạn mà không được nhắc trước.
- Backup được cấu hình nhưng không ai kiểm tra định kỳ.
- Máy chủ hết dung lượng hoặc quá tải.
- Không có người chịu trách nhiệm khi deploy thất bại.
- Agency phải kiểm tra nhiều website bằng phương pháp thủ công.

Website Care cung cấp một đầu mối chịu trách nhiệm theo dõi, cảnh báo và hỗ trợ xử lý các vấn đề này.

## 3. Khách hàng mục tiêu

### Nhóm ưu tiên

- Freelancer đang quản lý từ 5 website trở lên.
- Agency thiết kế website quản lý từ 10–50 website khách hàng.
- Doanh nghiệp nhỏ có website quan trọng nhưng không có đội vận hành riêng.

### Chưa phục vụ trong giai đoạn đầu

- Hệ thống yêu cầu trực 24/7 với SLA nghiêm ngặt.
- Ngân hàng, fintech, y tế hoặc hệ thống có yêu cầu tuân thủ phức tạp.
- Hạ tầng Kubernetes hoặc microservice quy mô lớn.
- Website có lưu lượng rất lớn hoặc yêu cầu bảo mật chuyên sâu.

Giới hạn này giúp một người có thể vận hành dịch vụ an toàn trong giai đoạn thử nghiệm.

## 4. Giá trị cung cấp

Thông điệp ngắn gọn:

> Chúng tôi theo dõi website của bạn, cảnh báo trước khi vấn đề trở nên nghiêm trọng và hỗ trợ xử lý khi có sự cố.

Lợi ích đối với agency:

- Giảm thời gian kiểm tra website thủ công.
- Phát hiện sự cố trước khách hàng cuối.
- Tạo thêm doanh thu bảo trì hàng tháng.
- Không cần tuyển DevOps toàn thời gian.

Lợi ích đối với doanh nghiệp nhỏ:

- Biết website có đang hoạt động bình thường hay không.
- Có người hỗ trợ kỹ thuật khi xảy ra lỗi.
- Giảm rủi ro mất dữ liệu do backup không hoạt động.

## 5. Phạm vi website MVP

Website công khai phiên bản đầu gồm:

1. Trang giới thiệu giá trị chính.
2. Ba nhóm giải pháp.
3. Vấn đề mà từng giải pháp xử lý.
4. Công cụ có thể tích hợp.
5. Quy trình khảo sát và triển khai.
6. Bảng giá định hướng.
7. Câu hỏi thường gặp.
8. Form yêu cầu tư vấn.

Form chỉ thu thập thông tin cần thiết. Chưa có tài khoản, thanh toán trực tuyến
hoặc customer portal.

## 6. Phạm vi dịch vụ MVP

Phiên bản đầu tiên chỉ cần cung cấp sáu chức năng:

1. Kiểm tra HTTP/HTTPS mỗi 1–5 phút.
2. Gửi cảnh báo khi website không phản hồi nhiều lần liên tiếp.
3. Cảnh báo SSL sắp hết hạn.
4. Theo dõi ngày hết hạn tên miền khi dữ liệu có thể truy cập được.
5. Kiểm tra backup định kỳ theo checklist.
6. Gửi báo cáo hàng tháng cho khách hàng.

Tùy quyền truy cập của khách hàng, có thể bổ sung:

- Theo dõi CPU, RAM và dung lượng ổ đĩa.
- Theo dõi container hoặc process quan trọng.
- Kiểm tra cron job.
- Hỗ trợ deploy thủ công.
- Khôi phục website từ backup.

## 7. Những việc chưa cần xây

Trong giai đoạn MVP, không cần:

- Dashboard tự phát triển.
- Ứng dụng mobile.
- Hệ thống thanh toán tự động.
- AI phân tích sự cố.
- Kubernetes.
- Kiến trúc microservice.
- Hệ thống monitoring do mình tự viết từ đầu.

Có thể sử dụng công cụ mã nguồn mở hoặc dịch vụ miễn phí, kết hợp với quy trình vận hành thủ công.

## 8. Gói dịch vụ và mức giá thử nghiệm

Mức giá dưới đây dùng để kiểm tra nhu cầu, có thể thay đổi sau khi làm việc với khách hàng đầu tiên.

### Gói Basic: 150.000 đồng/website/tháng

- Theo dõi uptime.
- Cảnh báo SSL.
- Cảnh báo qua email hoặc Telegram.
- Báo cáo hàng tháng.

### Gói Care: 300.000 đồng/website/tháng

- Toàn bộ tính năng của Basic.
- Kiểm tra backup định kỳ.
- Theo dõi tài nguyên server nếu được cấp quyền.
- Tối đa 30 phút hỗ trợ kỹ thuật mỗi tháng.

### Gói Agency: từ 1.500.000 đồng/tháng

- Tối đa 10 website.
- Một đầu mối làm việc với agency.
- Báo cáo có thể gắn thương hiệu của agency.
- Phí bổ sung cho mỗi website vượt giới hạn.

Các công việc sửa lỗi, migration, khôi phục dữ liệu hoặc thay đổi hạ tầng lớn được báo giá riêng.

## 9. Nguyên tắc vận hành

- Không hứa hỗ trợ 24/7 trong giai đoạn đầu.
- Thời gian phản hồi và thời gian khắc phục phải được phân biệt rõ.
- Chỉ nhận số lượng website có thể quản lý an toàn.
- Không lưu mật khẩu trong file văn bản hoặc chat.
- Ưu tiên quyền chỉ đọc; chỉ xin quyền quản trị khi thực sự cần.
- Mỗi website phải có thông tin liên hệ, quy trình escalation và hướng dẫn khôi phục.
- Backup chỉ được xem là đáng tin cậy sau khi đã kiểm tra khả năng khôi phục.

## 10. Công nghệ đề xuất cho giai đoạn đầu

Website marketing ban đầu sử dụng HTML, CSS và JavaScript thuần. Khi triển khai,
website sẽ chạy bằng Docker Compose trên một máy chủ.

Hệ thống vận hành nội bộ sau này có thể sử dụng Caddy, Uptime Kuma, Telegram hoặc
email và backup ngoài máy chủ trong repository `webcare-ops`.

Kiến trúc, công cụ, bảo mật, quy trình triển khai và hướng mở rộng được mô tả tại
[TECHNICAL_FOUNDATION.md](TECHNICAL_FOUNDATION.md).

## 11. Quy trình tiếp nhận một website

1. Thu thập URL, nhà cung cấp hosting và người liên hệ.
2. Xác định mức độ quan trọng và khung giờ hỗ trợ.
3. Kiểm tra SSL, domain, DNS, uptime và tình trạng backup hiện tại.
4. Thống nhất kênh cảnh báo và người nhận cảnh báo.
5. Cài đặt monitoring với quyền tối thiểu cần thiết.
6. Tạo checklist xử lý sự cố cho website.
7. Chạy thử cảnh báo.
8. Bắt đầu kỳ dịch vụ và gửi báo cáo đầu tiên.

## 12. Kế hoạch tìm khách hàng đầu tiên

Không chạy quảng cáo ngay. Tiếp cận trực tiếp những người đã quản lý nhiều website.

### Danh sách cần tìm

- Freelancer WordPress, Laravel hoặc web development.
- Agency thiết kế website nhỏ.
- Người bán hosting hoặc quản lý VPS cho khách hàng.
- Bạn bè đang làm website cho doanh nghiệp.

### Lời mời thử nghiệm

> Mình đang thử nghiệm dịch vụ theo dõi uptime, SSL và backup cho các agency quản lý nhiều website. Mình có thể kiểm tra miễn phí 3 website trong 14 ngày và gửi báo cáo. Nếu hữu ích thì sau đó mới tính phí.

Mục tiêu ban đầu:

- Trò chuyện với 10 khách hàng tiềm năng.
- Cho 3 khách hàng dùng thử.
- Có 1 khách hàng trả tiền.
- Ghi lại những vấn đề xuất hiện lặp lại.

## 13. Kế hoạch thực hiện trong 30 ngày

### Tuần 1: Chuẩn bị

- Chọn tên tạm thời cho dịch vụ.
- Cài đặt hệ thống monitoring.
- Tạo mẫu báo cáo tháng.
- Viết checklist tiếp nhận website.
- Theo dõi thử 2–3 website cá nhân.

### Tuần 2: Xác thực nhu cầu

- Liên hệ ít nhất 10 freelancer hoặc agency.
- Hỏi họ đang quản lý bao nhiêu website.
- Tìm hiểu sự cố gần nhất và cách họ phát hiện.
- Mời ba người dùng thử miễn phí.

### Tuần 3: Chạy thử

- Thêm website của khách hàng thử nghiệm.
- Kiểm tra cảnh báo giả và quy trình phản hồi.
- Ghi lại thời gian dành cho từng website.
- Không tự động can thiệp vào server khi chưa được phép.

### Tuần 4: Thu phí lần đầu

- Gửi báo cáo kết quả thử nghiệm.
- Đề xuất gói trả phí phù hợp.
- Xin phản hồi về dịch vụ và mức giá.
- Chỉ xây automation cho công việc đã thực sự lặp lại.

## 14. Chỉ số đánh giá

Trong ba tháng đầu, theo dõi:

- Số người đã trao đổi.
- Số khách hàng dùng thử.
- Số khách hàng trả tiền.
- Doanh thu định kỳ hàng tháng.
- Số website đang theo dõi.
- Số cảnh báo đúng và cảnh báo sai.
- Thời gian vận hành trung bình trên mỗi website.
- Số sự cố được phát hiện trước khách hàng.
- Tỷ lệ khách hàng tiếp tục sử dụng dịch vụ.

## 15. Khi nào nên phát triển thành sản phẩm

Chỉ nên xây dashboard hoặc SaaS riêng khi có ít nhất một trong các tín hiệu sau:

- Có từ 5–10 khách hàng trả tiền.
- Đang quản lý ít nhất 50 website.
- Một thao tác thủ công giống nhau xuất hiện hàng tuần.
- Khách hàng chủ động yêu cầu đăng nhập và xem dữ liệu.
- Chi phí công cụ hiện tại cao hơn chi phí tự xây và bảo trì.

Sản phẩm tương lai có thể cung cấp:

- Dashboard dành cho agency.
- Quản lý nhiều khách hàng và nhiều website.
- Báo cáo white-label.
- Theo dõi uptime, SSL, domain, backup và cron job tại một nơi.
- Phân quyền cho nhân viên và khách hàng cuối.
- Thanh toán định kỳ.

## 16. Rủi ro chính

### Quá nhiều cảnh báo giả

Giải pháp: chỉ gửi cảnh báo sau nhiều lần kiểm tra thất bại và có bước xác nhận từ vị trí khác.

### Khách hàng kỳ vọng hỗ trợ 24/7

Giải pháp: ghi rõ khung giờ hỗ trợ, thời gian phản hồi và giới hạn dịch vụ trong thỏa thuận.

### Mất an toàn thông tin đăng nhập

Giải pháp: sử dụng password manager, SSH key, MFA và quyền tối thiểu; ghi log việc truy cập.

### Công việc hỗ trợ vượt quá phí hàng tháng

Giải pháp: quy định số phút hỗ trợ bao gồm trong từng gói và báo giá riêng cho công việc phát sinh.

### Phụ thuộc vào một khách hàng lớn

Giải pháp: không để một khách hàng chiếm phần lớn doanh thu khi dịch vụ bắt đầu tăng trưởng.

## 17. Tiêu chí thành công ban đầu

Dự án được xem là có tín hiệu tốt nếu sau 30–45 ngày đạt được:

- Ít nhất 10 cuộc trao đổi với khách hàng tiềm năng.
- Ít nhất 3 khách hàng thử nghiệm.
- Ít nhất 1 khách hàng trả tiền.
- Xác định được một vấn đề mà nhiều khách hàng cùng gặp.

Nếu chưa có ai trả tiền, chưa nên xây thêm tính năng. Cần thay đổi nhóm khách hàng, thông điệp hoặc phạm vi dịch vụ rồi thử lại.

## 18. Việc cần làm tiếp theo

- [ ] Chọn tên tạm thời.
- [ ] Chọn nhóm khách hàng đầu tiên: freelancer hay agency.
- [ ] Cài đặt monitoring cho website cá nhân.
- [ ] Tạo một báo cáo mẫu.
- [ ] Lập danh sách 10 người có thể liên hệ.
- [ ] Mời ba người dùng thử 14 ngày.
- [ ] Chốt khách hàng trả phí đầu tiên trước khi xây dashboard.
