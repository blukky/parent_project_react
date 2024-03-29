import { IEventSystem } from "../../ts-common/events";
export interface IColorpicker {
    events: IEventSystem<ColorpickerEvents>;
    paint(): void;
    destructor(): void;
    clear(): void;
    setCustomColors(customColors: string[]): void;
    setValue(value: string): void;
    setCurrentMode(view: ViewsMode): void;
    setFocus(value: string): void;
    getCustomColors(): string[];
    getValue(): string;
    getCurrentMode(): ViewsMode;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    getView(): ViewsMode;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    setView(view: ViewsMode): void;
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    focusValue(value: string): void;
}
export interface IColorpickerConfig {
    css?: string;
    grayShades?: boolean;
    customColors?: string[];
    palette?: string[][];
    width?: string | number;
    mode?: ViewsMode;
    pickerOnly?: boolean;
    paletteOnly?: boolean;
    transparency?: boolean;
}
export declare enum ColorpickerEvents {
    beforeChange = "beforeChange",
    change = "change",
    apply = "apply",
    cancelClick = "cancelClick",
    modeChange = "modeChange",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    selectClick = "selectClick",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    colorChange = "colorChange",
    /** @deprecated See a documentation: https://docs.dhtmlx.com/ */
    viewChange = "viewChange"
}
export interface IEventHandlersMap {
    [key: string]: (...args: any[]) => any;
    [ColorpickerEvents.beforeChange]: (color: string) => boolean | void;
    [ColorpickerEvents.change]: (color: string, mode?: "clear") => void;
    [ColorpickerEvents.apply]: () => void;
    [ColorpickerEvents.cancelClick]: () => void;
    [ColorpickerEvents.modeChange]: (view: ViewsMode) => void;
    [ColorpickerEvents.selectClick]: () => void;
    [ColorpickerEvents.colorChange]: (color: string) => void;
    [ColorpickerEvents.viewChange]: (view: ViewsMode) => void;
}
export interface IHSV {
    h: number;
    s: number;
    v: number;
}
export interface IPickerState {
    hsv: IHSV;
    customHex: string;
    alpha: number;
    background?: string;
    hueRangeLeft?: number;
    alphaRangeLeft?: number;
}
export type ViewsMode = "palette" | "picker";
