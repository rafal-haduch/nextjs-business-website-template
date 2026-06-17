export const tableStyles = {
    table: 'w-full border-collapse',
    head: 'bg-background-secondary',
    th: 'px-4 py-3 text-left font-semibold',
    td: 'px-4 py-3',
    row: 'border-b border-border',
};

//TODO: extend class and maybe add getTableClasses(), getTableHeadClasses(), getTableDataClasses(), getTableRowClasses(), getTableFootClasses() with options variant: 'base', 'hover', 'zebra', 'compact' (space y)...

/*
<table className={tableStyles.table}>
    <thead className={tableStyles.head}>
        <tr>
            <th></th>
            <th></th>
        </tr>
     </thead>
     <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
         </tr> 
     </tbody>
     <tfoot>
         <tr>
            <th></th>
        </tr>
     </tfoot>
 </table>
 */
