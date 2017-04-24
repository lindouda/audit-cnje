
$(function () {
    var ctx = document.getElementById("chartOrga");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Gestion Asso", "SMQ", "Dev Co", "Suivi d'Etude", "Recrutement", "Formation"],
			datasets: [{
				label: 'Note',
				data: [4, 3, 3, 5, 2, 3],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
   
    var option = {
		responsive: true,
    };

});

$(function () {
    var ctx = document.getElementById("chartTreso");
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ["Budget", "Compta", "Social", "Fiscal", "Ventes", "Achat"],
			datasets: [{
				label: 'Note',
				data: [2, 2, 3, 4, 3, 5],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero:true
					}
				}]
			}
		}
	});
   
    var option = {
		responsive: true,
    };

});