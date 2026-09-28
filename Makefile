.DEFAULT_GOAL := help

.PHONY: help check check-style serve

NODE := $(shell bash -lc 'node -p process.execPath 2>/dev/null')

help:
	@printf '%s\n' \
		'Wecare Solutions' \
		'' \
		'Cách dùng: make <target>' \
		'' \
		'Các target:' \
		'  help   Hiển thị hướng dẫn này.' \
		'  check  Kiểm tra cú pháp JavaScript.' \
		'  serve  Chạy website local tại http://127.0.0.1:8080.'

check: check-style
	@printf '%s\n' 'Đang kiểm tra Wecare Solutions...'
	@test -n "$(NODE)" || { printf '%s\n' 'Không tìm thấy Node.js.'; exit 1; }
	@$(NODE) --check website/assets/js/main.js
	@$(NODE) --check website/assets/js/translations.js
	@$(NODE) --check website/assets/js/solution-carousel.js
	@$(NODE) --check website/assets/js/motion.js
	@printf '%s\n' 'Kiểm tra JavaScript hoàn tất.'

check-style:
	@failed=0; \
	for sequence in '\342\200\224' '\302\240'; do \
		marker=$$(printf "$$sequence"); \
		if rg -n --hidden --glob '!.git/**' --glob '!node_modules/**' "$$marker" .; then failed=1; fi; \
	done; \
	if [ "$$failed" -ne 0 ]; then printf '%s\n' 'Phát hiện em dash hoặc non-breaking space.' >&2; exit 1; fi

serve:
	@printf '%s\n' 'Mở http://127.0.0.1:8080'
	@python3 -m http.server 8080 --bind 127.0.0.1 --directory website
