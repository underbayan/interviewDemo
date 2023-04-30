
import { describe, it, expect } from 'vitest';
import { checkFullNameRegExp, checkEmailRegExp } from './InviteButton'

describe('checkFullNameRegExp', () => {
  it('should match valid full names', () => {
    expect(checkFullNameRegExp('John Doe')).toBe(true)
    expect(checkFullNameRegExp('Adam Smith')).toBe(true)
    expect(checkFullNameRegExp('Bob')).toBe(true)
  })

  it('should not match invalid full names', () => {
    expect(checkFullNameRegExp('')).toBe(false)
    expect(checkFullNameRegExp('John Doe Smith John Doe Smith John Doe Smith John Doe Smith')).toBe(false)
  })
})

describe('checkEmailRegExp', () => {
  it('should match valid email addresses', () => {
    expect(checkEmailRegExp('john@example.com')).toBe(true)
    expect(checkEmailRegExp('jane_doe@gmail.com')).toBe(true)
    expect(checkEmailRegExp('bob@mycompany.co.uk')).toBe(true)
  })

  it('should not match invalid email addresses', () => {
    expect(checkEmailRegExp('')).toBe(false)
    expect(checkEmailRegExp('john@example')).toBe(false)
    expect(checkEmailRegExp('john@.com')).toBe(false)
    expect(checkEmailRegExp('john@example.')).toBe(false)
    expect(checkEmailRegExp('john@exa mple.com')).toBe(false)
  })
})
