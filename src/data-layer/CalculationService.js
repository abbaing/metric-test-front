const CalculationService = {

    getAveragePerMinute: function(callbackFunction) {

        fetch(process.env.REACT_APP_API_URL + '/calculation?averageperminute=true')
        .then((response) => response.json())
        .then(response => {
            console.log('Success:', response);
            callbackFunction(response);
        });
    },
    getAveragePerHour: function(callbackFunction) {

        fetch(process.env.REACT_APP_API_URL + '/calculation?averageperhour=true')
        .then((response) => response.json())
        .then(response => {
            console.log('Success:', response);
            callbackFunction(response);
        });
    },
    getAveragePerDay: function(callbackFunction) {

        fetch(process.env.REACT_APP_API_URL + '/calculation?averageperday=true')
        .then((response) => response.json())
        .then(response => {
            console.log('Success:', response);
            callbackFunction(response);
        });
    },
}

export default CalculationService;