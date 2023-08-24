const xrpl = require('xrpl');
const rxjs = require('rxjs');

class DataValidationOracle {
  constructor() {
    this._validatedData = '';
  }

  validateData(data) {
    const query = new xrpl.QueryBuilder();
    query.select('value');
    query.where('id', data.id);

    return xrpl.query(query).pipe(
      rxjs.map((response) => {
        if (!response.result.value) {
          return new Error('Invalid data');
        }

        this._validatedData = response.result.value;
        return null;
      })
    );
  }

  getOracleData() {
    return this._validatedData;
  }
}

const oracle = new DataValidationOracle();

const data = {
  id: '1234567890',
  value: '100',
};

oracle.validateData(data).subscribe((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Data is valid');
  }
});