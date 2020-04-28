$( document ).ready(function() {
    load_VirusList();
});
 
 
function load_VirusList(){
	
	var url="/chart1/restex";  

    $("#load_VirusList").click(function(){  
    
//        var url="/visualize_pilot/restex";  
        //var params="param1="+param1+"¶m2="+param1;  
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
//                VirusList = args;
//                for(var i=0;i<args.length;i++){
//                    html = "<tr>"
//                            + "<td>" + args[i].region + "</td>" 
//                            + "<td>" + args[i].confirmed_case + "</td>"
//                            + "<td>" + args[i].under_treatment + "</td>"
//                            + "<td>" + args[i].the_dead + "</td>" 
//                            + "<td>" + args[i].quarantine_release + "</td>" 
//                            + "<td>" + args[i].incidence_rate + "</td>" 
//                            "</tr>";
//                    $("#VirusList").append(html);
//                }
//                
                console.log(args);
                chart();
            },   
            beforeSend:function(){
                $("#VirusList").empty();  
            },
            error:function(e){  
                alert(e.responseText);  
            }  
        });  
      
    });
}

function chart(confirmed_case, under_treatment){
	
    $(function(){ 
  	  console.log();

  	var Chart = Highcharts.chart('container', {
  	    chart: {
  	        type: 'bar'
  	    },
  	    title: {
  	        text: 'Corona Virus by Region'
  	    },
  	    subtitle: {
  	        text: 'Source: <a href="https://coronaboard.kr/">coronaboard.kr</a>'
  	    },
  	    xAxis: {
  	        categories: ['busan', 'chungbuk', 'chungnam', 'daegu', 'daejeon', 'gangwon', 'gwanguj', 'gyeongbuk', 'gyeonggi', 'incheon', 'jeju', 'jepnbuk', 'jeonnam', 'quarantine', 'sejong', 'seoul', 'ulsan'],
  	        title: {
  	            text: null
  	        }
  	    },
  	    yAxis: {
  	        ticks : {
  					beginAtZero : true,
  					stepSize: 1
  				},

  	        title: {
  	            text: 'Population',
  	            align: 'high'
  	        },
  	        labels: {
  	            overflow: 'justify'
  	        }
  	    },
  	    tooltip: {
  	        valueSuffix: 'person'
  	    },
  	    plotOptions: {
  	        bar: {
  	            dataLabels: {
  	                enabled: true
  	            }
  	        }
  	    },
  	    legend: {
  	        layout: 'vertical',
  	        align: 'right',
  	        verticalAlign: 'top',
  	        x: -80,
  	        y: 50,
  	        floating: true,
  	        borderWidth: 3,
  	        backgroundColor:
  	            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
  	        shadow: true
  	    },
  	    credits: {
  	        enabled: false
  	    },
  	    series: [{
  	        name: 'confirmed_case',
  	        data: [137, 45, 142, 6487, 40, 53, 30, 1364, 671, 117, 92, 13, 18, 15, 436, 46, 629, 43]
  	   }, {
  	        name: 'under_treatment',
  	        data: [17, 5, 19, 638, 6, 16, 5, 198, 187, 23, 34, 5, 8, 6, 313, 11, 234, 6]
//  	    }, {
//  	        name: 'the_dead',
//  	        data: [3, 0, 0, 169, 0, 2, 0, 52, 14, 0, 0, 0, 0, 0, 0, 0, 2, 1]
//  	    }, {
//  	        name: 'quarantine_release',
//  	        data: [117, 40, 123, 6040, 34, 35, 25, 1114, 470, 94, 58, 8, 10, 9, 123, 35, 393, 36]
//  	    }, {
//  	        name: 'incidence_rate',
//  	        data: [4.02, 2.81, 6.69, 281.02, 2.71, 3.44, 2.06, 51.23, 3.48, 3.11, 1.94, 0.99, 0.8, 0, 13.44, 6.46, 3.75]
  	    }]
  	});
  	
  });
}
