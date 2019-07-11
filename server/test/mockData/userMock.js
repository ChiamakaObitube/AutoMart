const validUser = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
  is_admin: null,
};

const undefinedFirstName = {
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const emptyFirstName = {
  first_name: '',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const nonStringFirstName = {
  first_name: ['Chioma'],
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidFirstNameCharacter = {
  first_name: 'C2ioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidFirstNameLength = {
  first_name: 'C',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const undefinedLastName = {
  first_name: 'Chioma',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const emptyLastName = {
  first_name: 'Chioma',
  last_name: '',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const nonStringLastName = {
  first_name: 'Chioma',
  last_name: ['Umeh'],
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidLastNameCharacter = {
  first_name: 'Chioma',
  last_name: 'U2meh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidLastNameLength = {
  first_name: 'Chioma',
  last_name: 'u',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const undefinedEmail = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  address: 'Lagos',
  password: '23434',
};

const emptyEmail = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: '',
  address: 'Lagos',
  password: '23434',
};

const nonStringEmail = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: ['chiomab@yahoo.com'],
  address: 'Lagos',
  password: '23434',
};

const existingEmail = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const whitespaceEmail = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com ',
  address: 'Lagos',
  password: '23434',
};

const undefinedPassword = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
};

const emptyPassword = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '',
};

const nonStringPassword = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: ['23434', '23434'],
};

const invalidPasswordLength = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '2',
};
const whitespacePassword = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: ' ',
};

const undefinedAddress = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  password: '23434',
};

const emptyAddress = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: '',
  password: '23434',

};

const nonStringAddress = {
  first_name: 'Chioma',
  last_name: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: ['Lagos'],
  password: '23434',
};

const validSignIn = {
  email: 'chiomab@yahoo.com',
  password: '23434',
};
const invalidEmailFormat = {
  email: 'chiomabanyahoo.com',
  password: '23434',
};
const undefinedEmailSignin = {
  password: '23434',
};

const emptyEmailSignin = {
  email: '',
  password: '23434',
};

const nonStringEmailSignin = {
  email: ['chiomab@yahoo.com'],
  password: '23434',
};
const nonExistingEmail = {
  email: 'chiomaban@yahoo.com',
  password: '23434',
};

const undefinedPasswordSignin = {
  email: 'chiomab@yahoo.com',
};
const emptyPasswordSignin = {
  email: 'chiomab@yahoo.com',
  password: '',
};
const nonStringPasswordSignin = {
  email: 'chiomab@yahoo.com',
  password: ['23434'],
};

const validEmailInvalidPassword = {
  email: 'chiomab@yahoo.com',
  password: '23434@4',
};

export {
  validUser,
  undefinedFirstName,
  emptyFirstName,
  nonStringFirstName,
  invalidFirstNameCharacter,
  invalidFirstNameLength,
  undefinedLastName,
  emptyLastName,
  nonStringLastName,
  invalidLastNameCharacter,
  invalidLastNameLength,
  undefinedEmail,
  emptyEmail,
  nonStringEmail,
  existingEmail,
  whitespaceEmail,
  undefinedAddress,
  emptyAddress,
  nonStringAddress,
  undefinedPassword,
  emptyPassword,
  nonStringPassword,
  invalidPasswordLength,
  whitespacePassword,
  validSignIn,
  invalidEmailFormat,
  undefinedEmailSignin,
  emptyEmailSignin,
  nonStringEmailSignin,
  nonExistingEmail,
  undefinedPasswordSignin,
  emptyPasswordSignin,
  nonStringPasswordSignin,
  validEmailInvalidPassword,
};
