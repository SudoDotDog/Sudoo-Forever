/**
 * @author WMXPY
 * @namespace Forever
 * @description Forever
 * @override Integrate
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { Forever } from '../../src';

describe('Given (Forever) Scenario', (): void => {

    const chance: Chance.Chance = new Chance('integrate-forever-forever');

    it('should be able to execute once', (): void => {

        const forever: Forever = Forever.once();

        expect(forever.shouldExecute()).to.be.true;

        forever.emitExecution();

        expect(forever.shouldExecute()).to.be.false;
    });

    it('should be able to execute multiple times', (): void => {

        const forever: Forever = Forever.repeat(2);

        expect(forever.shouldExecute()).to.be.true;
        forever.emitExecution();
        expect(forever.shouldExecute()).to.be.true;
        forever.emitExecution();
        expect(forever.shouldExecute()).to.be.false;
    });

    it('should be able to execute with condition', (): void => {

        let condition: boolean = false;

        const forever: Forever = Forever.until(() => condition);
        expect(forever.shouldExecute()).to.be.false;

        condition = true;
        expect(forever.shouldExecute()).to.be.true;
    });
});
