# Nền tảng kỹ thuật

## 1. Phạm vi repository

Repository hiện tại là `webcare-site`, chứa website catalog công khai của
WebCare Solutions.

Mục tiêu:

- Giúp khách hàng tìm và hiểu từng giải pháp.
- Tạo yêu cầu tư vấn và báo giá qua form hoặc điện thoại.
- Tải nhanh trên thiết bị di động.
- Triển khai đơn giản bằng Docker Compose trên một máy chủ.

Không thuộc phạm vi repository:

- Source code của các solution hoặc tool.
- Backend platform dùng chung.
- Dữ liệu hoặc thông tin truy cập của khách hàng.
- Customer portal.
- Thanh toán trực tuyến.
- Dashboard vận hành.

Mỗi solution hoặc tool có repository và vòng đời riêng. Website chỉ chứa nội
dung catalog, thông tin mua hàng và kênh liên hệ.

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

Form tư vấn sử dụng Netlify Forms và được gửi bằng AJAX. Netlify nhận submission,
lọc spam bằng honeypot và gửi thông báo tới email được cấu hình riêng trong
Netlify Dashboard. Email nhận thông báo không nằm trong source code.

Thông tin tài khoản ngân hàng không được hard-code trong source public. Thông tin
thanh toán được gửi cho khách sau khi nhu cầu, giá và phạm vi bàn giao đã được
xác nhận.

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
- Tập trung vào kết quả, phạm vi source code và nội dung guide.
- Nói rõ mỗi solution là một project độc lập.
- Luôn có đường dẫn rõ đến form tư vấn.
- Không đưa số liệu, khách hàng hoặc cam kết chưa được kiểm chứng.
- Không dùng ảnh stock trong MVP.
- Ưu tiên HTML và CSS cho minh họa giao diện đơn giản.
- Chỉ dùng SVG đã tối ưu khi thật sự cần asset vector.
- Không lưu ảnh raster marketing trong repository. Khi có nội dung ảnh, sử dụng
  ImageKit để phân phối và tối ưu kích thước.
- Không nhúng ảnh lớn dưới dạng base64 hoặc data URL.
- Hỗ trợ màn hình nhỏ từ 360px.
- Tôn trọng `prefers-reduced-motion`.
- Dùng HTML semantic và trạng thái focus nhìn thấy được.

### ImageKit

Website dùng một CDN prefix để ghép với asset path. Không cần ImageKit SDK khi
chỉ hiển thị ảnh.

- Frontend chỉ được dùng URL endpoint công khai và asset path.
- Không sao chép private key, upload token, signature hoặc cấu hình CMS.
- Upload ảnh thực hiện qua ImageKit Dashboard hoặc backend riêng.
- URL ảnh phải dùng transformation theo kích thước hiển thị.
- Ảnh ngoài màn hình đầu dùng `loading="lazy"` và `decoding="async"`.
- Luôn khai báo `width`, `height`, `alt` và `srcset` để tránh layout shift.
- Chưa thêm runtime code khi chưa có asset WebCare thực tế.

Mẫu URL, sử dụng placeholder thay vì endpoint thật:

```text
https://ik.imagekit.io/your_imagekit_id/tr:w-768,q-auto,f-auto/webcare/asset.webp
```

## 6. Luồng chuyển đổi

```text
Nhận biết vấn đề
  |
  v
Xem solution phù hợp
  |
  v
Hiểu source code và phạm vi bàn giao
  |
  v
Liên hệ, nhận báo giá và thanh toán chuyển khoản
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

Trước khi triển khai website cần biết:

- Domain chính thức.
- Kênh nhận yêu cầu tư vấn.
- Số hotline.
- Chính sách lưu dữ liệu liên hệ.
- Quy trình báo giá, thanh toán ngân hàng và bàn giao source code.

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
