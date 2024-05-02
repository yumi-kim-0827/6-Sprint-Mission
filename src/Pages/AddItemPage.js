import styled from "styled-components";

import AddItemForm from "../components/AddItemForm";
import AuthenticatedProfile from "../components/AuthenticatedProfile";
import Header from "../components/Header";
import { BREAKPOINT } from "../module";

const AlignedAddItemForm = styled(AddItemForm)`
  margin: 24px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 1200px;

  @media (max-width: ${BREAKPOINT.TABLET}px) {
    margin-top: 16px;
    width: 696px;
  }
  @media (max-width: ${BREAKPOINT.MOBILE}px) {
    width: 344px;
  }
`;

function AddItemPage() {
  return (
    <>
      <Header>
        <AuthenticatedProfile />
      </Header>
      <AlignedAddItemForm />
    </>
  );
}

export default AddItemPage;
