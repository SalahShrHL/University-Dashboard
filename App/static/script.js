loadData();



function loadData(){
   
    
    httpRequest1 = new XMLHttpRequest();	
	httpRequest1.open('GET', '/api/data');
	httpRequest1.onreadystatechange = function () {
		if (httpRequest1.readyState === 4 && httpRequest1.status === 200) {
			jsonData1 = JSON.parse(httpRequest1.response);
            update_char1(jsonData1)			
		}
	};
	httpRequest1.send();
    
    httpRequest2 = new XMLHttpRequest();	
	httpRequest2.open('GET', '/api/data2');
	httpRequest2.onreadystatechange = function () {
		if (httpRequest2.readyState === 4 && httpRequest2.status === 200) {
			jsonData2 = JSON.parse(httpRequest2.response);
            update_char2(jsonData2)			
		}
	};
	httpRequest2.send();


    httpRequest3 = new XMLHttpRequest();	
	httpRequest3.open('GET', '/api/data3');
	httpRequest3.onreadystatechange = function () {
		if (httpRequest3.readyState === 4 && httpRequest3.status === 200) {
			jsonData3 = JSON.parse(httpRequest3.response);
            update_char3(jsonData3)			
		}
	};
	httpRequest3.send();

    httpRequest4 = new XMLHttpRequest();	
	httpRequest4.open('GET', '/api/data4');
	httpRequest4.onreadystatechange = function () {
		if (httpRequest4.readyState === 4 && httpRequest4.status === 200) {
			jsonData4 = JSON.parse(httpRequest4.response);
            update_char4(jsonData4)			
		}
	};
	httpRequest4.send();

    httpRequest5 = new XMLHttpRequest();	
	httpRequest5.open('GET', '/api/data5');
	httpRequest5.onreadystatechange = function () {
		if (httpRequest5.readyState === 4 && httpRequest5.status === 200) {
			jsonData5 = JSON.parse(httpRequest5.response);
            update_char5(jsonData5)			
		}
	};
	httpRequest5.send();

    httpRequest6 = new XMLHttpRequest();	
	httpRequest6.open('GET', '/api/data6');
	httpRequest6.onreadystatechange = function () {
		if (httpRequest6.readyState === 4 && httpRequest6.status === 200) {
			jsonData6 = JSON.parse(httpRequest6.response);
            update_char6(jsonData6)			
		}
	};
	httpRequest6.send();

	httpRequest7 = new XMLHttpRequest();	
	httpRequest7.open('GET', '/api/data7');
	httpRequest7.onreadystatechange = function () {
		if (httpRequest7.readyState === 4 && httpRequest7.status === 200) {
			jsonData7 = JSON.parse(httpRequest7.response);
            update_char7(jsonData7)			
		}
	};
	httpRequest7.send();

    httpRequest8 = new XMLHttpRequest();	
	httpRequest8.open('GET', '/api/data8');
	httpRequest8.onreadystatechange = function () {
		if (httpRequest8.readyState === 4 && httpRequest8.status === 200) {
			jsonData8 = JSON.parse(httpRequest8.response);
            update_char8(jsonData8)			
		}
	};
	httpRequest8.send();

    httpRequestN = new XMLHttpRequest();	
	httpRequestN.open('GET', '/api/dataNum');
	httpRequestN.onreadystatechange = function () {
		if (httpRequestN.readyState === 4 && httpRequestN.status === 200) {
			jsonDataN = JSON.parse(httpRequestN.response);
            update_Numbers(jsonDataN)			
		}
	};
	httpRequestN.send();

}

function update_char1(jsonData){
	var labels = jsonData.anne;
	
	for(d of jsonData.datasets){
		d.fill = false;				  
        c='#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderColor = c ;
        d. backgroundColor= c;
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data = jsonData.datasets;

    
	new Chart(document.getElementById("chart1"), {
        type: 'line',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			maintainAspectRatio: true,		  
			scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }


		}
	});
}

function update_char2(jsonData){
	var labels = jsonData.map(function(e) {
	   return e.annee;
	});
    console.log(labels);
	
	var data = jsonData.map(function(e) {
	   return e.num;
	});
	
	new Chart(document.getElementById("chart2"), {
		type: 'bar',
		data: {
		  labels: labels,
		  datasets: [{
			
			backgroundColor: ['rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)'],
			data: data
            
		  }]
		},
		options: {
		  responsive: false,
          legend: { display: false },
          scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
		}
	});	
}





function update_char3(jsonData){
	var labels = jsonData.map(function(e) {
	   return e.annee;
	});
	
	var data = jsonData.map(function(e) {
	   return e.num;
	});
	
	new Chart(document.getElementById("chart3"), {
		type: 'polarArea',
		data: {
		  labels: labels,
		  datasets: [{
			
			backgroundColor: ["rgb(255, 205, 86)", "rgb(255, 99, 132)","#3cba9f"],
			data: data
		  }]
		},
		options: {
		  responsive: false,
		  maintainAspectRatio: true,
		}
	});	
}


function update_char4(jsonData){
	var labels = jsonData.anne;
	
	for(d of jsonData.datasets){
		d.fill = false;				  
        c='#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderColor = c ;
        d. backgroundColor= c;
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data = jsonData.datasets;

	new Chart(document.getElementById("chart4"), {
        type: 'line',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			maintainAspectRatio: true,		  
			scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }


		}
	});
}


function update_char5(jsonData){
	var labels = jsonData.anne;
	
	for(d of jsonData.datasets){
		d.fill = false;				  
        c='#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderColor = c ;
        d. backgroundColor= c;
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data = jsonData.datasets;

	new Chart(document.getElementById("chart5"), {
        type: 'line',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			maintainAspectRatio: true,		  
			scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }


		}
	});
}


function update_char6(jsonData){
	var labels = jsonData.map(function(e) {
	   return e.specialite;
	});
	
	var data = jsonData.map(function(e) {
	   return e.num;
	});
	
	new Chart(document.getElementById("chart6"), {
		type: 'doughnut',
		data: {
		  labels: labels,
		  datasets: [{
			
			backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
               
              ],
			data: data
		  }]
		},
		options: {
		  responsive: false,
		  maintainAspectRatio: true,
		}
	});	
}









function update_char7(jsonData){
	var labels = jsonData.spec;
	
	for(d of jsonData.datasets){
		d.fill = false;				  
        c='#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderColor = c ;
        d. backgroundColor= c;
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data = jsonData.datasets;

	new Chart(document.getElementById("chart7"), {
		type: 'radar',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			


		}
	});
}


function update_char8(jsonData){
	var labels = jsonData.spec;
	
	for(d of jsonData.datasets){
		d.fill = false;				  
        c='#'+Math.floor(Math.random()*16777215).toString(16);
		d.borderColor = c ;
        d. backgroundColor= c;
		d.borderWidth=2;
		d.radius=1;			
	}			
	
	var data = jsonData.datasets;

	new Chart(document.getElementById("chart8"), {
		type: 'radar',
		data: {
			labels: labels,
			datasets: data
		},
		options: {						
			responsive: false,
			


		}
	});
}


function update_Numbers(jsonData){	

		etu = document.getElementById("num1");
		reus = document.getElementById("num2");
        spec=document.getElementById("num3");	

		etu.innerText = jsonData[0];
		reus.innerText = jsonData[1];
		spec.innerText = jsonData[2];

	}
