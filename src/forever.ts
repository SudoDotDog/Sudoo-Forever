/**
 * @author WMXPY
 * @namespace Forever
 * @description Forever
 */

import { ForeverController } from "./controller";
import { FOREVER_MODE_OPTION } from "./declare";
import { ForeverMode } from "./mode";

export class Forever {

    public static once(
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.once(), controller);
    }

    public static repeat(
        times: number,
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.repeat(times), controller);
    }

    public static until(
        shouldStop: () => boolean,
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.until(shouldStop), controller);
    }

    public static infinite(
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.infinite(), controller);
    }

    private readonly _mode: ForeverMode;
    private readonly _controller: ForeverController;

    private constructor(mode: ForeverMode, controller: ForeverController) {

        this._mode = mode;
        this._controller = controller;
    }

    public get mode(): FOREVER_MODE_OPTION {
        return this._mode.option.mode;
    }
    public get controller(): ForeverController {
        return this._controller;
    }

    public is(mode: FOREVER_MODE_OPTION): boolean {
        return this.mode === mode;
    }
}
