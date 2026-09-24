# WebCare DatV: Hệ sinh thái Solution

## 1. Định vị

WebCare DatV là hệ sinh thái solution kỹ thuật và dịch vụ trợ giảng DevOps
được cung cấp theo nhu cầu thực tế của khách hàng.

`webcare-site` là website catalog và kênh nhận yêu cầu tư vấn. Website không phải
backend dùng chung cho các sản phẩm.

Mỗi solution:

- Là một project và repository độc lập.
- Có phạm vi, source code, guide và lộ trình riêng.
- Có thể chạy độc lập hoặc tích hợp với solution khác qua API.
- Chỉ được giới thiệu là sẵn sàng khi đã được kiểm thử.

## 2. Danh mục solution

### WebCare Incident

Repository dự kiến: `webcare-incident`.

Lớp API trung gian nhận incident đã được tạo bởi các hệ thống monitoring, chuẩn
hóa dữ liệu và điều phối tới đúng người hoặc kênh xử lý.

Phạm vi dự kiến:

- Nhận alert qua HTTP API và webhook.
- Adapter cho Alertmanager, vmalert, InfluxDB notification và generic webhook.
- Chuẩn hóa severity, label, service, team và trạng thái.
- Gom nhóm, chống trùng và quản lý vòng đời incident.
- ACK, silence, routing và escalation.
- Gửi tới WebCare App Notify, email, Telegram hoặc webhook khác.
- Lưu lịch sử thay đổi để truy vết.
- Self-hosted bằng Docker Compose.

Sản phẩm không phải datasource, metrics collector hoặc time-series database. Nó
không scrape, lưu hay truy vấn metrics và không thay thế Prometheus, InfluxDB,
VictoriaMetrics hoặc Alertmanager.

Versus Incident là sản phẩm tham chiếu về webhook intake, template, notification,
ACK và escalation. WebCare Incident không sao chép source code hoặc tuyên bố có
quan hệ hợp tác với Versus Incident.

MVP không gồm AI agent đọc log, phát hiện anomaly hoặc tự tạo alert rule.

### WebCare App Notify

Repository dự kiến: `webcare-app-notify`.

Ứng dụng nhận notification và phối hợp xử lý theo từng incident. App nhận dữ liệu
đã chuẩn hóa từ WebCare Incident.

Phạm vi dự kiến:

- Đăng nhập, người dùng và đội nhóm.
- Nhận push notification.
- Danh sách và chi tiết incident đang mở.
- ACK, nhận xử lý, giao người phụ trách và cập nhật trạng thái.
- Bình luận trong từng incident.
- Timeline từ lúc phát hiện tới khi khắc phục.
- Deep link từ notification tới đúng incident.

Phiên bản đầu không phải ứng dụng chat tổng quát và không cố thay thế Slack hoặc
Microsoft Teams.

### WebCare Pages

Repository dự kiến: `webcare-pages`.

Công cụ quản lý nội dung và tự động đăng bài lên nhiều nền tảng mạng xã hội từ
một quy trình chung.

Phạm vi dự kiến:

- Quản lý nhiều tài khoản, trang và kênh.
- Soạn nội dung một lần và tùy chỉnh theo từng nền tảng.
- Lịch nội dung và hàng đợi đăng bài.
- Quy trình draft, review, approve và publish.
- Tự động đăng bài theo lịch.
- Theo dõi trạng thái, lỗi và lịch sử publish.
- Quản lý media qua dịch vụ lưu trữ được cấu hình.

Mỗi nền tảng có API, quyền truy cập và chính sách riêng. Chỉ công bố tích hợp khi
đã kiểm tra API và điều khoản của nền tảng đó.

### WebCare GitOps

Repository dự kiến: `webcare-gitops`.

Bộ công cụ và template giúp khách hàng thiết lập quy trình GitOps mà không phải
tự ghép toàn bộ thành phần từ đầu.

Solution phải trả lời rõ ba câu hỏi:

1. Lưu trữ ở đâu?
   - Source và cấu hình trong Git repository.
   - Container image trong container registry.
   - Artifact hoặc file lớn trong object storage khi cần.
   - Secret nằm trong secret manager hoặc cơ chế mã hóa phù hợp.
2. Scan như thế nào?
   - Scan source, dependency, secret, IaC và container image.
   - Có quality gate và chính sách chặn trước khi deploy.
   - Lưu kết quả scan để audit.
3. Deploy như thế nào?
   - Pipeline build tạo artifact bất biến.
   - Git là source of truth cho cấu hình môi trường.
   - GitOps controller đồng bộ trạng thái mong muốn xuống môi trường chạy.
   - Có promotion, approval, rollback và lịch sử thay đổi.

Phạm vi sản phẩm dự kiến:

- Template repository và cấu trúc môi trường.
- Pipeline build, scan và publish image.
- Cấu hình registry, object storage và secret management.
- Template GitOps controller cho môi trường mục tiêu.
- Chính sách deployment và rollback.
- Docker Compose cho thành phần phù hợp, Kubernetes khi khách hàng cần.
- Guide cài đặt, tích hợp và vận hành.

Không khóa sản phẩm vào một Git provider, registry, scanner hoặc cloud duy nhất.
Bộ tích hợp cụ thể được chốt theo nhu cầu khách hàng.

### WebCare Mentor

