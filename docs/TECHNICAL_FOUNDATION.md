# Nền tảng kỹ thuật

## 1. Phạm vi repository

Repository hiện tại là `webcare-site`, chứa website công khai của WebCare
Solutions.

Mục tiêu:

- Giới thiệu vấn đề và giải pháp rõ ràng.
- Tạo yêu cầu tư vấn qua form hoặc điện thoại.
- Tải nhanh trên thiết bị di động.
- Triển khai đơn giản bằng Docker Compose trên một máy chủ.

Không thuộc phạm vi repository:

- Hệ thống monitoring nội bộ.
- Dữ liệu hoặc thông tin truy cập của khách hàng.
- Customer portal.
- Thanh toán trực tuyến.
- Dashboard vận hành.

Các thành phần vận hành nội bộ sau này thuộc repository `webcare-ops`.

## 2. Nền tảng giao diện

Phiên bản đầu sử dụng:

| Thành phần | Lựa chọn |
| --- | --- |
| Cấu trúc | HTML5 semantic |
| Giao diện | CSS thuần |
| Tương tác | JavaScript thuần |
| Font | System font, không tải từ bên thứ ba |
| Build step | Không có |
| Local preview | Python HTTP server |
| Production | Static files qua web server trong Docker Compose |

Không dùng framework khi chưa có nhu cầu về routing phức tạp, trạng thái ứng
dụng hoặc component dùng lại ở quy mô lớn.

## 3. Kiến trúc

```text
Khách truy cập
  |
  v
Reverse proxy
  |
  v
Static website
  |
  +--> Hotline
  |
  +--> Form yêu cầu tư vấn
```

Form hiện tại chỉ là giao diện phía client. Trước khi triển khai production cần
chọn một endpoint tiếp nhận form, bổ sung chống spam, validation phía server và
thông báo quyền riêng tư.

## 4. Cấu trúc file

```text
AGENTS.md
README.md
docs/
  PRODUCT.md
  TECHNICAL_FOUNDATION.md
website/
  index.html
  assets/
    css/
      main.css
    js/
      main.js
```

Chỉ thêm asset hoặc thư mục khi có nội dung thực tế.

## 5. Nguyên tắc giao diện

- Dùng tiếng Việt rõ ràng, hạn chế thuật ngữ hạ tầng.
- Mỗi section trả lời một câu hỏi của khách hàng.
- Tập trung vào kết quả thay vì tên công cụ.
- Luôn có đường dẫn rõ đến form tư vấn.
- Không đưa số liệu, khách hàng hoặc cam kết chưa được kiểm chứng.
- Không dùng ảnh stock trong MVP.
- Hỗ trợ màn hình nhỏ từ 360px.
- Tôn trọng `prefers-reduced-motion`.
- Dùng HTML semantic và trạng thái focus nhìn thấy được.

## 6. Luồng chuyển đổi

```text
Nhận biết vấn đề
  |
  v
Xem giải pháp phù hợp
  |
  v
Hiểu quy trình và phạm vi
  |
  v
Gửi yêu cầu tư vấn
```

Chỉ số cần đo sau khi có analytics hợp lệ:

- Lượt xem trang.
- Tỷ lệ nhấn nút tư vấn.
- Số form hợp lệ.
- Nguồn khách hàng.
- Giải pháp được quan tâm.

## 7. Chạy local

```bash
python3 -m http.server 8080 --directory website
```

Sau đó mở:

```text
http://localhost:8080
```

Không mở trực tiếp bằng `file://` vì hành vi trình duyệt có thể khác môi trường
HTTP thực tế.

## 8. Triển khai dự kiến

Website sẽ chạy bằng Docker Compose trên máy chủ hiện có. Compose chỉ phục vụ
static website và reverse proxy cần thiết.

Trước khi triển khai cần biết:

- Domain chính thức.
- Email nhận form.
- Số hotline.
- Endpoint xử lý form.
- Chính sách lưu dữ liệu liên hệ.

Chỉ công khai cổng 80 và 443. Image phải được gắn phiên bản cụ thể. Cấu hình
production sẽ được thêm sau khi domain và máy chủ được xác nhận.

## 9. Điều kiện hoàn thành MVP giao diện

- Hiển thị tốt trên desktop và mobile.
- Navigation hoạt động.
- Nội dung mô tả đúng ba giải pháp.
- Form có validation phía client.
- Không có lỗi JavaScript trong console.
- Điều hướng bằng bàn phím sử dụng được.
- Không có nội dung giả như số khách hàng hoặc uptime cam kết.
- Tài liệu khớp với giao diện.
