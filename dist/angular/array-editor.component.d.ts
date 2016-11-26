/// <reference types="highlight.js" />
/// <reference types="dragula" />
import { EventEmitter, ElementRef } from "@angular/core";
import * as common from "../common";
import * as dragula from "dragula";
import { hljs } from "../lib";
export declare class ArrayEditorComponent {
    schema: common.ArraySchema;
    initialValue: common.ValueType[];
    title?: string;
    updateValue: EventEmitter<{
        value: common.ValueType[] | undefined;
        isValid: boolean;
    }>;
    theme: common.Theme;
    icon: common.Icon;
    locale: common.Locale;
    onDelete: EventEmitter<{}>;
    readonly?: boolean;
    required?: boolean;
    hasDeleteButton: boolean;
    md?: any;
    hljs?: typeof hljs;
    forceHttps?: boolean;
    drakContainer: ElementRef;
    renderSwitch: number;
    collapsed: boolean;
    value?: common.ValueType[];
    drak: dragula.Drake;
    errorMessage: string;
    buttonGroupStyleString: string;
    invalidIndexes: number[];
    getValue(): common.ValueType[];
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    trackByFunction: (index: number, value: common.ValueType) => number;
    collapseOrExpand: () => void;
    toggleOptional: () => void;
    validate(): void;
    addItem(): void;
    hasDeleteButtonFunction(): boolean;
    onDeleteFunction(i: number): void;
    onChange(i: number, {value, isValid}: common.ValidityValue<common.ValueType>): void;
}
