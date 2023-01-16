import {Dispatch, SetStateAction} from "react";
import {PreviewState} from "./RulesSlider.types";

export function lazyLoadinSliderItem(event: React.UIEvent<HTMLElement>, dispatcher: Dispatch<SetStateAction<PreviewState>>) {
    const SLIDER_WIDTH: number = 1272;
    const target: HTMLElement = event.target as HTMLElement;
    const parentBlockSlider = target.closest('div[data-marker]');
    if (parentBlockSlider) {
        if (parentBlockSlider.scrollLeft + SLIDER_WIDTH === parentBlockSlider.scrollWidth) {
            dispatcher((prevState: PreviewState) => ({
                previewList: prevState.previewList,
                start: prevState.start + prevState.showItem,
                showItem: 15
            }))
        }

        if (parentBlockSlider.scrollLeft === 0) {
            dispatcher((prevState: PreviewState) => ({
                previewList: prevState.previewList,
                start: prevState.start - prevState.showItem < 0 ? 0 : prevState.start - prevState.showItem,
                showItem: 15
            }))
        }
    }
}