export interface PasswordVisibility {
  state: boolean;
  property: 'password' | 'text';
  icon: string;
}

export function togglePasswordVisibility(passwordVisibility: PasswordVisibility): PasswordVisibility {
  let result;
  if (passwordVisibility.state) {
    return {
      state: false,
      property: 'password',
      icon: 'visibility',
    };
  } else {
    return {
      state: true,
      property: 'text',
      icon: 'visibility_off',
    };
  }
}
