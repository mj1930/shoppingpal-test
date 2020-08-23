const supertest = require('supertest');
const app = require('../../bin/www');


describe("Testing the create new books API", () => {

	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).post('/books/create').send({
            "author": "Mihir Jain",
            "title": "Better Tomorrow",
            "isbn": "123467",
            "releaseDate": "2015-03-25"
        });
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});
});

describe("Testing the find all books API", () => {

	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/books/find-all');
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});

});

describe("Testing the find one books API", () => {

	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).get('/books/find-one?id=5f423a1bbcf087600137ebaf');
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});

});


describe("Testing the update books API", () => {
	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).post('/books/update').send({
            "author": "Mihir Jain",
            "title": "Seeing yourself into the mirror",
            "isbn": "1234567",
            "releaseDate": "2015-03-25"
        })
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});
});

describe("Testing the update books API", () => {
	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).post('/books/update').send({
            "author": "Mihir Jain",
            "title": "",
            "isbn": "1234567",
            "releaseDate": "2015-03-25"
        })
        expect(response.status).toBe(202);
        expect(typeof response.body.message).toBe('string');
		expect(response.body).toHaveProperty('data');
	});
});