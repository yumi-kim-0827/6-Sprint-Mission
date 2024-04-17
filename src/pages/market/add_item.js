import GNB from "components/layouts/GNB";
import { MainLayout } from "components/layouts/Layout";
import AddItemForm from "components/forms/AddItem";

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
