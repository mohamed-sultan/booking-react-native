import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => {
  const { width = 120, height = 120, ...rest } = props;

  return (
    <Svg width={width} height={height} viewBox="0 0 120 120" fill="none" {...rest}>
      <Rect x={0} y={0} width={120} height={120} fill="#03B57C" rx={60} />
      <Path
        fill="#fff"
        d="M86.758 41.217c1.623 1.498 1.623 4.118 0 5.616l-31.95 31.95c-1.498 1.623-4.118 1.623-5.616 0L33.217 62.808c-1.623-1.498-1.623-4.118 0-5.616 1.498-1.623 4.118-1.623 5.616 0l13.23 13.104 29.079-29.08c1.498-1.622 4.118-1.622 5.616 0Z"
        transform="scale(1)" // no scaling, already fits within 120x120
      />
    </Svg>
  );
};

const Confirmed = memo(SvgComponent);
export default Confirmed;
