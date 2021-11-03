/**
 * @author WMXPY
 * @namespace Forever
 * @description Declare
 */

export enum FOREVER_MODE_OPTION {

    ONCE = 'ONCE',
    REPEAT = 'REPEAT',
    UNTIL = 'UNTIL',
    UNTIL_ASYNC = 'UNTIL_ASYNC',
    INFINITE = 'INFINITE',
}

export type ForeverAbortFunction = () => void;
export type ForeverResumeFunction = () => void;
