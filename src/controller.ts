/**
 * @author WMXPY
 * @namespace Forever
 * @description Controller
 */

import { ForeverAbortFunction, ForeverResumeFunction } from "./declare";

export class ForeverController {

    public static create(): ForeverController {

        return new ForeverController();
    }

    private readonly _abortFunctions: Set<ForeverAbortFunction>;
    private readonly _resumeFunctions: Set<ForeverResumeFunction>;

    private _aborted: boolean = false;

    private constructor() {

        this._abortFunctions = new Set();
        this._resumeFunctions = new Set();
    }

    public get aborted(): boolean {
        return this._aborted === true;
    }
    public get shouldContinue(): boolean {
        return this._aborted === false;
    }
    public get shouldStop(): boolean {
        return this._aborted === true;
    }

    public get abortFunctions(): ForeverAbortFunction[] {
        return Array.from(this._abortFunctions);
    }
    public get resumeFunctions(): ForeverResumeFunction[] {
        return Array.from(this._resumeFunctions);
    }

    public addAbortListener(abortFunction: ForeverAbortFunction): void {

        this._abortFunctions.add(abortFunction);
    }

    public removeAbortListener(abortFunction: ForeverAbortFunction): void {

        this._abortFunctions.delete(abortFunction);
    }

    public addResumeListener(resumeFunction: ForeverResumeFunction): void {

        this._resumeFunctions.add(resumeFunction);
    }

    public removeResumeListener(resumeFunction: ForeverResumeFunction): void {

        this._resumeFunctions.delete(resumeFunction);
    }

    public abort(): void {

        if (this._aborted === true) {
            return;
        }

        this._aborted = true;

        for (const abortFunction of this._abortFunctions) {
            abortFunction();
        }
    }

    public resume(): void {

        if (this._aborted === false) {
            return;
        }

        this._aborted = false;

        for (const resumeFunction of this._resumeFunctions) {
            resumeFunction();
        }
    }
}
