import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => {
  const { width = 8, height = 12, ...rest } = props;
  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Path
        fill="#1E1E22"
        d="M7.102 5.398a.825.825 0 0 1 0 1.204l-5.137 5.137a.825.825 0 0 1-1.204 0 .825.825 0 0 1 0-1.204l4.522-4.548L.76 1.465A.825.825 0 0 1 .76.26a.825.825 0 0 1 1.204 0l5.137 5.137Z"
      />
    </Svg>
  );
};

const Arrow = memo(SvgComponent);

export default Arrow;
