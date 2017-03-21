# Appraisal-Survey service
### READ ME
 - 초기기획 사내IDC말고 다른거 써보자


### 개요
 * 평가 설문 구성요소는 아래와 같다
 1. 문항 설계
    - 문항 입력 및 미리보기 기능
    - page 분할
 2. 대상자 지정
    - default setting 업로드
    -  
 
 2.1 대상자 Matching
    - 구성원 목록 확인
 
 3. 메일발송
    - mailing 기능.
    - mail message 설정.
 4. 응답결과 정리
    - 응답결과 Download기능.
 
 
 ### 기획
 1. 설문 설계자 화면
  - 설문 목록(게시판 형태...?)
  - 설문 생성
  - =>설문 대상자 지정
  - =>설문 문항 작성
  - 메일 발송
  - =>메일 컨텐츠 작성
  - =>응답자/미응답자 현황 조회
  - 응답 내용 확인
  - =>응답자/미응답자 현황 조회
  - =>대상자별 응답 내용 조회/다운로드
    
 2. 설문 응답자 화면
  - 메일 링크로 들어옴
  - 랜딩페이지 (평가 개요)
  - 내가 응답해야할 사람 list
  - 응답자 지정/취소
  - =>부하의 Peer 지정
  - 문항 View
  - => 응답 대상자 별 page구분
  - => 문항별 응답 선택
  - 저장/제출
  - => 임시저장
  - => 최종제출
  

### 사용 기술
 1. Front-end
  - survey UI framework
  - [http://surveyjs.org/index.html]
  - CSS : less...
  - reactJS
  - webpack
 
 2. Back-end
  - node.js + express
  
  - AWS..?
  
  
### 목표
