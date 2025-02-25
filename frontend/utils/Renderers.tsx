import { materialRenderers } from "@jsonforms/material-renderers";
import FileUploadRenderer from "./FileUploadRenderer";

export const renderers = [
    ...materialRenderers,
    { tester: () => 1, renderer: FileUploadRenderer } // Register the custom renderer
];