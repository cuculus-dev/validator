import {hello} from "../src";

describe('hello', () => {
    it('to be hello', () => {
        expect(hello()).toBe('hello');
    });
});
