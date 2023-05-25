function post(data){
  
    const requestBody = {
        "data": data
    };

    response = axios.post("https://chess-back.azurewebsites.net/knn/predict", requestBody, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch((error) => {
        console.log("Error!");
        console.log(error);
    });

    return response
}