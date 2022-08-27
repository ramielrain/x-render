import { ReloadOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTable } from '../hooks';

const ReloadIcon = () => {
  const { refresh }: any = useTable();
  const { t } = useTranslation();

  return (
    <Tooltip title={t("刷新")}>
      <ReloadOutlined onClick={() => refresh()} />
    </Tooltip>
  );
};

export default ReloadIcon;
