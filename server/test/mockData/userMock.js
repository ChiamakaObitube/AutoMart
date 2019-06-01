const validUser = {

  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const undefinedFirstName = {
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const emptyFirstName = {
  firstName: '',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const nonStringFirstName = {
  firstName: ['Chioma'],
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidFirstNameCharacter = {
  firstName: 'C2ioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidFirstNameLength = {
  firstName: 'C',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const undefinedLastName = {
  firstName: 'Chioma',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const emptyLastName = {
  firstName: 'Chioma',
  lastName: '',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const nonStringLastName = {
  firstName: 'Chioma',
  lastName: ['Umeh'],
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidLastNameCharacter = {
  firstName: 'Chioma',
  lastName: 'U2meh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const invalidLastNameLength = {
  firstName: 'Chioma',
  lastName: 'u',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};
const undefinedEmail = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  address: 'Lagos',
  password: '23434',
};

const emptyEmail = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: '',
  address: 'Lagos',
  password: '23434',
};

const nonStringEmail = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: ['chiomab@yahoo.com'],
  address: 'Lagos',
  password: '23434',
};

const existingEmail = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '23434',
};

const undefinedPassword = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
};

const emptyPassword = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '',
};

const nonStringPassword = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: ['23434', '23434'],
};

const invalidPasswordLength = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: '2',
};
const whitespacePassword = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: 'Lagos',
  password: ' ',
};

const undefinedAddress = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  password: '23434',
};

const emptyAddress = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: '',
  password: '23434',

};

const nonStringAddress = {
  firstName: 'Chioma',
  lastName: 'Umeh',
  email: 'chiomab@yahoo.com',
  address: ['Lagos'],
  password: '23434',
};

const validSignIn = {
  email: 'chiomab@yahoo.com',
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
  undefinedAddress,
  emptyAddress,
  nonStringAddress,
  undefinedPassword,
  emptyPassword,
  nonStringPassword,
  invalidPasswordLength,
  whitespacePassword,
  validSignIn,
  undefinedEmailSignin,
  emptyEmailSignin,
  nonStringEmailSignin,
  nonExistingEmail,
  undefinedPasswordSignin,
  emptyPasswordSignin,
  nonStringPasswordSignin,
  validEmailInvalidPassword,
};
