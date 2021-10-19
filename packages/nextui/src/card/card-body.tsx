import React from 'react';
import useTheme from '../use-theme';
import withDefaults from '../utils/with-defaults';

interface Props {
  className?: string;
}

const defaultProps = {
  className: ''
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;
export type CardContentProps = Props & typeof defaultProps & NativeAttrs;

const CardContent: React.FC<React.PropsWithChildren<CardContentProps>> = ({
  className,
  children,
  ...props
}) => {
  const theme = useTheme();

  return (
    <div className={`content ${className}`} {...props}>
      {children}
      <style jsx>{`
        .content {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          padding: ${theme.layout.gapHalf} calc(${theme.layout.gap} + 0.25rem);
          overflow-y: auto;
          position: relative;
          text-align: left;
        }
        .content > :global(*:first-child) {
          margin-top: 0;
        }
        .content > :global(*:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

const MemoCardContent = React.memo(CardContent);

export default withDefaults(MemoCardContent, defaultProps);