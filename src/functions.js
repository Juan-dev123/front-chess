function readCSVFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function(event) {
      const csvContent = event.target.result;
      resolve(csvContent);
    };

    reader.onerror = function(event) {
      reject(event.target.error);
    };

    reader.readAsText(file);
  });
}

async function convertCSVtoJSON(csvFile) {
  try {
    const csvContent = await readCSVFile(csvFile);
    const csvRows = csvContent.split('\n');
    const headers = csvRows[0].split(',');
    const data = [];

    for (let i = 1; i < csvRows.length; i++) {
      const row = csvRows[i].split(',');

      if (row.length !== headers.length) {
        console.log(`La fila ${i + 1} tiene un número incorrecto de columnas. Se omitirá.`);
        continue;
      }

      const formattedRow = {
        id: row[0],
        rated: row[1] === 'True',
        created_at: row[2],
        last_move_at: row[3],
        turns: parseInt(row[4]),
        victory_status: row[5],
        winner: row[6],
        increment_code: row[7],
        white_id: row[8],
        white_rating: parseInt(row[9]),
        black_id: row[10],
        black_rating: parseInt(row[11]),
        moves: row[12],
        opening_eco: row[13],
        opening_name: row[14],
        opening_ply: parseInt(row[15])
      };

      data.push(formattedRow);
    }

    return data;
  } catch (error) {
    console.error('Error al leer el archivo CSV:', error);
    throw error;
  }
}
