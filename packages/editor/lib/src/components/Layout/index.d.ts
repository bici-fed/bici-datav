import React from "react";
import { Topology } from "@bici-topology/core";
import { DataVEditorProps } from "../data/defines";
export declare let canvas: Topology;
/**
 * 编辑器画布
 * @param history
 * @constructor
 */
export declare const EditorLayout: React.ForwardRefExoticComponent<Pick<DataVEditorProps, "key" | "history" | "token" | "onPreview" | "onExtraSetting" | "onEditorSaveCb" | "onPoweroff" | "autoSaveInterval" | "apiURL" | "selfIndustrialLibrary" | "preInstallBgImages" | "editorData" | "boardData" | "industrialLibrary" | "uploadConfig" | "websocketConf" | "onAddDataPoint" | "onAddVedioSource" | "dataPointPropsMap"> & React.RefAttributes<unknown>>;
