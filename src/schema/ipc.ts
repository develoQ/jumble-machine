import { ConvertContents } from "../pages/convert/ConvertConfig";
import { Sample } from "../pages/design/DesignConfig";
import { FolderContents } from "../pages/design/LoadDesignData";
import { Data } from "./data";
import { DesignDataType } from "./design";
import { ExportData } from "./exportData";
import { PrepData } from "./prepData";

//TODO ipc毎に整理。returnTypeの設定
export type OperateIpc =
  | {
      ipc: "store";
      method: "get";
      arg: {
        name: string;
        key: string;
      };
    }
  | {
      ipc: "store";
      method: "set";
      arg: {
        name: string;
        key: string;
        value:
          | string
          | ExportData
          | PrepData
          | DesignDataType[]
          | Sample
          | number;
      };
    }
  | {
      ipc: "store";
      method: "has";
      arg: {
        name: string;
        key: string;
      };
    }
  | {
      ipc: "operateShowSave";
      method: "fileSave";
      arg: {
        data: Data[];
        fileName: string;
        extension: string;
      };
    }
  | {
      ipc: "operateShowOpen";
      method: "fileOpen";
      arg: {
        fileName: string;
        extension: string;
      };
    }
  | {
      ipc: "operateShowOpen";
      method: "getFolder";
      arg: {};
    }
  | {
      ipc: "operateShowOpen";
      method: "getFile";
      arg: {
        fileName: string;
        extension: string | string[];
      };
    }
  | {
      ipc: "operateShowOpen";
      method: "getFolderContents";
      arg: {};
    }
  | {
      ipc: "operateFastApi";
      method: "exportJson";
      arg: {
        projectId: number;
        folderPath: string;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "makeSample" | "jumble";
      arg: {
        projectId: number;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "factory";
      arg: {
        projectId: number;
        i: number;
        exportPath: string;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "adjustImage";
      arg: {
        projectId: number;
        name: string;
        tokenId: number;
        exportPath: string;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "saveImage";
      arg: {
        projectId: number;
        img: boolean;
        imgPath: string;
        ani: boolean;
        aniPath: string;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "convert";
      arg: { projectId: number } & ConvertContents;
    }
  | {
      ipc: "operateFastApi";
      method: "importJson";
      arg: {
        projectId: number;
        folderPath: string;
      };
    }
  | {
      ipc: "operateFastApi";
      method: "importExcel";
      arg: {
        projectId: number;
        filePath: string;
        sortList: string[];
      };
    }
  | {
      ipc: "operateFastApi";
      method: "exportData";
      arg: {
        projectId: number;
        sortList: string[];
        exportPath: string;
        export_format: "excel" | "csv";
      };
    };

export type ReturnOperateIpc = {
  status: boolean;
  response: string | string[] | FolderContents;
};

export type IpcStatus = "progress" | "success" | "error" | "stop";
