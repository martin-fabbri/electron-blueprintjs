import * as classNames from 'classnames';
import * as React from 'react';

export function createDefaultToolbarButton(
  title: string,
  className: string,
  onClick: (event: React.MouseEvent<any>) => any,
  text?: string,
): React.ReactElement<any> {
  return (
    <button
      title={title}
      onClick={onClick}
      className={classNames('mosaic-default-control bp3-button bp3-minimal', className)}
    >
      {text! && <span className="control-text">{text}</span>}
    </button>
  );
}

export interface MosaicButtonProps {
  onClick?: () => void;
}
