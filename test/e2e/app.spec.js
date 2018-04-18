const express = require('express');
const expect = require('chai').expect;
const path = require('path');
const Nightmare = require('nightmare');
const Calculator = require('../../src/js/lib/Calculator');
const Mortgage = require('../../src/js/lib/Mortgage');

const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../dist')));

const url = 'http://localhost:8888';

const nightmare = new Nightmare();

describe('End to End Tests', () => {
  let httpServer = null;
  let pageObject = null;

  before((done) => {
    httpServer = app.listen(8888);
    done();
  });

  beforeEach(() => {
    pageObject = nightmare.goto(url);
  });

  after((done) => {
    httpServer.close();
    done();
  });

  it('should contain a h1 element for the page title', () =>
    pageObject
      .evaluate(() => document.querySelector('h1').innerText)
      .then(headerText => {
        expect(headerText).to.not.be.null;
        expect(headerText).to.equal('Mortgage Calculator');
      })
  );

  it('should contain an <input> element with name attribute of principal', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=principal]').name)
      .then(nameAttr => {
        expect(nameAttr).to.equal('principal');
      })
  );

  it('should contain an <input> element with name attribute of interestRate', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=interestRate]').name)
      .then(nameAttr => {
        expect(nameAttr).to.equal('interestRate');
      })
  );
  it('should contain <input> element with name attribute of loanTerm', () =>
    pageObject
      .evaluate(() => document.querySelector('input[name=loanTerm]').name)
      .then(nameAttr => {
        expect(nameAttr).to.equal('loanTerm');
      })
  );

  it('should contain a button element with id=calculate', () =>
    pageObject
      .evaluate(() => document.querySelector('#calculate').id)
      .then(id => {
        expect(id).to.equal('calculate');
      })
  );
  it('should contain a <p> element with id of output', () =>
    pageObject
      .evaluate(() => document.querySelector('#output').id)
      .then(nameAttr => {
        expect(nameAttr).to.equal('output');
      })
  );

  it('should contain a selecty element with id of period', () =>
    pageObject
      .evaluate(() => document.querySelector('#output').id)
      .then(nameAttr => {
        expect(nameAttr).to.equal('output');
      })
  );

  it('should correctly calculate mortgage', () =>
    pageObject
      .wait()
      .type('input[name=principal]', 300000)
      .type('input[name=interestRate]', 3.75)
      .type('input[name=loanTerm]', 30)
      .select('select[name=period]', 12)
      .click('button#calculate')
      .wait('#output')
      .evaluate(() => document.querySelector('#output').innerText)
      .then((outputText) => {
        expect(outputText).to.equal('$1389');
      })
  ).timeout(6500);

});