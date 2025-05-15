import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => {
  const { width = 40, height = 40, color = '#1E1E22', ...rest } = props;
  return (
    <Svg width={width} height={height} fill="none" {...rest}>
      <Path
        fill={color}
        fillOpacity={0.05}
        d="M0 12C0 5.373 5.373 0 12 0h16c6.627 0 12 5.373 12 12v16c0 6.627-5.373 12-12 12H12C5.373 40 0 34.627 0 28V12Z"
      />
      <Path
        fill={color}
        fillRule="evenodd"
        d="M25.637 25.637a1.109 1.109 0 0 1-1.646-.006l-3.974-3.974-4.008 3.975a1.108 1.108 0 0 1-1.646.005 1.108 1.108 0 0 1 .005-1.646l3.975-4.008-3.974-3.974a1.108 1.108 0 0 1-.006-1.646 1.108 1.108 0 0 1 1.646.005l4.008 3.975 3.974-3.974a1.109 1.109 0 0 1 1.646-.006c.486.45.484 1.198-.006 1.646l-3.974 3.974 3.975 4.008c.489.448.49 1.196.005 1.646Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
const Button = memo(SvgComponent);
export default Button;
