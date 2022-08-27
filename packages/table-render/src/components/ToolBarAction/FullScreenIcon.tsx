import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons';
import { message, Tooltip } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FullScreenIcon = props => {
  const [isFullScreen, setFullScreen] = useState(false);
  const { fullScreen } = props;
  const { t } = useTranslation();

  return isFullScreen ? (
    <Tooltip title={t("退出全屏")}>
      <FullscreenExitOutlined
        onClick={() => {
          document.exitFullscreen();
          setFullScreen(false);
        }}
      />
    </Tooltip>
  ) : (
    <Tooltip title={t("全屏")}>
      <FullscreenOutlined
        onClick={() => {
          if (!document.fullscreenEnabled) {
            message.warning(t('当前页面不支持全屏功能'));
            return;
          }
          if (!document.fullscreenElement) {
            setFullScreen(true);
            fullScreen().catch((err: any) => message.error(err.message));
          }
        }}
      />
    </Tooltip>
  );
};

export default FullScreenIcon;
