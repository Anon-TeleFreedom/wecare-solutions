# WebCare Solutions: Catalog giải pháp kỹ thuật

## 1. Mô hình sản phẩm

WebCare Solutions là website catalog giúp khách hàng tìm một giải pháp kỹ thuật
phù hợp với vấn đề của họ.

Website không phải SaaS, marketplace tự động hoặc hệ thống vận hành website cho
khách hàng.

Mỗi solution hoặc tool:

- Là một project độc lập.
- Có source code riêng.
- Có guide cài đặt, cấu hình và tích hợp.
- Có phạm vi bàn giao và hỗ trợ riêng.
- Không nằm trong repository `webcare-site`.

## 2. Khách hàng mục tiêu

- Freelancer quản lý nhiều website.
- Agency cần giải pháp để triển khai cho khách hàng.
- Doanh nghiệp nhỏ có đội kỹ thuật nhưng thiếu một công cụ cụ thể.
- Developer hoặc DevOps muốn mua source code có thể tự triển khai.

## 3. Giá trị cung cấp

Khách hàng không phải tự tìm và ghép nhiều công cụ từ đầu. Họ được:

- Tư vấn solution phù hợp.
- Biết rõ vấn đề solution giải quyết.
- Biết source code và guide nào được bàn giao.
- Nhận báo giá trước khi thanh toán.
- Có hỗ trợ tích hợp theo phạm vi đã mua.

## 4. Nhóm solution ban đầu

### Website Monitoring

Giải quyết việc website gặp sự cố nhưng không được phát hiện sớm.

Sản phẩm có thể gồm:

- Source code hoặc cấu hình monitoring.
- Kiểm tra uptime, SSL và domain.
- Cảnh báo Telegram hoặc email.
- Docker Compose.
- Guide cài đặt và cấu hình.

### Backup and Recovery

Giải quyết việc backup thiếu nhất quán hoặc chưa có quy trình khôi phục.

Sản phẩm có thể gồm:

- Script backup.
- Chính sách lưu giữ mẫu.
- Cấu hình nơi lưu trữ.
- Quy trình restore.
- Guide backup và khôi phục.

### Server Care

Giải quyết việc máy chủ thiếu theo dõi và quy trình bảo trì.

Sản phẩm có thể gồm:

- Cấu hình theo dõi tài nguyên.
- Mẫu hardening firewall và SSH.
- Checklist bảo trì.
- Docker Compose nếu phù hợp.
- Guide triển khai.

Danh sách trên là nhóm catalog. Mỗi sản phẩm cụ thể vẫn phải có repository và
tài liệu riêng.

## 5. Quy trình mua hàng

```text
Khách xem catalog
  |
  v
Chọn solution hoặc mô tả vấn đề
  |
  v
Liên hệ để được tư vấn
  |
  v
Xác nhận phạm vi và báo giá
  |
  v
Chuyển khoản ngân hàng
  |
  v
Nhận source code và guide
  |
  v
Hỗ trợ tích hợp theo thỏa thuận
```

Website chưa cần checkout hoặc thanh toán online.

Thông tin tài khoản ngân hàng chỉ gửi sau khi đơn hàng và giá đã được xác nhận.
Không hard-code thông tin tài khoản thật trong repository public.

## 6. Nội dung website MVP

- Trang chủ.
- Danh sách solution.
- Lợi ích và vấn đề được giải quyết.
- Phạm vi source code được bàn giao.
- Công nghệ sử dụng.
- Quy trình mua hàng.
- Kênh liên hệ tư vấn.
- Câu hỏi thường gặp.

Mỗi solution sau này nên có trang chi tiết riêng gồm:

- Vấn đề.
- Đối tượng phù hợp.
- Tính năng.
- Yêu cầu hệ thống.
- Thành phần source code.
- Nội dung guide.
- Phạm vi hỗ trợ.
- Cách nhận báo giá.

## 7. Những thứ chưa xây

- Customer dashboard.
- Tài khoản người dùng.
- Backend platform dùng chung.
- Thanh toán online.
- Quản lý subscription.
- Monitoring hoặc backup chạy trực tiếp trong website catalog.
- Kho source code của các solution.

## 8. Nguyên tắc công khai

- Không công khai secret hoặc credentials.
- Không công khai thông tin tài khoản ngân hàng thật trong source.
- Không đưa source code solution vào website catalog.
- Không dùng tên hoặc logo bên thứ ba theo cách gây hiểu nhầm quan hệ hợp tác.
- Nói rõ khi khách hàng cần tự mua license bên thứ ba.
- Không đưa số liệu khách hàng hoặc cam kết chưa được kiểm chứng.

## 9. Tiêu chí xác thực mô hình

Mô hình có tín hiệu tốt khi:

- Khách hàng hiểu mỗi solution là một sản phẩm riêng.
- Khách hàng gửi yêu cầu tư vấn cho một vấn đề cụ thể.
- Có người chấp nhận báo giá.
- Có đơn hàng thanh toán chuyển khoản.
- Source code và guide đủ rõ để khách hàng triển khai.
- Câu hỏi hỗ trợ lặp lại được đưa ngược vào guide.

## 10. Việc cần làm tiếp theo

- [ ] Chốt ba solution đầu tiên.
- [ ] Viết trang chi tiết cho từng solution.
- [ ] Chốt kênh liên hệ công khai.
- [ ] Chuẩn hóa mẫu báo giá.
- [ ] Chuẩn hóa quy trình xác nhận chuyển khoản.
- [ ] Tạo template repository riêng cho mỗi tool.
- [ ] Tạo template guide bàn giao.
