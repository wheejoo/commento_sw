<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<title>CoronaVirus</title>
	  <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home.js"></script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
    <link href="${pageContext.request.contextPath}/resources/css/linechart.css" rel="stylesheet" />
</head>
<body>
<h1>
	Corona_Virus
</h1>
 <button id = "load_VirusList" type = "button">chart</button>
	<table>
	            
<!--    <thead>
	            <tr>
	                <th>지역</th>
	                <th>확진자</th>
	                <th>치료중</th>
	                <th>사망자</th>
	                <th>격리해제</th>
	                <th>발생률</th>	                
	            </tr>
	        </thead> -->
	        
<!--         <tbody id ="VirusList">
	            <c:forEach items="${VirusList}" var="Virus">
	                <tr>
	                    <td>${virus.region}</td>
	                    <td>${virus.confirmed_case}</td>
	                    <td>${virus.under_treatment}</td>
	                    <td>${virus.the_dead}</td>
	                    <td>${virus.quarantine_release}</td>
	                    <td>${virus.incidence_rate}</td>
	                </tr>
	            </c:forEach>
	        </tbody>-->
	    </table>
	    
	    <figure class="highcharts-figure">
    		<div id="container"></div>
    		<p class="highcharts-description">2020.04.27 기준</p>
		</figure>
    
</body>
</html>
