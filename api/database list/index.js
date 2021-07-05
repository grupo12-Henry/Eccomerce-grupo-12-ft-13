var XLSX = require('xlsx');


// https://firebasestorage.googleapis.com/v0/b/ecommerce12-4268e.appspot.com/o/Lista%20precios.xlsx?alt=media&token=7926ec33-1979-4a34-9231-17c36c820dbe


const ExcelAJson = () => {
    const excel = XLSX.readFile("Lista precios.xlsx")
    var nombrehoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombrehoja[0]])
    console.log(datos)
}



var Database = ExcelAJson()

console.log(Database)