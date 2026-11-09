# HAELON 헤일론 — 서비스 소개 웹사이트

공항 드론·테러 통합 대응 관제 플랫폼 **HAELON**의 소개 웹사이트입니다.
2026 캡스톤 디자인 · TEAM 공중도덕 (장하준 · 김규민 · 김유란 · 김지윤 · 이주빈 · 정유민)

## 폴더 구조

```
haelon-website/
├── index.html        # 페이지 내용 (섹션별로 주석 구분)
├── css/style.css     # 디자인 (맨 위 :root 에서 색상·폰트 변경)
├── js/main.js        # 스크롤 애니메이션, 시계, 카운트업 등
└── assets/
    ├── images/       # UI 화면 캡처, 3D 렌더 이미지
    ├── video/        # 소개 영상, 3D 영상
    └── sound/        # 효과음, 기장 방송 등
```

## 섹션 구성

| # | 섹션 | id |
|---|------|----|
| – | 히어로 (레이더 애니메이션) | `#hero` |
| 00 | 소개 영상 | `#video` |
| 01 | 프로젝트 오버뷰 · 핵심 기능 3가지 | `#overview` |
| 02 | 기획 배경 · 사례 · 문제 정의 | `#background` |
| 03 | 주 사용자 / 부 사용자 | `#users` |
| 04 | 현장 리서치 · 조종사 인터뷰 | `#field` |
| 05 | 드론 3종 (EYE · GUARD · SCOUT) | `#drones` |
| 06 | 대응 5단계 흐름 · 위협 등급 | `#flow` |
| 07 | 디바이스 (키오스크 · 아이폰 듀오) | `#devices` |
| 08 | 경쟁사 · UI 매트릭스 · 포지셔닝 · SWOT | `#analysis` |
| 09 | 인사이트 | `#insight` |
| 10 | 미래형 공항 (3D) | `#future` |
| – | 팀 푸터 | `#team` |

## 자주 하는 수정

- **영상 넣기**: `assets/video/haelon-intro.mp4`로 파일을 올린 뒤, `index.html`의 `<!-- <video ...> -->` 주석을 해제
- **UI 이미지 교체**: `assets/images/kiosk.png`, `duo.png`를 올리고 `.device__mock` 안의 예시 블록을 `<img>`로 교체
- **색상 변경**: `css/style.css` 맨 위 `--accent`(브랜드색), `--safe / --watch / --alert`(위협 등급색)

## 미리보기 & 배포

- 로컬: `index.html`을 브라우저로 열기
- 배포(GitHub Pages): 저장소 **Settings → Pages → Branch: `main` / root → Save**
  → 몇 분 뒤 `https://<아이디>.github.io/<저장소명>/` 에서 확인
