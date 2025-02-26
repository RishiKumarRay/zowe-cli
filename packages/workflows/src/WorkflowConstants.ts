/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { IMessageDefinition, apiErrorHeader } from "@zowe/imperative";

/**
 * Constants for workflow related APIs.
 * @export
 * @class WorkflowConstants
 */
export class WorkflowConstants {

    /**
     * URI base for workflow API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly RESOURCE: string = "/zosmf/workflow/rest";

    /**
     * URI base for workflows API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly WORKFLOW_DEFINITION: string = "workflowDefinition";

    /**
     * URI base for workflows API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly WORKFLOW_RESOURCE: string = "workflows";

    /**
     * URI base for workflows API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly ARCH_WORKFLOW_RESOURCE: string = "archivedworkflows";

    /**
     * URI base for starting workflow API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly START_WORKFLOW: string = "operations/start";

    /**
     * URI base for archiving workflow API
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly ARCHIVE_WORKFLOW: string = "operations/archive";

    /**
     * URI base for canceling workflow API.
     *
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly CANCEL_WORKFLOW: string = "operations/cancel";

    /**
     * URI base for list workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly LIST_WORKFLOWS: string = "operations/list";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly category: string = "category";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly system: string = "system";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly owner: string = "owner";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly vendor: string = "vendor";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly statusName: string = "statusName";

    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly workflowKey: string = "workflowKey";
    /**
     * URI base for filter workflows from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly workflowName: string = "workflowName";

    /**
     * URI base for filtering workflow by name API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly WF_NAME: string = "workflowName";

    /**
     * Version of the z/OSMF
     * @static
     * @type {string}
     * @memberOf WorkflowConstants
     */
    public static readonly ZOSMF_VERSION: string = "1.0";

    /**
     * URI base for returnData for workflow properties from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly returnData: string = "returnData";

    /**
     * URI base for steps for workflow properties from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly steps: string = "steps";

    /**
     * URI base for variables for workflow properties from registry API.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly variables: string = "variables";

    /**
     * URI base for filePath for workflow definition.
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly filePath: string = "definitionFilePath";

    /**
     * Default path for uploading temporary files
     * @static
     * @type {string}
     * @memberof WorkflowConstants
     */
    public static readonly tempPath: string = "/tmp";

}

/**
 * Error message that no workflow key string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noWorkflowKey: IMessageDefinition = {
    message: apiErrorHeader.message + ` No workflow key parameter was supplied.`
};

/**
 * Error message that workflow key that was supplied does not exist.
 * IZUWF5001W: The workflow key "workflowkey" was not found.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const WrongWorkflowKey: IMessageDefinition = {
    message: "IZUWF5001W"
};

/**
 * Error message that no steps parameter was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noSteps: IMessageDefinition = {
    message: apiErrorHeader.message + ` No steps parameter was supplied.`
};

/**
 * Error message that no variables parameter was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noVariables: IMessageDefinition = {
    message: apiErrorHeader.message + ` No variables parameter was supplied.`
};

/**
 * Error message that no workflow definition file parameter string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noWorkflowDefinitionFile: IMessageDefinition = {
    message: apiErrorHeader.message + ` No workflow definition file parameter was supplied.`
};
/**
 * Error message that no workflow name parameter string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noWorkflowName: IMessageDefinition = {
    message: apiErrorHeader.message + ` No workflow name parameter was supplied.`
};
/**
 * Error message that no system name parameter string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noSystemName: IMessageDefinition = {
    message: apiErrorHeader.message + ` No system name parameter was supplied.`
};

/**
 * Error message that no system name parameter string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const wrongString: IMessageDefinition = {
    message: apiErrorHeader.message + ` Parameter contains wrong character - & or ?.`
};
/**
 * Error message that no owner parameter string was supplied.
 * @static
 * @type {IMessageDefinition}
 * @memberof WorkflowConstants
 */
export const noOwner: IMessageDefinition = {
    message: apiErrorHeader.message + ` No owner parameter was supplied.`
};
export const wrongOwner: IMessageDefinition = {
    message: apiErrorHeader.message + ` Wrong format of user ID supplied.`
};
