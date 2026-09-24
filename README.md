# WebCare Solutions

Website công khai giới thiệu dịch vụ monitoring, backup và server care cho
freelancer, agency và doanh nghiệp nhỏ.

## Chạy giao diện

```bash
python3 -m http.server 8080 --directory website
```

Mở `http://localhost:8080`.

## Tài liệu

- [Định hướng sản phẩm](docs/PRODUCT.md)
- [Nền tảng kỹ thuật](docs/TECHNICAL_FOUNDATION.md)
- [Quy tắc dự án](AGENTS.md)

## Cấu trúc

```text
.
|-- AGENTS.md
|-- README.md
|-- docs/
|   |-- PRODUCT.md
|   `-- TECHNICAL_FOUNDATION.md
`-- website/
    |-- index.html
    `-- assets/
        |-- css/
        |   `-- main.css
        `-- js/
            `-- main.js
```

- `docs/`: quyết định sản phẩm và kỹ thuật.
- `website/`: toàn bộ file được phục vụ cho người truy cập.
- `website/assets/`: CSS, JavaScript và các tài nguyên giao diện.

## Trạng thái

Giao diện MVP đang sử dụng HTML, CSS và JavaScript thuần. Form tư vấn chưa kết
nối backend và chưa gửi dữ liệu ra bên ngoài.
