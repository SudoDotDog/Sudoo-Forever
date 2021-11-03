/**
 * @author WMXPY
 * @namespace Forever
 * @description Declare
 */

export enum FOREVER_MODE_OPTION {

    ONCE = 'ONCE',
    REPEAT = 'REPEAT',
    UNTIL = 'UNTIL',
    INFINITE = 'INFINITE',
}

export type ForeverAbortFunction = () => void;
export type ForeverResumeFunction = () => void;
