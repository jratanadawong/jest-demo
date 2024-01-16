import { describe, expect, test } from "@jest/globals";
import { callback, fetchCapitals, fetchCountries, fetchData, fetchPromise } from "../src";

// You shouldn't need to modify anything in the `src` directory to make these tests pass

// Someone miswrote the test below; make this test pass
test('1. true should be true', () => {
    expect(true).toBe(false);
});

// This test is failing. Make it pass using a modifier
test('2. true should NOT be false', () => {
    expect(true).toBe(false);
});

// Let's practice some regex. How would you match the following?
test('3. foobar should contain foo', () => {
    const regex = /foo/;
    // What do you need to change below to make sure they match?
    expect("foobar").toBe(regex);
});

// How do we ensure that an array contains a value?
test('4. Buttercup is a PowerPuff Girl', () => {
    const powerPuffGirls = [
        "Buttercup",
        "Blossom",
        "Bubbles"
    ];
    // What matcher do you use below to find out if an array contains a value?
    expect(powerPuffGirls).toBe("Buttercup");
});

// How would you test a promise?
test('5. fetchPromise', () => {
    const expectMatch = (data) => expect(data).toBe('promise fetched!');
    // HINT: You'll need to wrap the below in a .then() method after the `fetchPromise` promise resolves
    expectMatch(data);
});

// What's wrong with the below? There's two problems you'll need to fix. Can you think of a different way to solve this problem?
test('6. fetchData should fetch data', () => { //
    const data = fetchData(); //
    expect(data).toBe('data fetched!');
});
// For bonus points, how would you test the above using modifiers?
// test('6b. fetchData should fetch data, but with a modifier', () => {   
// });

// How would you call a callback in Jest without breaking everything?
// what goes at the `!`? How does that impact the rest of the test?
test('7. callbacks should work', (/*!*/) => {
    expect(data).toBe("success");
    callback(cb);
});

// Do you remember `describe`? Reorganize the following tests into the describe groups below so that they all pass.
test('Canada should be a country', () => expect(countriesOrCapitals).toContain('Canada'));
test('Japan should be a country', () => expect(countriesOrCapitals).toContain('Japan'));
test('Rome should be a capital', () => expect(countriesOrCapitals).toContain('Rome'));
test('Tokyo should be a capital', () => expect(countriesOrCapitals).toContain('Tokyo'));
test('US should be a country', () => expect(countriesOrCapitals).toContain('US'));
test('Nigeria should be a country', () => expect(countriesOrCapitals).toContain('Nigeria'));
test('Madrid should be a capital', () => expect(countriesOrCapitals).toContain('Madrid'));
test('Ottawa should be a capital', () => expect(countriesOrCapitals).toContain('Ottawa'));
test('Spain should be a country', () => expect(countriesOrCapitals).toContain('Spain'));
test('Italy should be a country', () => expect(countriesOrCapitals).toContain('Italy'));
test('Washington should be a capital', () => expect(countriesOrCapitals).toContain('Washington'));
test('Abuja should be a capital', () => expect(countriesOrCapitals).toContain('Abuja'));

describe('8. Countries and capitals', () => {
    let countriesOrCapitals = ['notEmpty'];
    describe('a) countries', () => {
        beforeAll(() => {
            return fetchCountries().then(fetchedCountries => {
                countriesOrCapitals = fetchedCountries;
            });
        });
        afterAll(() => {
            // Clear the countriesOrCapitals array
        });

        // tests go here
    });
    describe('b) capitals', () => {
        beforeAll(() => {
            // fetch the capitals with the 'fetchCapitals' method for use in our tests
        });
        afterAll(() => {
            // Clear the countriesOrCapitals array
        });

        // tests go here
    });
    describe('c) confirm afterAll is working', () => {
        test('countriesOrCapitals should be empty', () => expect(countriesOrCapitals).toEqual([]));
    });
});