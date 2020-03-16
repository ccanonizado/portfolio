import styled from '@emotion/styled';

const Button = styled('button')(({ theme }) => ({
  color: theme.buttonTextColor,
  backgroundColor: theme.buttonInactiveBgColor,
  border: `1px solid ${theme.buttonBorderColor}`,
  fontSize: '1rem',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.25s ease all',
  padding: '10px 20px',
  '&:hover': {
    backgroundColor: theme.buttonActiveBgColor
  },
  '&:hover, &:focus, &:active': {
    outline: 'none'
  },
  '&:after': {
    display: 'none !important'
  }
}));

export default Button;
