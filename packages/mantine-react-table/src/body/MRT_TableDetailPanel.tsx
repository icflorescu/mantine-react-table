import clsx from 'clsx';
import classes from './MRT_TableDetailPanel.module.css';
import { Box, Collapse } from '@mantine/core';
import { parseFromValuesOrFunc } from '../column.utils';
import {
  type MRT_Row,
  type MRT_RowData,
  type MRT_TableInstance,
  type MRT_VirtualItem,
} from '../types';

interface Props<TData extends MRT_RowData> {
  parentRowRef: React.RefObject<HTMLTableRowElement>;
  row: MRT_Row<TData>;
  rowIndex: number;
  table: MRT_TableInstance<TData>;
  virtualRow?: MRT_VirtualItem;
}

export const MRT_TableDetailPanel = <TData extends MRT_RowData>({
  parentRowRef,
  row,
  rowIndex,
  table,
  virtualRow,
}: Props<TData>) => {
  const {
    getState,
    getVisibleLeafColumns,
    options: {
      layoutMode,
      mantineDetailPanelProps,
      mantineTableBodyRowProps,
      renderDetailPanel,
    },
  } = table;
  const { isLoading } = getState();

  const tableRowProps = parseFromValuesOrFunc(mantineTableBodyRowProps, {
    isDetailPanel: true,
    row,
    staticRowIndex: rowIndex,
    table,
  });

  const tableCellProps = parseFromValuesOrFunc(mantineDetailPanelProps, {
    row,
    table,
  });

  const parentRowHeight = virtualRow
    ? parentRowRef.current?.getBoundingClientRect()?.height
    : 0;
  return (
    <Box
      component="tr"
      {...tableRowProps}
      __vars={{
        '--mrt-parent-row-height':
          virtualRow && parentRowHeight ? `${parentRowHeight}px` : undefined,
        '--mrt-virtual-row-start': virtualRow
          ? `${virtualRow.start}px`
          : undefined,
        ...tableRowProps?.__vars,
      }}
      className={clsx(
        'mantine-Table-tr-detail-panel',
        classes.root,
        layoutMode?.startsWith('grid') && classes['root-grid'],
        virtualRow && classes['root-virtual-row'],
        tableRowProps?.className,
      )}
    >
      <Box
        colSpan={getVisibleLeafColumns().length}
        component="td"
        {...tableCellProps}
        __vars={{
          '--mrt-inner-width': `${table.getTotalSize()}px`,
        }}
        className={clsx(
          'mantine-Table-td-detail-panel',
          classes.inner,
          layoutMode?.startsWith('grid') && classes['inner-grid'],
          row.getIsExpanded() && classes['inner-expanded'],
          virtualRow && classes['inner-virtual'],
        )}
        p={row.getIsExpanded() ? 'md' : 0}
      >
        {renderDetailPanel && (
          <Collapse in={row.getIsExpanded()}>
            {!isLoading && renderDetailPanel({ row, table })}
          </Collapse>
        )}
      </Box>
    </Box>
  );
};
