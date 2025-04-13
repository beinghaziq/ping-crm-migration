import React, { useState, useMemo } from "react";

interface TableProps {
  columns: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [searchText, setSearchText] = useState("");
  const [filterColumn, setFilterColumn] = useState(columns[0]);
  const [filterValue, setFilterValue] = useState("");

  const uniqueValues = useMemo(() => {
    const valuesSet = new Set(data.map((row) => row[filterColumn]));
    return Array.from(valuesSet);
  }, [filterColumn, data]);

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const matchesSearch = Object.values(row)
        .join(" ")
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesDropdown = filterValue
        ? row[filterColumn]?.toString() === filterValue
        : true;

      return matchesSearch && matchesDropdown;
    });
  }, [searchText, filterValue, filterColumn, data]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 rounded"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <div className="flex gap-2">
          <select
            className="p-2 border border-gray-300 rounded"
            value={filterColumn}
            onChange={(e) => {
              setFilterColumn(e.target.value);
              setFilterValue("");
            }}
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>

          <select
            className="p-2 border border-gray-300 rounded"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="">All</option>
            {uniqueValues.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    {row[col as keyof typeof row]}
                  </td>
                ))}
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
