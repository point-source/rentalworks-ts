// deno-lint-ignore-file no-explicit-any
import { FwStandardSqlServerFwJsonDataTableRead } from "./generated/home.ts";

export function tableToJson(table: FwStandardSqlServerFwJsonDataTableRead) {
    const json = table.Rows?.map(row => {
        const obj: { [key: string]: any } = {};
        table.Columns?.forEach((col, i) => {
            const columnName = col.Name;
            if (columnName) {
                obj[columnName] = row[i];
            }
        });
        return obj;
    });
    return json;
}
