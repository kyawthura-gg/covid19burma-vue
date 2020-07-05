$(document).ready(function () {
    var DateLabels = new Array();
    var DateDeaths = new Array();
    $(document).ready(function () {
        $.get(urlDate, function (response) {
            response.forEach(function (data) {
                const d = new Date(data.date_confirm);
                const dtf = new Intl.DateTimeFormat('en', {
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit'
                })
                const [{
                    value: mo
                }, , {
                    value: da
                }, , {
                    value: ye
                }] = dtf.formatToParts(d)
                var confirm_date = `${da} ${mo}`;
                DateLabels.push(confirm_date);
                DateDeaths.push(data.deaths);
            });
            var progress = document.getElementById('deathAnimationProgress');
            var ctx = document.getElementById('deathReport').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: DateLabels,
                    datasets: [{
                        label: deaths,
                        fill: true,
                        backgroundColor: 'hsl(0, 0%, 86%)',
                        data: DateDeaths
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: daily + " " + deaths,
                        fontColor: "white",
                        fontSize: 17,
                    },
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        xAxes: [{
                            stacked: true,
                            gridLines: {
                                display: false,
                            }
                        }],
                        yAxes: [{
                            stacked: true,
                            ticks: {
                                fontColor: "white",
                                fontSize: 14,
                                // stepSize: 1,
                                // beginAtZero: true
                            },
                            gridLines: {
                                display: false,
                            }
                        }],
                    },
                    animation: {
                        duration: 2000,
                        onProgress: function (animation) {
                            progress.value = animation.currentStep / animation.numSteps;
                        },
                        onComplete: function () {
                            window.setTimeout(function () {
                                progress.value = 0;
                            }, 500);
                        }
                    }
                }
            });
        });
    });
});