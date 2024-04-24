import MainLayout from "components/Layout";
import GNB from "components/Navbar";
import AddItemForm from "templates/market/AddItemForm";

export default function AddItemPage() {
  return (
    <>
      <GNB />
      <MainLayout>
        <AddItemForm />
      </MainLayout>
    </>
  );
}
