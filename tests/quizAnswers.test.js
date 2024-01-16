import { describe, expect, test } from "@jest/globals";
import { callback, fetchCapitals, fetchCountries, fetchData, fetchPromise } from "../src";

// Only look here after you've tried to answer the quiz on your own!
// You shouldn't need to modify anything in the `src` directory to make these tests pass

test('1. true should be true', () => {
    expect(true).toBe(true);
});

test('2. true should NOT be false', () => {
    expect(true).not.toBe(false);
});

test('3. foobar should contain foo', () => {
    const regex = /foo/;
    expect("foobar").toMatch(regex);
});

test('4. Buttercup is a PowerPuff Girl', () => {
    const powerPuffGirls = [
        "Buttercup",
        "Blossom",
        "Bubbles"
    ];
    expect(powerPuffGirls).toContain("Buttercup");
});

test('5. fetchPromise', () => {
    const expectMatch = (data) => expect(data).toBe('promise fetched!');
    return fetchPromise.then((data) => expectMatch(data));
});

test('6. fetchData should fetch data', async () => {
    const data = await fetchData();
    expect(data).toBe('data fetched!');
});

test('6b. fetchData should fetch data, but with a modifier', () => {   
    return expect(fetchData()).resolves.toBe('data fetched!');
});

test('7. callbacks should work', (done) => {
    const cb = (error, data) => {
        try {
            expect(data).toBe("success");
            done();
        } catch (err) {
            done(err);
        }
    };

    callback(cb);
});

describe('8. Countries and capitals', () => {
    let countriesOrCapitals = ['notEmpty'];
    describe('a) countries', () => {
        beforeAll(() => {
            return fetchCountries().then(fetchedCountries => {
                countriesOrCapitals = fetchedCountries;
            });
        });
        afterAll(() => {
            countriesOrCapitals = [];
        });
        
        // tests go here
        test('Canada should be a country', () => expect(countriesOrCapitals).toContain('Canada'));
        test('Japan should be a country', () => expect(countriesOrCapitals).toContain('Japan'));
        test('US should be a country', () => expect(countriesOrCapitals).toContain('US'));
        test('Nigeria should be a country', () => expect(countriesOrCapitals).toContain('Nigeria'));
        test('Spain should be a country', () => expect(countriesOrCapitals).toContain('Spain'));
        test('Italy should be a country', () => expect(countriesOrCapitals).toContain('Italy'));
    });
    describe('b) capitals', () => {
        beforeAll(() => {
            return fetchCapitals().then(fetchedCapitals => {
                countriesOrCapitals = fetchedCapitals;
            });
        });
        afterAll(() => {
            countriesOrCapitals = [];
        });

        // tests go here
        test('Rome should be a capital', () => expect(countriesOrCapitals).toContain('Rome'));
        test('Tokyo should be a capital', () => expect(countriesOrCapitals).toContain('Tokyo'));
        test('Madrid should be a capital', () => expect(countriesOrCapitals).toContain('Madrid'));
        test('Ottawa should be a capital', () => expect(countriesOrCapitals).toContain('Ottawa'));
        test('Washington should be a capital', () => expect(countriesOrCapitals).toContain('Washington'));
        test('Abuja should be a capital', () => expect(countriesOrCapitals).toContain('Abuja'));
    });
    describe('c) confirm afterAll is working', () => {
        test('countriesOrCapitals should be empty', () => expect(countriesOrCapitals).toEqual([]));
    });
});