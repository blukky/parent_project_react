import { IEventSystem } from "../../../ts-common/events";
import { IFieldset } from "./fieldset";
import { IRadioButtonConfig } from "./radioGroup";
import { Label } from "./helper/label";
export declare enum RadioButtonEvents {
    beforeChange = "beforeChange",
    change = "change",
    focus = "focus",
    blur = "blur",
    keydown = "keydown",
    beforeHide = "beforeHide",
    afterHide = "afterHide",
    beforeShow = "beforeShow",
    afterShow = "afterShow"
}
export declare class RadioButton extends Label {
    parent: IFieldset;
    config: IRadioButtonConfig;
    events: IEventSystem<RadioButtonEvents>;
    protected _handlers: any;
    private _propsItem;
    private _props;
    constructor(container: HTMLElement | string, config?: {});
    destructor(): void;
    setProperties(propertyConfig: any): void;
    getProperties(): {};
    getValue(): string | void;
    setValue(checked: boolean): void;
    show(): void;
    hide(): void;
    isVisible(): boolean;
    focus(): void;
    blur(): void;
    disable(): void;
    enable(): void;
    isDisabled(): boolean;
    clear(): void;
    validate(): boolean;
    clearValidate(): void;
    protected _draw(): any;
}
