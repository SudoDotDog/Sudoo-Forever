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
    readonly count: number;
} | {

    readonly mode: FOREVER_MODE_OPTION.UNTIL;
    readonly shouldStop: () => boolean;
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
            count: times,
        });
    }

    public static until(shouldStop: () => boolean): ForeverMode {

        return new ForeverMode({
            mode: FOREVER_MODE_OPTION.UNTIL,
            shouldStop,
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
