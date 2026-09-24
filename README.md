# WebCare DatV

Website catalog giới thiệu hệ sinh thái solution kỹ thuật độc lập cho đội kỹ thuật,
doanh nghiệp, đội nội dung và khách hàng có nhu cầu cụ thể.

Khách hàng xem giải pháp, liên hệ để được tư vấn và nhận báo giá, thanh toán
chuyển khoản ngân hàng, sau đó nhận source code cùng guide tích hợp. Mỗi solution
hoặc tool nằm trong một project riêng và không được đưa vào repository này.

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
3. Vào `Forms > Submission notifications`.
4. Chọn `Add notification > Email notification`.
5. Nhập email nhận thông báo trong Netlify Dashboard.

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
        |   `-- responsive.css
        |-- img/
        |   `-- favicon.svg
        `-- js/
            |-- main.js
            `-- solution-carousel.js
```

- `docs/`: quyết định sản phẩm và kỹ thuật.
- `website/`: toàn bộ file được phục vụ cho người truy cập.
- `website/assets/`: CSS, JavaScript và các tài nguyên giao diện.

## Trạng thái

Giao diện MVP đang sử dụng HTML, CSS và JavaScript thuần. Form tư vấn sử dụng
Netlify Forms. Website chưa có thanh toán online, tài khoản hoặc dashboard.
