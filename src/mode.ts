/**
 * @author WMXPY
 * @namespace Forever
 * @description Mode
 */

import { FOREVER_MODE_OPTION } from "./declare";

type ForeverModeOptions = {

    readonly mode: FOREVER_MODE_OPTION.ONCE;
} | {

    readonly mode: FOREVER_MODE_OPTION.REPEAT;
    readonly times: number;
} | {

    readonly mode: FOREVER_MODE_OPTION.UNTIL;
    readonly shouldContinue: () => boolean;
} | {

    readonly mode: FOREVER_MODE_OPTION.UNTIL_ASYNC;
    readonly shouldContinue: () => Promise<boolean>;
} | {

    readonly mode: FOREVER_MODE_OPTION.INFINITE;
};

export class ForeverMode {

    public static once(): ForeverMode {

        return new ForeverMode({
            mode: FOREVER_MODE_OPTION.ONCE,
        });
    }

    public static repeat(times: number): ForeverMode {

        return new ForeverMode({
            mode: FOREVER_MODE_OPTION.REPEAT,
            times,
        });
    }

    public static until(shouldContinue: () => boolean): ForeverMode {

        return new ForeverMode({
            mode: FOREVER_MODE_OPTION.UNTIL,
            shouldContinue,
        });
    }

    public static infinite(): ForeverMode {

        return new ForeverMode({
            mode: FOREVER_MODE_OPTION.INFINITE,
        });
    }

    private readonly _options: ForeverModeOptions;

    private constructor(options: ForeverModeOptions) {

        this._options = options;
    }

    public get option(): ForeverModeOptions {
        return this._options;
    }
}
