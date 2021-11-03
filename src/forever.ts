/**
 * @author WMXPY
 * @namespace Forever
 * @description Forever
 */

import { ForeverController } from "./controller";
import { ForeverMode } from "./declare";

export class Forever {

    public static once(
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.ONCE, controller);
    }

    private readonly _mode: ForeverMode;
    private readonly _controller: ForeverController;

    private constructor(mode: ForeverMode, controller: ForeverController) {

        this._mode = mode;
        this._controller = controller;
    }

    public get mode(): ForeverMode {
        return this._mode;
    }
    public get controller(): ForeverController {
        return this._controller;
    }
}
