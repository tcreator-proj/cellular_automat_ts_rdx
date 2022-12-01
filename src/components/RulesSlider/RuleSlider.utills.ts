import { Dispatch, SetStateAction } from "react";
import { PreviewState } from "./RulesSlider.types";

export function lazyLoadinSliderItem(event: React.UIEvent<HTMLElement>, dispatcher: Dispatch<SetStateAction<PreviewState>>) {
  const target: HTMLElement = event.target as HTMLElement;
    const parentBlockSlider = target.closest('div[data-marker]');
    if(parentBlockSlider) {
      if (parentBlockSlider.scrollLeft + 1272 === parentBlockSlider.scrollWidth) {
        dispatcher((prevState: any) => ({
          previewList: prevState.previewList,
          showItem: prevState.showItem + 15
        }))
      }
    }
}