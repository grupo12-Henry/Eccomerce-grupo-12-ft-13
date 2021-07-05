if(typeof require !== 'undefined') XLSX = require('xlsx');

const ExcelAJson = () => {
    const excel = XLSX.readFile("Lista precios.xlsx")
    var nombrehoja = excel.SheetNames;
    let datos = XLSX.utils.sheet_to_json(excel.Sheets[nombrehoja[0]])
    return datos;
}



var Database = ExcelAJson()

module.exports = {
    Database
}

//C:\\Users\\user\\Desktop\\HENRY\\e-commerce\\E-Commerce\\Eccomerce-grupo-12-ft-13\\api\\database list\\Lista precios.xlsx