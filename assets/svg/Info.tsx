import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => {
  const { width = 16, height = 16, ...rest } = props;
  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Path
        fill="#3A4A61"
        d="M8 0c4.4 0 8 3.6 8 8 0 4.433-3.6 8-8 8a7.98 7.98 0 0 1-8-8c0-4.4 3.567-8 8-8Zm0 3.733c-.6 0-1.067.5-1.067 1.067 0 .6.467 1.067 1.067 1.067.567 0 1.067-.467 1.067-1.067 0-.567-.5-1.067-1.067-1.067Zm1.333 8.534a.79.79 0 0 0 .8-.8c0-.434-.366-.8-.8-.8H8.8V7.733c0-.433-.367-.8-.8-.8H6.933a.79.79 0 0 0-.8.8c0 .467.334.8.8.8H7.2v2.134h-.533a.79.79 0 0 0-.8.8c0 .466.333.8.8.8h2.666Z"
      />
    </Svg>
  );
};

const Info = memo(SvgComponent);
export default Info;
