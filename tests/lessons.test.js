import { expect, test } from "@jest/globals";
import { callback, fetchCapitals, fetchCountries, fetchData, fetchPromise } from "../src";

// 1. let's learn about `expect`
// ----------------------------------------------------
test('make sure jest is properly configured', () => {
    expect(false);
});

// 2. Let's write a test that expects matching values using `toBe(value)`
// ----------------------------------------------------
// test('values should match', () => {

// });

// 3. Let's try making sure those values _don't_ match using a modifier
// ----------------------------------------------------
// test('values should NOT match', () => {

// });

// 4. We can also use regex with the `toMatch` matcher
// ----------------------------------------------------
// test('There\'s no "I" in team', () => {
//     expect('team').not.toMatch(/I/);
// });


// 5. We can iterate over arrays and check to see if it contains a value using the `toContain` matcher
// ----------------------------------------------------
// test('Leonardo is a Ninja Turtle', () => {
//     const ninjaTurtles = [
//         "Leonardo",
//         "Raphael",
//         "Michaelangelo",
//         "Donatello"
//     ];

//     expect(ninjaTurtles).toContain('Leonardo');
// });

// 6. Jest also handles promises
// ----------------------------------------------------
// test('fetchPromise should fetch promise', () => {
//     return fetchPromise.then((data) => {
//         expect(data).toBe('promise fetched!');
//     });
// });

// 7. Jest also supports async/await
// ----------------------------------------------------
// test('fetchData should fetch data', async () => {
//     const data = await fetchData();
//     expect(data).toBe('data fetched!');
// });

// 8. Alternatively, you can use the modifiers .resolves/.rejects as well
// ----------------------------------------------------
// test('fetchData should fetch data', () => {
//     return expect(fetchData()).resolves.toBe('data fetched!');
// });

// 9. Jest supports callbacks, but it's a little different
// ----------------------------------------------------
// test('callback should return correct value', done => {
//     const cb = (error, data) => {
//         try {
//             expect(data).toBe("success");
//             done();
//         } catch (err) {
//             done(err);
//         }
//     };

//     callback(cb);
// });

// 10. `describe` lets you scope out your tests into meaningful groups
// ----------------------------------------------------
// describe('expected is true', () => {
//     const expected = true;
//     test('example test 1', () => expect(expected).toBe(true));
//     test('example test 2', () => expect(expected).toBe(true));
//     test('example test 3', () => expect(expected).toBe(true));
// });

// describe('expected is false', () => {
//     const expected = false;
//     test('example test 1', () => expect(expected).toBe(false));
//     test('example test 2', () => expect(expected).toBe(false));
//     test('example test 3', () => expect(expected).toBe(false));
// });


// 11. Jest helps with repeated tasks using beforeEach and afterEach
// ----------------------------------------------------
// describe('beforeEach/afterEach example', () => {
//     let countries = [];
//     let selectedCountries = [];
//     const selectCountry = (selected) => selectedCountries.push(selected);

//     beforeEach(() => {
//         // fetch countries
//         return fetchCountries().then( fetchedCountries => {
//             countries = fetchedCountries;
//         });
//     });
//     afterEach(() => {
//         // reset countries
//         countries = [];
//         selectedCountries = [];
//     });
//     test('Canada is a country', () => {
//         expect(countries).toContain('Canada');
//     });
//     test('selecting a country should add it to selectedCountries', () => {
//         selectCountry(countries[3]);
//         expect(selectedCountries).toContain('Italy');
//     });
//     test('afterEach should reset our selectedCountries, so it should be empty', () => {
//         expect(selectedCountries).toEqual([]);
//     });
// });


// 12. It also lets you do one-time setup using beforeAll and afterAll
// ----------------------------------------------------
// describe('beforeAll/afterAll example', () => {
//     let capitals = [];
//     let selectedCapitals = [];
//     const selectCapital = (selected) => selectedCapitals.push(selected);

//     beforeAll(() => {
//         // fetch capitals
//         return fetchCapitals().then( fetchedCapitals => {
//             capitals = fetchedCapitals;
//         });
//     });
//     afterAll(() => {
//         // reset selectedCapitals
//         capitals = [];
//         selectedCapitals = [];
//     });
//     test('Ottawa is a capital', () => {
//         expect(capitals).toContain('Ottawa');
//     });
//     test('selecting a capital should add it to selectedCapitals', () => {
//         selectCapital(capitals[5]);
//         expect(selectedCapitals).toContain('Abuja');
//     });
//     test('selecting an additional capital adds it to selectedCapitals without overwriting the previous one', () => {
//         selectCapital(capitals[4]);
//         expect(selectedCapitals).toHaveLength(2);
//         expect(selectedCapitals).toContain('Madrid');
//         expect(selectedCapitals).toContain('Abuja');
//     });
// });

// 13. Mocks
// ----------------------------------------------------
// Will write about later