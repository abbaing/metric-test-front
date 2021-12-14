const MetricService = {

    add: function(name, value, callbackFunction) {
        
        const data = { 
            name: name, 
            value: value,
            time: new Date(),
        }

        fetch(process.env.REACT_APP_API_URL + '/metrics', { 
            method: 'POST', 
            body: JSON.stringify(data),
            headers:{ 'Content-Type': 'application/json' } 
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            callbackFunction();
        });
    },

    delete: function(id, callbackFunction) {
        
        fetch(process.env.REACT_APP_API_URL + 'metrics/' + id, { 
            method: 'DELETE'
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            console.log('Success:', response);
            callbackFunction();
        });
    }
}

export default MetricService;