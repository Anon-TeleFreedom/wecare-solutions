# Bản đồ code

Tài liệu này giúp người mới tìm đúng file trước khi sửa. Website dùng HTML, CSS và
JavaScript thuần, không có bước build và không cần cài dependency.

## Điểm bắt đầu

- `website/index.html`: cấu trúc semantic, nội dung hiển thị và Netlify Form.
- `website/assets/css/`: style được chia theo phạm vi trách nhiệm.
- `website/assets/js/main.js`: hành vi chung của trang.
- `website/assets/js/solution-carousel.js`: chỉ xử lý carousel solution.
- `website/assets/js/motion.js`: chỉ xử lý entrance và scroll reveal.

Giữ `index.html` là tài liệu HTML tĩnh để nội dung có sẵn cho SEO, accessibility
và Netlify Forms. Không chuyển nội dung chính sang render bằng JavaScript.

## CSS

Các file CSS được tải theo thứ tự sau:

1. `tokens.css`: màu sắc, font, kích thước và design token dùng chung.
2. `foundation.css`: reset, layout nền, header, button và thành phần dùng chung.
3. `hero.css`: hero và phần minh họa đầu trang.
4. `solutions.css`: problem strip và carousel solution.
5. `sections.css`: quy trình, tích hợp, đối tượng sử dụng, form và footer.
6. `motion.css`: reveal, chuyển động nền nhẹ và reduced motion.
7. `responsive.css`: breakpoint, mobile navigation và reduced motion.

Thứ tự này là một phần của CSS cascade. Không đổi thứ tự nếu chưa kiểm tra lại
toàn bộ giao diện. Quy tắc mới phải nằm trong file đang sở hữu thành phần đó.

## JavaScript

### `main.js`

Chỉ quản lý các hành vi cấp trang:

- Chuyển light và dark theme.
- Đóng mở menu mobile.
- Hiện nút cuộn lên đầu trang.
- Chọn solution quan tâm từ liên kết trong card.
- Validate và gửi form tư vấn tới Netlify Forms.

### `motion.js`

Chỉ quản lý chuyển động giao diện:

- Entrance animation ở hero.
- Reveal một lần khi nội dung đi vào viewport.
- Khởi tạo chuyển động nền nhẹ trong preview.
- Không ẩn nội dung khi JavaScript không chạy.

### `solution-carousel.js`

Chỉ quản lý carousel solution:

- Tạo clone phục vụ vòng lặp liên tục.
- Điều hướng bằng nút, bàn phím, chuột, cảm ứng và trackpad.
- Đồng bộ vị trí hiện tại.
- Chuẩn hóa vị trí sau khi đi qua clone.
- Tôn trọng `prefers-reduced-motion`.

Không đưa logic carousel trở lại `main.js`. Không render card bằng JavaScript vì
card là nội dung chính và phải tồn tại trong HTML khi JavaScript chưa chạy.

## Tìm file theo công việc

| Công việc | File chính |
| --- | --- |
| Sửa nội dung, sản phẩm hoặc form | `website/index.html` |
| Đổi màu, font hoặc spacing chung | `website/assets/css/tokens.css` |
| Sửa header, button hoặc layout nền | `website/assets/css/foundation.css` |
| Sửa hero | `website/assets/css/hero.css` |
| Sửa card hoặc carousel | `website/assets/css/solutions.css` |
| Sửa process, integrations, contact hoặc footer | `website/assets/css/sections.css` |
| Sửa hiệu ứng và scroll reveal | `website/assets/css/motion.css` và `website/assets/js/motion.js` |
| Sửa mobile hoặc breakpoint | `website/assets/css/responsive.css` |
| Sửa theme, menu, scroll top hoặc form | `website/assets/js/main.js` |
| Sửa chuyển động và vòng lặp carousel | `website/assets/js/solution-carousel.js` |
| Sửa quy tắc giao diện | `docs/UI_GUIDELINES.md` |
| Sửa phạm vi sản phẩm | `docs/PRODUCT.md` |

## Kiểm tra sau khi sửa

Chạy local:

```bash
python3 -m http.server 8080 --directory website
```

Kiểm tra JavaScript:

```bash
node --check website/assets/js/main.js
node --check website/assets/js/solution-carousel.js
node --check website/assets/js/motion.js
```

Trước khi hoàn thành, kiểm tra desktop và mobile ở cả light theme và dark theme,
keyboard navigation, carousel, form validation và browser console.
