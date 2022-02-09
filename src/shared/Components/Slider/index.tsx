import { memo, VFC } from "react";
import { StyledRange, StyledSlider, StyledThumb, StyledTrack } from "./styles";
import * as SliderPrimitive from "@radix-ui/react-slider";

type SliderProps = SliderPrimitive.SliderProps;

export const Slider: VFC<SliderProps> = memo((props) => {
  const value = props?.value || props.defaultValue || [0];

  return (
    <StyledSlider {...props}>
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      {value.map((_, i: number) => (
        <StyledThumb key={i}>{value}</StyledThumb>
      ))}
    </StyledSlider>
  );
});
