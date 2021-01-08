# SAPUI5

 - 회사에서 사용하는 SAPUI5를 학습하는 Repository
 - 해당 사이트 : https://sapui5.hana.ondemand.com/
 - SAP 운영자 사이트 : https://st03k.tistory.com/
 - SAP 개발자 사이트 : https://dhan-description.tistory.com/

## 목표

* SAPUI5를 이용한 MES개발
* 해당 Framework의 사용법과 구조 파악

### EMS의 목표

 * 정보의 가시성 향상, 생산 수율 향상, 관리의 효율성 증대

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