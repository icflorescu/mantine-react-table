import { useMRT_TableInstance } from './hooks/useMRT_TableInstance';
import { useMRT_TableOptions } from './hooks/useMRT_TableOptions';
import {
  type MRT_RowData,
  type MRT_TableInstance,
  type MRT_TableOptions,
} from './types';

export const useMantineReactTable: <TData extends MRT_RowData>(
  tableOptions: MRT_TableOptions<TData>,
) => MRT_TableInstance<TData> = (tableOptions) => {
  const parsedTableOptions = useMRT_TableOptions(tableOptions);
  const tableInstance = useMRT_TableInstance(parsedTableOptions);
  return tableInstance;
};
