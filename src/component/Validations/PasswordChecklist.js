import React from 'react';
import ReactPasswordChecklist from 'react-password-checklist';

/**
 * Render a list item that contains a ReactPasswordChecklist component.
 * @param {*} props - Object that contains the props passed to the component.
 * @param {boolean} props.shouldDisplay - Indicates whether to display the password checklist.
 * @param {string} props.password - The password to be checked.
 * @returns The PasswordChecklist component.
 */
export default function PasswordChecklist({ shouldDisplay, password }) {
  return shouldDisplay && (
    <li>
      {/* Render ReactPasswordChecklist only if shouldDisplay is true */}
      <ReactPasswordChecklist
        // Set the rules to be enforced
        rules={['capital', 'lowercase', 'number', 'specialChar', 'minLength', 'maxLength']}
        minLength={8}
        maxLength={16}
        value={password}
        // Set custom error messages for each rule
        messages={{
          capital: 'At least 1 upper case letters (A To Z)',
          lowercase: 'Lower case letters (a To z)',
          number: 'At least 1 number (0 To 9)',
          specialChar: 'At least 1 of the special characters (!$#,%@)',
          minLength: 'Password length should have minimum 8 characters',
          maxLength: 'Password length should not have more than 16 characters',
        }}
      />
    </li>
  );
}
