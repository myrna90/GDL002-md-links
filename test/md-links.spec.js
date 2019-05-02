const mdLinks = require('../index.js');


describe('pathInsert', () => {
  it('should be a function', () => {
    expect(typeof mdLinks.pathInsert).toBe("function");
  });
  it('Should return false', () => {
    expect(mdLinks.pathInsert()).toBe(false);
  });
  it('should return true', () => {
    expect(mdLinks.pathInsert('./README.md')).toBe(true);
      });

});

describe("pathExis", () =>{
  it("Should be false", () => {
       expect(mdLinks.pathExis("./README.txt")).toBe(false);
   });
   it("Should be true", () => {
     expect(mdLinks.pathExis("./README.md")).toBe(true);
   });
    });
  
  describe("pathDirectory", () =>{
  it("Should be true", () => {
   expect(mdLinks.pathDirectory("/home/laboratoria-187/GDL002-md-links")).toBe(true);
   });
  it("Should be false", () => {
   expect(mdLinks.pathDirectory("./README.md")).toBe(false);
   });
   });
  
  describe("pathMd", () => {
  it("Should be true", () => {
  expect(mdLinks.pathMd("./README.md")).toBe(true);
  });
  it("Should be false", () => {
  expect(mdLinks.pathMd("./README.txt")).toBe(false);
  });
  });

describe("readFileResult", () => {
  it("Should read the file", () => {
    expect(mdLinks.readFileResult("./prueba.md")).toBe(true);
  });
});

describe("url", () =>{
  it("Should be true", ()=> {
    expect(mdLinks.url("./README.md")).toBe(links);
  });
});

