var cheerio = require('cheerio');
var fs = require('fs');
var path = require('path');
var w3cjs = require('w3cjs');

describe("CS2610 Project Part1 index.html", function() {
  it("should have a working test environment", function() {
    expect(true).toBe(true);
  });

	it('should have an index page with no html errors', function(done){
		w3cjs.validate({
			file: 'index.html',
			callback: function (res) {
				console.log(res);
				if (res.messages.length > 0 ) {
					throw {error: 'html errors have been found', results: res};
				};
				done();
			}
		})
	})

  var indexFilePath = path.join(__dirname, '../index.html')
  var indexFileContents = fs.readFileSync(indexFilePath, { encoding: 'utf8' });
  var $ = cheerio.load(indexFileContents);

  it('should have an index page with a link to index.html and at least one entry', function(){
    expect($("a").length).toBeGreaterThan(1);
	});

  it('should have an index page with a list of entries', function(){
    expect($("ul").length).toBeGreaterThan(0);
  });

  it('should have an index page with a nav section', function(){
    expect($("nav").length).toBeGreaterThan(0);
  });
});

describe("CS2610 Project Part1 about.html", function() {
	it('should have an entry1 page with no html errors', function(done){
		w3cjs.validate({
			file: 'about.html',
			callback: function (res) {
				console.log(res);
				if (res.messages.length > 0 ) {
					throw {error: 'html errors have been found', results: res};
				};
				done();
			}
		})
	})

  var indexFilePath = path.join(__dirname, '../about.html')
  var indexFileContents = fs.readFileSync(indexFilePath, { encoding: 'utf8' });
  var $ = cheerio.load(indexFileContents);

  it('should have an about page with a nav section', function(){
    expect($("nav").length).toBeGreaterThan(0);
  });

  it('should have an entry page with a h1', function(){
    expect($("h1").length).toBeGreaterThan(0);
	});

  it('should have an entry page with two p tags', function(){
    expect($("p").length).toBeGreaterThan(1);
  });
});

describe("CS2610 Project Part1 contact.html", function() {
	it('should have a contact page with no html errors', function(done){
		w3cjs.validate({
			file: 'contact.html',
			callback: function (res) {
				console.log(res);
				if (res.messages.length > 0 ) {
					throw {error: 'html errors have been found', results: res};
				};
				done();
			}
		})
	})

  var indexFilePath = path.join(__dirname, '../contact.html')
  var indexFileContents = fs.readFileSync(indexFilePath, { encoding: 'utf8' });
  var $ = cheerio.load(indexFileContents);

  it('should have an entry page with a nav section', function(){
    expect($("nav").length).toBeGreaterThan(0);
  });

  it('should have an entry page with a h1', function(){
    expect($("h1").length).toBeGreaterThan(0);
	});

  it('should have an entry page with two p tags', function(){
    expect($("form").length).toBeGreaterThan(0);
  });
});
