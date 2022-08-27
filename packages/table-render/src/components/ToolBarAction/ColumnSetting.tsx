import { SettingOutlined } from '@ant-design/icons';
import { Popover, Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ColumnSetting = props => {
  const { t } = useTranslation();
  return (
    <Popover
      arrowPointAtCenter
      title={t("列设置")}
      trigger="click"
      placement="bottomRight"
      content={t("列设置")}
    >
      <Tooltip title={t("列设置")}>
        <SettingOutlined />
      </Tooltip>
    </Popover>
  );
};
export default ColumnSetting;
