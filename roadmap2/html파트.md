# 프론트엔드
### HTML
#### 기초 배우기
<hr/>

> HTML 이란?
+ HTML은 HyperText Markup Language의 약자
+ 웹 페이지는 HTML 문서라고도 불리며, HTML 태그들로 구성
+ 각각의 HTML 태그는 웹 페이지의 디자인이나 기능을 결정하는데 사용
<img src="네이버 화면.png" width="50%" height="200" align="left"></img>
<img src="구글 화면.png" width="50%" height="200"></img>

> HTML 태그(tag)
+ HTML 태그는 태그 이름을 꺾쇠 괄호(<>)로 감싸서 표현
<pre>
<code>
<태그이름> 태그 ~~ <태그이름> 
</code>
</pre>
+ 보통 시작 태그(start tag, opening tag)와 종료 태그(end tag, closing tag)의 한 쌍으로 구성
+ <span style="color: gray">**\<br>, \<hr>등**과 같이 종료 태그 없이 시작 태그만을 가지는 태그를 빈 태그(empty tag)</span>

> HTML 기본 구조

<img src="HTML 구조.png" width="100%" height="300"></img>

+ \<!DOCTYPE html> : 현재 문서가 HTML5 문서임을 명시
+ \<html> : HTML 문서의 루트(root) 요소를 정의
+ \<head> : HTML 문서의 메타데이터(metadata)를 정의   <span style="color: gray"><h5> -메타데이터(metadata)란 HTML 문서에 대한 정보(data)로 웹 브라우저에는 직접적으로 표현되지 않는 정보   <h5>- \<title>, \<style>, \<meta>, \<link>, \<script>, \<base>태그 등을 이용하여 표현</span>
+ \<title> : HTML 문서의 제목(title)을 정의   <h5>-웹 브라우저의 툴바(toolbar)에 표시
+ <body> : 웹 브라우저를 통해 보이는 내용(content) 부분
+ \<h1> ~ \<h6> : 제목(heading)을 나타냄
+ \<p> : 단락(paragraph)을 나타냄

#### 의미론적인 HTML 작성
<hr/>

> Semantic HTML
>> Semantic HTML = HTML tag를 의미에 맞게 사용하는 것
>>> + \<div>에 클릭 이벤트를 달고 \<button>처럼 쓰는 경우 
>>> + \<aside>를 \<div class="aside">로 쓰는 경우 등

> 왜 Semantic하게 HTML을 짜야 하는가?
1. 다른 사람이 내 코드를 볼 때 편해진다.
```
<div>
    <div>
        <span>제목</soan>
     </div>
    <div>
        <div>
            <p>내용</p>
        </div>  
    </div>
    <div> 작성자 정보</div> 
</div>           
```
```
<body>
    <header>
        <h1>제목</h1>
       </header>
    <main>
        <section>
            <article>내용</article>
        </section>
    </main>
    <footer> 작성자 정보</footer>
</body>             
```
 2. 모바일 환경에서 유리하다. 
+ 코드가 짧아지니 non-semantic한 HTML보다 파일 사이즈가 가벼움
+ 태그에 기능이나 css가 내장되어있어 불필요한 구현을 줄일 수 있음

3. SEO를 위한 Semantic HTML
+ SEO(search engine optimization)은 검색 엔진이 내 페이지를 찾을 수 있도록 페이지를 최적화하는 것
+ Semantic한 HTML은 마냥 div만 작성한 코드보다 search engine에 내 페이지에 대한 정보를 더 많이 제공

<img src="semantic.png" width="100%" height="300"></img>
<h5> <span style="color: gray">일반적인 구조의 웹페이지를 작성할 떄의 구조 </span>


#### 폼과 유효성 검사
<hr/>

> 폼이란?
+ 웹 프로그래밍의 기술의 하나
+ 클라이언트가 정보를 입력 및 선택하고, 웹 서버 등의 폼을 처리하는 에이전트로 제출하기 위한 기구

```
<body>
    <form action="" method="" enctype="">
        <input type="text" name="test"> <br><br>
        <input type="submit">
    </form>        
</body>
```
+ action 은 데이터를 받아서 보낼 url 주소를 정함
+ method 는 데이터를 GET,POST,PUT...어떤 방식으로 보낼지 정함
+ enctype 은 데이터의 인코딩 방식을 정함

<img src="폼.png" width="100%" height="300"></img>

> 유효성 검사
+ 어느 브라우저를 사용하는지 여부에 상관없이 그 웹페이지가 똑같이 보이고 정상적으로 작동하는지에 대한 검사
+ = 웹 표준을 지킨다는 것
+ <span style="color: gray"> 웹 표준은 월드 와이드 웹의 측면을 서술하고 정의하는 공식 표준이나 다른 기술 규격을 가리키는 일반적인 용어 </span>
+ (http://validator.w3.org/)

