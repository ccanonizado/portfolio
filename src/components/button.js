import styled from '@emotion/styled';

const Button = styled('button')(({ theme }) => ({
  cursor: 'pointer',
  fontSize: '1rem',
  padding: '10px 20px',
  textDecoration: 'none',
  transition: '0.25s ease all',
  color: theme.buttonTextColor,
  backgroundColor: theme.buttonInactiveBgColor,
  border: `1px solid ${theme.buttonBorderColor}`,
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
