import * as React from 'react';
import Svg, { SvgProps, Rect, Path } from 'react-native-svg';
import { memo } from 'react';

const SvgComponent = (props: SvgProps) => {
  const { width = 90, height = 89, ...rest } = props;

  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Rect width={90} height={89} fill="#03B57C" rx={44.5} />
      <Path
        fill="#fff"
        d="M86.758 41.217c1.623 1.498 1.623 4.118 0 5.616l-31.95 31.95c-1.498 1.623-4.118 1.623-5.616 0L33.217 62.808c-1.623-1.498-1.623-4.118 0-5.616 1.498-1.623 4.118-1.623 5.616 0l13.23 13.104 29.079-29.08c1.498-1.622 4.118-1.622 5.616 0Z"
        scale={0.75} // scales the path proportionally (optional)
      />
    </Svg>
  );
};

const Confirmed = memo(SvgComponent);
export default Confirmed;
