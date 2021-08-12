const translation = {
  sign_in: {
    action: 'Sign In',
    loading: 'Signing in...',
    error: 'Username or password is invalid.',
    username: 'Username',
    password: 'Password',
  },
  register: {
    create_account: 'Create an Account',
    action: 'Create',
    loading: 'Creating Account...',
    have_account: 'Already have an account?',
  },
};

const errors = {
  guard: {
    invalid_input: 'The request input is invalid.',
  },
  oidc: {
    aborted: 'The end-user aborted interaction.',
  },
  user: {
    username_exists: 'The username already exists.',
  },
  session: {
    invalid_credentials: 'Invalid credentials. Please check your input.',
    invalid_sign_in_method: 'Current sign-in method is not available.',
    insufficient_info: 'Insufficent sign-in info.',
  },
  swagger: {
    invalid_zod_type: 'Invalid Zod type, please check route guard config.',
  },
};

const en = Object.freeze({
  translation,
  errors,
});

export default en;