# 1주차 개발환경 구축 
   
      
**1. Visual Studio Code 설치**   

https://code.visualstudio.com/download   
   
**2. Jqery, plotly 다운로드**      

**3. JDK/Tomcat/mybatis Eclipse 설치**   
   
#### 3.1 Spring 개발환경 구축      
   
   
 * #### (1) JDK 설치   
http://www.oracle.com/technetwork/java/javase/downloads/index.html  

JDK 설치 후 환경변수 셋팅 (제어판>시스템>고급시스템설정>환경변수)   
<pre><code>Path 변수를 편집하여 %JAVA_HOME%\bin 으로 경로 추가   
cmd 창을 열어 javac를 실행하여 작동여부 확인</code></pre>   


  * #### (2) Eclipse 설치   
https://www.eclipse.org/downloads 

Eclipse IDE for Enterprise Java Developers 설치 

<pre>
<code>Eclipse 실행>위 상단 Window>Preferences>Workspace>Text file encoding>other 체크 후 UTF-8로 변경   
Eclipse 실행>위 상단 Window>Preferences>Web>JSP Files>Encoding>ISO 10646/Unicde(UTF-8)로 변경</code>
</pre>  


   * #### (3) Spring 설치   
Eclipse 실행>위 상단 Help>Eclipse Marketplace에서 sts를 검색하여 spring tools 다운     


   * #### (4) Tomcat 설치   
https://tomcat.apache.org 

JDK 1.8버전이기 때문에 Tomcat은 9버전 사용      

<pre>
<code>Eclipse 실행>위 상단 Window>Preferences>Server>Runtime Environment>Add    
Apache Tomcat v9.0 선택>Next  
Tomcat installation directory에 다운받은 Tomcat의 경로를 찾아 설정   
  
Eclipse 실행>위 상단 Window>Show view>Servers를 클릭하여 하단의 Server탭 생성</code>
</pre>     


   * #### (5) Spring 프로젝트 생성   
Eclipse 실행>위 상단 File>New>Other>Spring>Spring Legacy Project 생성     

pom.xml 파일을 열어 Spring 버전과 maven-compiler 버전 수정 
    
Server>Tomcat v9.0 Server 선택>초록색 실행버튼 클릭>서버 작동   
localhost:8080/settingweb(프로젝트명)으로 접속 (정상 실행이 된다면 Hello World!를 확인 가능)    


-------------------------------------------------------------------------------------------------------------------

**3.2. Mariadb, MySQL Workbench**   


   * #### (1) Mariadb 설치   
https://mariadb.org/download/   Mariadb-10.2.14-windows x64 설치   
   
   
   * #### (2) MySQL Workbench 설치   
https://dev.mysql.com/downloads/workbench/   

-------------------------------------------------------------------------------------------------------------------------------

**3.3 Spring, Mariadb, MyBatis 연동**


   * #### (1) Pom.xml    
      * Mariadb, mybatis dependency    

   * #### (2) root-context.xml  
      * dataSource, sqlSessionFactory, sqlSession 

   * #### (3) src/main/java   
      * com.devfun.dao 
      * com.devfun.service 
      * com.devfun.vo 
      * com.devfun.settingweb   
        * HomeController   
```java
 @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Locale locale, Model model) throws Exception{
        logger.info("home");
        List<MovieVO> movieList = service.selectMovie();
        model.addAttribute("movieList", movieList);
        return "home";
  }
```
   * #### (4) src/main/webapp/WEB-INF/viwes   
      * home.jsp   
      
   * #### (5) Tomcat path '/' 변경     

-------------------------------------------------------------------------------------------------------------------
**참고**   
###### https://devfunpj.tistory.com/6?category=859537
