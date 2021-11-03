/**
 * @author WMXPY
 * @namespace Forever
 * @description Declare
 */

export enum ForeverMode {

    ONCE = 'ONCE',
}

export type ForeverAbortFunction = () => void;
export type ForeverResumeFunction = () => void;
