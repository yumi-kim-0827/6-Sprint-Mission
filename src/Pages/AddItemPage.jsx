import Header from "../components/Header";
import AddProductFormContainer from "../components/container/AddProductFormContainer";
import AuthenticatedProfileButton from "../components/ui/AuthenticatedProfileButton";

function AddItemPage() {
  return (
    <>
      <Header>
        <AuthenticatedProfileButton />
      </Header>
      <AddProductFormContainer />
    </>
  );
}

export default AddItemPage;
