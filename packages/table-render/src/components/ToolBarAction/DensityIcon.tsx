import { ColumnHeightOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Tooltip } from 'antd';
import React, { useRef } from 'react';
import { useTable } from '../hooks';
import { useTranslation } from 'react-i18next';
export type DensitySize = 'middle' | 'small' | 'default' | undefined;

const DesityIcon = () => {
  const { tableState, setTable }: any = useTable();
  const dropRef = useRef<any>(); // class组件用 React.createRef()
  const { t } = useTranslation()

  return (
    <div ref={dropRef}>
      <Dropdown
        getPopupContainer={() => dropRef.current}
        overlay={
          <Menu
            selectedKeys={[tableState.tableSize]}
            onClick={({ key }) => {
              setTable({ tableSize: key as DensitySize });
            }}
            style={{
              width: 80,
            }}
          >
            <Menu.Item key="default">{t("默认")}</Menu.Item>
            <Menu.Item key="middle">{t("中等")}</Menu.Item>
            <Menu.Item key="small">{t("紧凑")}</Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <Tooltip title={t("表格密度")}>
          <ColumnHeightOutlined />
        </Tooltip>
      </Dropdown>
    </div>
  );
};

export default DesityIcon;
