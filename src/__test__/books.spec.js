const supertest = require('supertest');
const app = require('../../bin/www');

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
		const response = await supertest(app).get('/books/find-one?id=5f420f4a6467cc3cfef64842');
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});

});

describe("Testing the create new books API", () => {

	it("tests the base route and returns true for status", async () => {
		const response = await supertest(app).post('/books/create').send({
            "author": "Mihir Jain",
            "title": "Tough us",
            "isbn": "12345678",
            "releaseDate": "2015-03-25"
        })
        expect(response.status).toBe(200);
        expect(Array.isArray([response.body.data])).toBe(true);
		expect(response.body).toHaveProperty('data');
	});

});

describe("Testing the create update books API", () => {

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