$(document).ready(function () {
    var DateLabels = new Array();
    var DailyActive = new Array();
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
                var confirm_cases = data.confirm_case;
                var deaths = data.deaths;
                var recovered = data.recovered;
                var active = confirm_cases - (deaths + recovered);
                DateLabels.push(confirm_date);
                DailyActive.push(active);
            });
            var progress = document.getElementById('activeAnimationProgress');
            var ctx = document.getElementById('activeReport').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: DateLabels,
                    datasets: [{
                        label: confirmed,
                        fill: true,
                        backgroundColor: 'hsl(348, 100%, 61%)',
                        data: DailyActive
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: daily + " " + active_tran,
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
                                fontSize: 14
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