function post(data){
  
    const requestBody = {
        "data": data
    };
    console.log(requestBody)

  axios.post("http://127.0.0.1:8000/knn/predict", requestBody, {
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((response) => {
          console.log("Success!");
          console.log(response);
      })
      .catch((error) => {
          console.log("Error!");
          console.log(error);
      });
}