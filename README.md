# SAPUI5

 - 회사에서 사용하는 SAPUI5를 학습하는 Repository
 - 해당 사이트 : https://sapui5.hana.ondemand.com/
 - SAP 운영자 사이트 : https://st03k.tistory.com/
 - SAP 개발자 사이트 : https://dhan-description.tistory.com/
 - 해당 index.html을 실행할 때는 반드시 live server로 실행할 것

## SAPUI5란?

 - SAPUI5란 반응형 웹 애플리케이션을 개발을 위한 프레임워크

## 목표

 * SAPUI5를 이용한 MES개발
 * 해당 Framework의 사용법과 구조 파악

### EMS의 개요

 * 제품주문에 의한 착수에서 완성품의 품질검사까지 전 생산활동을 관리하는 시스템으로 생산 현장의 각종 정보, 즉 생산실적, 작업자 활동, 설비가동, 제품 품질정보 등을 실시간으로 수집하여 집계/분석/모니터링 및 생산공정을 제어함으로써 고품질의 수익 지향적 생산체제를 갖추게 하는 통합 생산관리시스템

### 주요 사용 기능

 * Routor를 이용한 페이지 전환
 * Dialog와 상세페이지를 통한 값, 정보 변경
 * 달력과 검색창을 통한 결과 출력
 * 정보 등록, 수정, 삭제 등 일정 관리

### 기능

 * 디버깅 툴
    - crtl + alt + shift + s

 * 랜드마크 내비게이션
    - alt + shift + l

 * Dialog
    - fragment 하나의 파일 당 js파일이 필요함

### 사용중인 기능이지만 잘 모르는 것

 * mockserver
    - 사용하는 이유

### SAPUI5 알게 된 것

 * this
    - 컨트롤러에서 extend(상속받는 컨트롤러)를 가리킴
    - 이를 통해 상속받아 부모의 함수를 사용할 수 있음

 * BaseController
    - 중복되는 함수는 BaseController에 구현한 뒤 this.함수명으로 호출하여 사용하면 중복되는 코드를 줄일 수 있음
    - BaseController의 함수 내에서 더 하위 단계의 함수로 내려가면 var that = this를 하여 담아놓고 사용

### 라이브러리
 - sap.ui.core -> view
 - sap.m -> Button, Input, Test

### 리눅스를 사용한 호스팅

 1. VPN을 통해 회사 서버에 접속
 2. PuTTY로 리눅스 실행
 3. root로 로그인 후 새로운 관리자 생성
 4. 관리자에게 권한 부여 -> 메모장을 root와 같은 번호로 수정
 5. filezilla로 사이트 관리자 열기로 접속
 6. 원하는 경로에 jar 파일 업로드
 7. 해당 jar 파일 실행
 8. ip:port로 접속 확인
 9. hosts 메모장으로 도메인 확인
 10. C:\windows\system32\drivers\etc\hosts 에 ip 도메인 입력
 11. 도메인:port로 접속 확인