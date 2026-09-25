# Wecare DatV

Website catalog giới thiệu hệ sinh thái solution kỹ thuật và dịch vụ trợ giảng
DevOps cho đội kỹ thuật, doanh nghiệp, đội nội dung và người học. Giao diện hỗ
trợ tiếng Việt, tiếng Anh và tiếng Trung giản thể.

Khách hàng có thể mua solution kèm source code và guide, hoặc đặt lịch Wecare
Mentor với giá 200.000đ cho 60 phút. Mỗi solution hoặc tool nằm trong một
project riêng và không được đưa vào repository này.

License của các solution được quản lý trong repository private
`wecare-license`. Website public này không chứa license key, dashboard quản
trị hoặc logic kích hoạt.

## Chạy giao diện

```bash
python3 -m http.server 8080 --directory website
```

Mở `http://localhost:8080`.

## Deploy Netlify

Website là static site, không có bước build. File `netlify.toml` đặt publish
directory là `website`.

Kết nối repository với Netlify và deploy. Không nhập email cá nhân, secret hoặc
credential vào source code.

Sau lần deploy đầu tiên:

1. Vào `Forms` và bật form detection nếu Netlify chưa bật sẵn.
2. Xác nhận form `consultation` đã được nhận diện.
3. Mở form và xác nhận `Extra spam prevention` hiển thị honeypot cùng reCAPTCHA.
4. Trên domain Netlify, gửi form với thông tin hợp lệ để xác nhận CAPTCHA chỉ xuất hiện sau lần bấm gửi đầu tiên. Hoàn thành CAPTCHA rồi gửi lại form để kiểm tra submission. CAPTCHA không hoạt động trên preview local.
5. Vào `Forms > Submission notifications`.
6. Chọn `Add notification > Email notification`.
7. Nhập email nhận thông báo trong Netlify Dashboard.

Email nhận thông báo không được ghi vào source code.

## Tài liệu

- [Định hướng sản phẩm](docs/PRODUCT.md)
- [Nền tảng kỹ thuật](docs/TECHNICAL_FOUNDATION.md)
- [Bản đồ code](docs/CODEBASE.md)
- [Quy tắc giao diện](docs/UI_GUIDELINES.md)
- [Quy tắc dự án](AGENTS.md)

## Cấu trúc

```text
.
|-- AGENTS.md
|-- README.md
|-- netlify.toml
|-- docs/
|   |-- CODEBASE.md
|   |-- PRODUCT.md
|   |-- TECHNICAL_FOUNDATION.md
|   `-- UI_GUIDELINES.md
`-- website/
    |-- index.html
    `-- assets/
        |-- css/
        |   |-- tokens.css
        |   |-- foundation.css
        |   |-- hero.css
        |   |-- solutions.css
        |   |-- sections.css
        |   |-- motion.css
        |   `-- responsive.css
        |-- img/
        |   `-- favicon.svg
        `-- js/
            |-- main.js
            |-- motion.js
            |-- solution-carousel.js
            `-- translations.js
```

- `docs/`: quyết định sản phẩm và kỹ thuật.
- `website/`: toàn bộ file được phục vụ cho người truy cập.
- `website/assets/`: CSS, JavaScript và các tài nguyên giao diện.

## Trạng thái

Giao diện MVP đang sử dụng HTML, CSS và JavaScript thuần. Form tư vấn sử dụng
Netlify Forms. Website chưa có thanh toán online, tài khoản hoặc dashboard.
