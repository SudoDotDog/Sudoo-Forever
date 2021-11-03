/**
 * @author WMXPY
 * @namespace Forever
 * @description Forever
 */

import { ForeverMode } from "./declare";

export class Forever {

    public static once(): Forever {
        return new Forever(ForeverMode.ONCE);
    }

    private readonly _mode: ForeverMode;

    private constructor(mode: ForeverMode) {

        this._mode = mode;
    }
}
