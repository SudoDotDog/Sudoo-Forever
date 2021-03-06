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
        shouldContinue: () => boolean,
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.until(shouldContinue), controller);
    }

    public static infinite(
        controller: ForeverController = ForeverController.create(),
    ): Forever {

        return new Forever(ForeverMode.infinite(), controller);
    }

    private readonly _mode: ForeverMode;
    private readonly _controller: ForeverController;

    private _currentInterval: number;

    private constructor(mode: ForeverMode, controller: ForeverController) {

        this._mode = mode;
        this._controller = controller;

        this._currentInterval = 0;
    }

    public get mode(): FOREVER_MODE_OPTION {
        return this._mode.option.mode;
    }
    public get controller(): ForeverController {
        return this._controller;
    }

    public get intervals(): number {
        return this._currentInterval;
    }

    public is(mode: FOREVER_MODE_OPTION): boolean {
        return this._mode.option.mode === mode;
    }

    public shouldExecute(): boolean {

        if (!this._shouldExecuteController()) {
            return false;
        }

        if (this._mode.option.mode === FOREVER_MODE_OPTION.UNTIL_ASYNC) {
            throw new Error('[Sudoo-Forever] Can not cast for async mode');
        }

        return this._shouldExecuteBase();
    }

    public async shouldExecuteAsync(): Promise<boolean> {

        if (!this._shouldExecuteController()) {
            return await Promise.resolve(false);
        }

        if (this._mode.option.mode === FOREVER_MODE_OPTION.UNTIL_ASYNC) {
            return await this._mode.option.shouldContinue();
        }

        return await Promise.resolve(this._shouldExecuteBase());
    }

    public reset(): void {

        this._currentInterval = 0;
    }

    public emitExecution(times: number = 1): void {

        this._currentInterval = this._currentInterval + times;
    }

    public emitAbort(): void {

        this._controller.abort();
    }

    public emitResume(): void {

        this._controller.resume();
    }

    private _shouldExecuteController(): boolean {

        if (this._controller.shouldContinue) {
            return true;
        }
        return false;
    }

    private _shouldExecuteBase(): boolean {

        if (this._mode.option.mode === FOREVER_MODE_OPTION.ONCE) {
            return this._currentInterval === 0;
        }

        if (this._mode.option.mode === FOREVER_MODE_OPTION.REPEAT) {
            return this._currentInterval < this._mode.option.times;
        }

        if (this._mode.option.mode === FOREVER_MODE_OPTION.UNTIL) {
            return this._mode.option.shouldContinue();
        }

        if (this._mode.option.mode === FOREVER_MODE_OPTION.INFINITE) {
            return true;
        }

        return false;
    }
}
