# 복습하며 정리

## manifest.json 정리

1. sap.app
    * id - (필수) 응용 요소의 명칭공간 - 70자를 넘을 수 없고, 유일해야하며 구성 요소 id와 일치해야함
    * type - 타입 정의
    * i18n - 리소스 번들 파일 경로 설정
    * title - i18n에서 가져오는 구문
    * description - 위와 같음 - 짧은 서술 글

2. sap.ui
    * technology - UI technology 명시
    * deviceType - 지원하는 기기 명시

3. sap.ui5
    * SAPUI5에서 자동으로 처리되도록 매개변수 환경설정
    * rootView - component
    * dependencies - UI 라이브러리 선언
    * models - model 정의
    * resources - css 경로