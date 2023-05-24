
const requestBody = {
    "data": [
    {
      "id": "TZJHLljE",
      "rated": false,
      "created_at": "1.50421E+12",
      "last_move_at": "1.50421E+12",
      "turns": 33,
      "victory_status": "outoftime",
      "winner": "white",
      "increment_code": "15+2",
      "white_id": "bourgris",
      "white_rating": 1500,
      "black_id": "a-00",
      "black_rating": 1191,
      "moves": "d4 d5 c4 c6 cxd5 e6 dxe6 fxe6 Nf3 Bb4+ Nc3 Ba5 Bf4",
      "opening_eco": "D10",
      "opening_name": "Slav Defense: Exchange Variation",
      "opening_ply": 5
    },
    {
      "id": "l1NXvwaE",
      "rated": true,
      "created_at": "1.50413E+12",
      "last_move_at": "1.50413E+12",
      "turns": 16,
      "victory_status": "resign",
      "winner": "black",
      "increment_code": "5+10",
      "white_id": "a-00",
      "white_rating": 1322,
      "black_id": "skinnerua",
      "black_rating": 1261,
      "moves": "d4 Nc6 e4 e5 f4 f6 dxe5 fxe5 fxe5 Nxe5 Qd4 Nc6 Qe5+ Nxe5 c4 Bb4+",
      "opening_eco": "B00",
      "opening_name": "Nimzowitsch Defense: Kennedy Variation",
      "opening_ply": 4
    }
  ]
};

axios.post("https://chess-back.azurewebsites.net//knn/predict", requestBody, {
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