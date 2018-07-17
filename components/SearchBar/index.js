import { Button, TextInput } from "cot-experience";
import React from "react";
import styled, { withTheme } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchButton = styled(Button)`
  position: absolute;
  right: 1px;
  top: 0;

  i {
    color: #fff;
  }
`;

const SearchBar = props => {
  return (
    <Wrapper>
      <TextInput placeholder="Search customer" full />
      <SearchButton primary solid icon="search">
        {/* <Icon name="search" />
        ahahaahh */}
      </SearchButton>
    </Wrapper>
  );
};

SearchBar.propTypes = {};

export default withTheme(SearchBar);
