# 🎨 Modern-Agile-Design-System

### 📄 협업 규칙
#### 🖊 커밋 메시지 규칙
**<font color="green">작업</font>(<font color="red">브랜치명</font>): <font color="purple">메시지</font> #<font color="blue">이슈번호</font>** <br/> ex) `Feat(MAButton): 버튼 컴포넌트 생성 #1 `

__Commit Convention__
> __Feat__: 새로운 기능의 추가 <br />
__Modify__: 코드 수정 (기능의 향상이 이루어졌을 때) <br />
__Refactor__: 코드 수정 (코드 리팩토링) <br />
__Fix__: 버그를 고친 경우 <br />
__Test__: 테스트 관련 <br />
__Style__: 코드 포맷 변경, 세미콜론 누락, 콘솔로그, 코드 수정이 없는 경우 <br />
__Rename__: 파일 혹은 폴더명 수정 <br />
__Remove__: 파일 삭제
__Module__: 새로운 모듈 추가
__Docs__: 문서 수정

#### ⭐ PR
- PR시 이슈 링크 반드시 할 것
- 알맞은 라벨 추가할 것

#### ❗ 이슈
코드 작업하기 전에 반드시 이슈 생성할 것

---

### 🛒 작업 리스트
#### 1️⃣ Input System
> __🖱 Button__ &nbsp;&nbsp;&nbsp; __🖋Input__ &nbsp;&nbsp;&nbsp; __✅CheckBox__ &nbsp;&nbsp;&nbsp; __📻Radio__ &nbsp;&nbsp;&nbsp; __🔍SelectBox__ &nbsp;&nbsp;&nbsp; __🥇Rating__

---

### 🗂 폴더 구조
![image](https://user-images.githubusercontent.com/63432381/151703203-297ffe69-d1a4-467b-8379-40104b848f27.png)

* __components__ 컴포넌트 작업 폴더.
* __shared__ global style과 type interface가 존재.
* __stories__ 스토리북 폴더. 모든 디자인 컴포넌트는 이곳에서 UI 테스트를 진행한다.
* __tsconfig.paths.json__ 절대 경로 설정 파일.

---

### 📘 프로젝트 참고 자료
* [MUI](https://mui.com/)
* [Figma](https://www.figma.com/file/gchC3ckb2nXdCNZyOCn34S/%EB%94%94%EC%9E%90%EC%9D%B8%EC%8B%9C%EC%8A%A4%ED%85%9C?node-id=0%3A1)
