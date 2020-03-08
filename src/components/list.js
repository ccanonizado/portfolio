import styled from '@emotion/styled';

const List = styled('ul')({
  listStyleType: 'none',
  '>li:not(:last-child)': {
    marginBottom: '3em'
  }
});

export default List;
