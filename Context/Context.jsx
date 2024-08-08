import React, { createContext, useContext, useEffect, useState } from 'react';

function generarEnlaceConParametros(sheetId) {
  var spreadsheetId = "19gBYyB7y48o72PbZIfkvy6h5rL_vpfBKEepO2SRLR4Q";
  var enlace = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json&gid=${sheetId}`;
  return enlace;
}

// Para la primer hoja
function generarEnlaceConParametros1() {
  return generarEnlaceConParametros("0");
}

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const enlaceHoja1 = generarEnlaceConParametros1();

    const fetchData = async () => {
      try {
        const response = await fetch(enlaceHoja1);
        const textData = await response.text();
        const jsonData = textData.substring(47, textData.length - 2);
        const parsedData = JSON.parse(jsonData);
        setData(parsedData.table.rows);
      } catch (error) {
        console.error('Error al obtener datos desde Google Sheets:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