Dịch vụ trợ giảng DevOps theo giờ, không phải một tool hoặc backend riêng. Dịch
vụ dành cho người học, developer chuyển hướng sang DevOps và đội kỹ thuật cần
một buổi trợ giảng tập trung để gỡ vướng.

Hình thức và giá:

- Meeting online 1:1 hoặc theo nhóm nhỏ.
- Thời lượng tiêu chuẩn 60 phút.
- Giá công khai 200.000đ cho mỗi 60 phút.
- Nội dung buổi meeting được thống nhất trước khi thanh toán.

Phạm vi có thể trao đổi:

- Xây lộ trình học DevOps phù hợp với nền tảng hiện tại.
- Gợi ý và giải thích tài liệu học.
- Giải đáp Linux, container, CI/CD, monitoring, GitOps và vận hành hệ thống.
- Review kiến trúc, pipeline hoặc phương án triển khai ở mức tư vấn.
- Chuẩn bị nội dung thực hành hoặc phỏng vấn theo nhu cầu.

Dịch vụ không cam kết việc làm, chứng chỉ hoặc kết quả học tập. Không yêu cầu
credential production của khách hàng trong một buổi trợ giảng thông thường.

## 3. Quan hệ giữa WebCare Incident và App Notify

```text
Alertmanager / vmalert / HTTP notification
                    |
                    v
            WebCare Incident
                    |
          API, webhook, event
                    |
                    v
          WebCare App Notify
```

WebCare Incident sở hữu logic tiếp nhận, chuẩn hóa, chống trùng, routing và vòng
đời incident. WebCare App Notify tập trung vào trải nghiệm nhận thông báo và phối
hợp xử lý, không triển khai lại logic của WebCare Incident.

WebCare Pages và WebCare GitOps là hai sản phẩm độc lập, không phụ thuộc vào cặp
sản phẩm incident và notify. WebCare Mentor là dịch vụ trợ giảng độc lập,
không cần một repository sản phẩm riêng.

## 4. Ranh giới repository

```text
webcare-site
webcare-incident
webcare-app-notify
webcare-pages
webcare-gitops
```

Không gom source code của các solution vào `webcare-site` hoặc vào một monorepo
chung chỉ để tiện phát triển ban đầu.

## 5. Khách hàng mục tiêu

- Đội DevOps, Platform và SRE.
- Đội phát triển phần mềm cần chuẩn hóa triển khai.
- Doanh nghiệp cần công cụ phù hợp với quy trình nội bộ.
- Đội marketing hoặc content vận hành nhiều kênh.
- Đội kỹ thuật nhỏ muốn self-host và làm chủ dữ liệu.
- Người học, developer chuyển hướng sang DevOps hoặc cần trợ giảng theo giờ.

## 6. Mô hình tư vấn và bàn giao

```text
Khách hàng mô tả vấn đề
          |
          v
WebCare phân tích nhu cầu
          |
          v
Chọn solution hoặc đặt lịch trợ giảng
          |
          v
Chốt phạm vi và báo giá
          |
          v
Bàn giao solution hoặc thực hiện buổi trợ giảng
```

Thanh toán trước mắt qua chuyển khoản ngân hàng. Không hard-code email cá nhân,
thông tin ngân hàng, credentials hoặc secret vào repository.

## 7. Nguyên tắc nội dung công khai

- Không bịa khách hàng, đối tác, chuyên gia, logo hoặc lời chứng thực.
- Chỉ công bố tên hoặc logo khi đã có sự đồng ý.
- Không tuyên bố tính năng hoặc tích hợp đã sẵn sàng khi chưa kiểm thử.
- Không gây hiểu nhầm về quan hệ với sản phẩm tham chiếu hoặc bên thứ ba.
- Dùng giá trị có thể kiểm chứng như source bàn giao, self-hosted và guide.
- Có thể mời khách hàng tham gia design partner để tạo bằng chứng sử dụng thật.

## 8. Thứ tự phát triển

1. Mở lịch WebCare Mentor với phạm vi và giá công khai.
2. Chốt MVP và xây WebCare Incident trước.
3. Ổn định API sự kiện giữa WebCare Incident và WebCare App Notify.
4. Xây WebCare App Notify với phạm vi notification và xử lý incident.
5. Xác thực nhu cầu và API nền tảng trước khi xây WebCare Pages.
6. Chốt bộ công cụ mặc định trước khi xây WebCare GitOps.

Không phát triển đồng thời cả bốn backend ở giai đoạn đầu.

## 9. Những thứ chưa nằm trong website catalog

- Backend thực thi của từng solution.
- Dashboard sản phẩm thật.
- Tài khoản khách hàng.
- Thanh toán online.
- Kho source code của solution.
- Dữ liệu vận hành hoặc social account của khách hàng.

## 10. Việc cần làm tiếp theo

- [x] Chốt bốn solution và một dịch vụ mentor trong catalog.
- [x] Công khai mức giá WebCare Mentor.
- [x] Tách ranh giới repository.
- [x] Chọn Versus Incident làm tham chiếu cho luồng incident.
- [ ] Chốt MVP của WebCare Incident.
- [ ] Chọn stack kỹ thuật và event schema.
- [ ] Tạo repository `webcare-incident`.
- [ ] Thiết kế API webhook đầu tiên.
- [ ] Xác thực nhu cầu riêng cho WebCare Pages và WebCare GitOps.
