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

import { ICommandHandler, IHandlerParameters } from "../../../../cmd";
import { Constants } from "../../../../constants";
import { Logger } from "../../../../Logger";
import { ZosmfSession } from "../../../zosmf";

/**
 * This class is used by the auth command handlers as the base class for their implementation.
 */
export class ApimlAuthHandler extends BaseAuthHandler {
    protected mProfileType: string = "base";

    /**
     * The session creating from the command line arguments / profile
     */
    protected mSession: AbstractSession;

    /**
     * This is called by the {@link ZosFilesBaseHandler#process} after it creates a session. Should
     * be used so that every class under files does not have to instantiate the session object.
     *
     * @param {IHandlerParameters} commandParameters Command parameters sent to the handler.
     * @param {AbstractSession} session The session object generated from the zosmf profile.
     * @param {IProfile} zosmfProfile The zosmf profile that was loaded for the command.
     *
     * @returns {Promise<IZosFilesResponse>} The response from the underlying zos-files api call.
     */
    public createSessCfgFromArgs(args: ICommandArguments): ISession {
        return ZosmfSession.createSessCfgFromArgs(args);
    }

    public async doLogin(session: ISession) {
        return Login.login(this.mSession, "POST", LoginConstants.APIML_V1_RESOURCE);
    };

    public async doLogout(session: ISession) {
        /* Not implemented yet */
    };
}
